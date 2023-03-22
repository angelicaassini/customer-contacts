/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.amazonaws.com", "www.cpfl.com.br", "www.amazon.com.br", "carbotrader.com"],
    formats: ["image/webp"]
  }
}

module.exports = nextConfig
