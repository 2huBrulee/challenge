import { gql } from 'apollo-server-express';

export default gql`
  extend type Mutation {
    createOrder(products: [OrderProduct!]!): Int
  }
  type Order {
    id: ID!
    products: [Product!]!
    totalPrice: Float
  }
  input OrderProduct {
      id: ID!
      quantity: Int!
  }
`;