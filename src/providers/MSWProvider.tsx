"use client";

import { browserEnv } from "@/libs";
import { Suspense, use } from "react";
// Ref: https://creators.bengo4.com/entry/2024/10/10/083000

let mockingPromise: Promise<boolean> | undefined;

// ブラウザで実行している場合は、ワーカーを開始
if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development" &&
  browserEnv.NEXT_PUBLIC_MOCK_ENABLED === "true"
) {
  const { worker } = require("../../.mocks/browser");
  mockingPromise = worker.start();
}

export const MSWProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );
};

function MSWProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (mockingPromise) {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    use(mockingPromise!);
  }
  return children;
}
