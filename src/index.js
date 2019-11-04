import "dotenv/config";
import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import models, { sequelize } from "./models";

const app = express();
app.use(cors());
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
  }
});

server.applyMiddleware({ app, path: "/graphql" });

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    seedDB();
  }
  app.listen({ port: 8000 }, () => {
    console.log("Apollo Server on http://localhost:8000/graphql");
  });
});

const seedDB = async () => {
  await models.Product.create(
    {
      name: "Yogurt",
      unitPrice: 15.3,
      description: "Nutritivo"
    },
    {}
  );
  await models.Product.create(
    {
      name: "Cereal",
      unitPrice: 14.4,
      description: "Rico"
    },
    {}
  )
};
