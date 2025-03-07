"use client";

import { gql, useQuery } from "@urql/next";

const q = gql`
  query ListBooks {
    books {
      results {
        id
        name
      }
    }
  }
`;

export const Client = () => {
  const [result] = useQuery({ query: q });

  return <p>{JSON.stringify(result.data)}</p>;
};
