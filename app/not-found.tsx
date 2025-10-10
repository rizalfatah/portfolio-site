"use client";

import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md text-center">
        <div className="text-9xl font-bold text-primary">404</div>
        <h1 className="mt-6 text-2xl font-bold">Page Not Found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

