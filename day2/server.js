const express = require("express");
const http = require("http");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  app.use(express.json());
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => ({ req }),
    }),
  );

  const PORT = process.env.PORT || 4000;
  await new Promise((resolve) => httpServer.listen(PORT, resolve));
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
}

startServer();
