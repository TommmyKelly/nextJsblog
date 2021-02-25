const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://6036fe0cfedeaa6bacbfd659--agitated-chandrasekhar-d50d51.netlify.app/";
