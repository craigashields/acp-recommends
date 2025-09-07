"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { uploadContent } from "@/actions/upload";
import ImageUploadButton from "./image-upload-button";
import { useFormState } from "react-dom";
import { ZodErrors } from "../zodErrors";
import React from "react";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};
export default function ImageUpload() {
  const [formState, formAction] = useFormState(uploadContent, INITIAL_STATE);
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.data === "success") {
      formRef.current?.reset();
    }
  }, [formState]);

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Recommend</CardTitle>
        <CardDescription>Add new recommendation to the site</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" placeholder="Enter the title" />
            <ZodErrors error={formState?.zodErrors?.title} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="episode">Episode</Label>
            <Input
              id="episode"
              name="episode"
              type="number"
              min="1"
              required
              placeholder="Enter the episode"
            />
            <ZodErrors error={formState?.zodErrors?.episode} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="recommendedBy">Recommended By</Label>
            <Input
              id="recommendedBy"
              name="recommendedBy"
              required
              placeholder="Enter who recommended this"
            />
            <ZodErrors error={formState?.zodErrors?.recommendedBy} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="creatorUrl">Creator URL</Label>
            <Input
              id="creatorUrl"
              name="creatorUrl"
              required
              placeholder="Enter the link to the title"
            />
            <ZodErrors error={formState?.zodErrors?.creatorUrl} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              required
              accept="image/*"
              className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
            <ZodErrors error={formState?.zodErrors?.image} />
          </div>
          <ImageUploadButton />
        </form>
      </CardContent>
    </Card>
  );
}
