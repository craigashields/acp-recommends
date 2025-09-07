"use server";

import { v2 as cloudinary } from "cloudinary";
import comicSchema from "@/zodSchemas/comics";
import { revalidateTag } from "next/cache";
import { supabaseAdmin as supabase } from "@/lib/supabase-server";

export type UploadState = {
  data: "success" | null;
  zodErrors: Record<string, string[]> | null;
  message: string | null;
  error: string | null;
};

interface CloudinaryUploadResult {
  public_id: string;
  [key: string]: unknown;
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Supabase admin client is configured in src/lib/supabase-server.ts

export async function uploadContent(
  prevState: UploadState,
  formData: FormData
): Promise<UploadState> {
  //Get form data

  const validatedFields = comicSchema.safeParse({
    title: formData.get("title"),
    episode: formData.get("episode") ? Number(formData.get("episode")) : null,
    recommendedBy: formData.get("recommendedBy"),
    creatorUrl: formData.get("creatorUrl"),
    image: formData.get("image"),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failures, could not upload",
      error: null,
    };
  }

  try {
    // Upload image to Cloudinary
    const bytes = await validatedFields.data.image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const result = await new Promise<CloudinaryUploadResult>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "acp",
            tags: [
              validatedFields.data.title,
              validatedFields.data.episode,
              validatedFields.data.recommendedBy,
            ],
            context: {
              caption: validatedFields.data.title,
              alt: `Recommended by ${validatedFields.data.recommendedBy} on episode ${validatedFields.data.episode} of The Awesome Comics Podcast`,
              episode: validatedFields.data.episode,
              recommended_by: validatedFields.data.recommendedBy,
            },
          },
          (error, result) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(result as CloudinaryUploadResult);
          }
        );
        uploadStream.end(buffer);
      }
    );
    // Store data in Supabase
    const { error } = await supabase.from("acp_recommendsv2").insert([
      {
        title: validatedFields.data.title,
        episode: validatedFields.data.episode,
        creatorUrl: validatedFields.data.creatorUrl,
        recommended_by: validatedFields.data.recommendedBy,
        cloudinary_image_id: result.public_id,
      },
    ]);
    if (error) throw error;

    // Invalidate cached comics so new data appears immediately
    revalidateTag("comics");
    return {
      data: "success",
      zodErrors: null,
      message: null,
      error: null,
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      data: null,
      zodErrors: null,
      message: null,
      error: "Failed to upload content",
    };
  }
}
