import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    products: [Product!]
    product(id: ID!): Product
  }
  type Product {
    id: ID!
    name: String!
    unitPrice: Float!
    description: String!
  }
`;