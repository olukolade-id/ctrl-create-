import { readdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { projects } from "@/lib/projects";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

export async function GET() {
  const workDirectory = path.join(process.cwd(), "public", "work");
  const items = [];

  for (const project of projects) {
    const folder = path.join(workDirectory, project.slug);
    try {
      const files = await readdir(folder, { withFileTypes: true });
      for (const file of files) {
        const extension = path.extname(file.name).toLowerCase();
        if (!file.isFile() || !imageExtensions.has(extension)) continue;
        items.push({
          image: `/work/${project.slug}/${encodeURIComponent(file.name)}`,
          title: project.title,
          type: project.type,
          slug: project.slug,
        });
      }
    } catch {
      // Empty project folders are valid while work is still in progress.
    }
  }

  return NextResponse.json(items);
}