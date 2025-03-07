import { getClient } from "@/api";
import { Client } from "@/components/Client";
import { gql } from "@urql/next";
// import { styles } from "./page.css";

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

export default async function Home() {
  const result = await getClient().query(q, {});

  console.log("data", result);

  // const response = await fetch("https://example.com/user");
  // const jsonResponse = await response.json();
  // console.log("🚀 ~ onClick ~ jsonResponse:", jsonResponse);

  return (
    <div>
      <p>Server:</p>
      <p>{JSON.stringify(result.data)}</p>
      <p>---------------------------------------------------</p>
      <p>Client:</p>
      <Client />
    </div>
  );
}
