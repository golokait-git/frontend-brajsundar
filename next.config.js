/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "media.rss.com", "admin.brajsundar.com", "img.youtube.com", "media.brajsundar.com", "dme2wmiz2suov.cloudfront.net"],
        remotePatterns: [
            {
                hostname: "brajsundar.s3.ap-south-1.amazonaws.com",
            },
        ]
    },
}

module.exports = nextConfig
