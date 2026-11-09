import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file provided in form data." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const origName = file.name || "upload.jpg";
    const ext = path.extname(origName) || ".jpg";
    const baseName = path
      .basename(origName, ext)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "-");
    const filename = `${baseName}-${Date.now()}${ext}`;

    const postsDir = path.join(process.cwd(), "public", "posts");
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }

    const filePath = path.join(postsDir, filename);
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/posts/${filename}`;

    return NextResponse.json({
      success: true,
      filename,
      url: publicUrl,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

