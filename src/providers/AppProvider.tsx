"use client";

import { getClient, getSsrExchange } from "@/api";
import { MSWProvider } from "@/providers/MSWProvider";
import { theme } from "@/theme";
import { MantineProvider } from "@mantine/core";
import { UrqlProvider } from "@urql/next";
import { useMemo } from "react";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const [client, ssr] = useMemo(() => {
    const ssr = getSsrExchange;
    const client = getClient();

    return [client, ssr];
  }, []);

  return (
    // <MSWProvider>
    <UrqlProvider client={client} ssr={ssr}>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </UrqlProvider>
    // </MSWProvider>
  );
};
