import { z } from "zod";
// import { PredefinedRecommendedBy } from "@/types/comics";

// Helper to generate error message for recommendedBy
// const recommendedByErrorMessage = `RecommendedBy must be one of the following: ${PredefinedRecommendedBy.join(
//   ", "
// )}.`;

// Schema definition
const comicUploadSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required and cannot be empty." })
    .max(200, { message: "Title must be 200 characters or fewer." }),
  episode: z
    .number({ invalid_type_error: "Episode must be a number." })
    .min(1, { message: "Episode must be at least 1." }),
  recommendedBy: z
    .string()
    .min(1, { message: "RecommendedBy is required and cannot be empty." })
    .max(200, { message: "RecommendedBy must be 100 characters or fewer." }),
  creatorUrl: z.string().url({ message: "Creator URL must be a valid URL." }),
  image: z.any().refine((file): file is File => file instanceof File, {
    message: "Image must be a valid file.",
  }),
});

// Export schema and inferred types
export default comicUploadSchema;
