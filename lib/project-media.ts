import { access } from "node:fs/promises";
import path from "node:path";

const extensions = ["jpg", "jpeg", "png", "webp"];

async function findFile(slug: string, name: string) {
  for (const extension of extensions) {
    const relativePath = `/work/${slug}/${name}.${extension}`;
    try {
      await access(path.join(process.cwd(), "public", relativePath));
      return relativePath;
    } catch {
      continue;
    }
  }
  return undefined;
}

export async function getProjectMedia(slug: string) {
  const [thumbnail, hero] = await Promise.all([
    findFile(slug, "thumbnail"),
    findFile(slug, "hero"),
  ]);
  return { thumbnail, hero };
}