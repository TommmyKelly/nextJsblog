const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://next-jsblog-kxfaz1eed-tommmykelly.vercel.app/api/articles";
