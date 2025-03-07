import { graphql, http, HttpResponse } from "msw";

const apiLink = graphql.link("http://localhost:4000/api/graphql");
export const handlers = [
  // graphql.operation(({ query, variables }) => {
  //   // Intercept all GraphQL operations and respond
  //   // to them with the error response.
  //   console.log("----- ERROR -----");
  //   console.log("query:", query);
  //   console.log("variables:", variables);
  //   console.log("----- ERROR -----");
  //   console.log("");
  //   return HttpResponse.json({
  //     errors: [{ message: "Request failed" }],
  //   });
  // }),
  http.get(
    "https://example.com/user",
    () => {
      // ...and respond to them using this JSON response.
      return HttpResponse.json({
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        firstName: "John",
        lastName: "Maverick",
      });
    },
    { once: true }
  ),
  graphql.query("ListBooks", ({ query }) => {
    console.log('Intercepted a "ListBooks" GraphQL query:', query);
    return HttpResponse.json({
      data: {
        results: [
          {
            id: 1,
            name: "hogee",
          },
        ],
      },
    });
  }),
];
