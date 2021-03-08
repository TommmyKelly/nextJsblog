const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://next-jsblog-p5z0f9t7q-tommmykelly.vercel.app/";
