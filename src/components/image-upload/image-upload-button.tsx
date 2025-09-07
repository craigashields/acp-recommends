"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Upload, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImageUploadButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Uploading...
        </>
      ) : (
        <>
          <Upload className="mr-2 h-4 w-4" />
          Upload Content
        </>
      )}
    </Button>
  );
}
