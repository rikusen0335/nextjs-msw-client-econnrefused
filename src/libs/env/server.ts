import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  // サーバ側の環境変数
  server: {},
  experimental__runtimeEnv: {},
});
