const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
    // use expresia path for production and localhost for development.
    assetPrefix: isProd ? "/__xpr__/pub_engine/nextjs-blog/web" : ""
}
  
module.exports = nextConfig;