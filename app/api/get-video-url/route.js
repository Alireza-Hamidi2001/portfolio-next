// app/api/get-video-url/route.js
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
    const url = cloudinary.url("suit-shop_l7zxnq", {
        type: "authenticated",
        sign_url: true,
        secure: true,
        resource_type: "video",
        expires_at: Math.floor(Date.now() / 1000) + 3600, // 1 ساعت بعد منقضی بشه
    });

    console.log("Generated Signed URL:", url);
    return Response.json({ url });
}
