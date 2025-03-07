import { browserEnv } from "@/libs/env";
import {
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
} from "@urql/next";
import { registerUrql } from "@urql/next/rsc";

export const getSsrExchange = ssrExchange({
  isClient: typeof window !== "undefined",
});

export const makeClient = (token?: string) => {
  return createClient({
    url: browserEnv.NEXT_PUBLIC_API_URL,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    },
    requestPolicy: "network-only",
  });
};

export const { getClient } = registerUrql(makeClient);
