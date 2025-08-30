import sharp from "sharp";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const quality = parseInt(formData.get("quality")) || 80;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // detect extension
    const fileName = file.name;
    const ext = fileName.split(".").pop().toLowerCase();

    let compressed;

    if (ext === "jpeg" || ext === "jpg") {
      compressed = await sharp(buffer).jpeg({ quality }).toBuffer();
    } else if (ext === "png") {
      compressed = await sharp(buffer).png({ quality, compressionLevel: 9 }).toBuffer();
    } else if (ext === "webp") {
      compressed = await sharp(buffer).webp({ quality }).toBuffer();
    } else {
      return NextResponse.json({ error: "Unsupported format" }, { status: 400 });
    }

    return new NextResponse(compressed, {
      headers: {
        "Content-Type": `image/${ext}`,
        "Content-Disposition": `attachment; filename=compressed-${file.name}`,
      },
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
