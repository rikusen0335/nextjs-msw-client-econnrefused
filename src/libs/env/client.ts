import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const browserEnv = createEnv({
  // クライアント側の環境変数
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url().default("http://localhost:4000"),
    NEXT_PUBLIC_API_URL: z
      .string()
      .url()
      .default("http://localhost:4000/api/graphql"),
    NEXT_PUBLIC_MOCK_ENABLED: z.string().default("false"),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_MOCK_ENABLED: process.env.NEXT_PUBLIC_MOCK_ENABLED,
  },
});
