import { GraphQLServer } from 'graphql-yoga'

// 5- scalar types in graphQL - String, boolean, Int, Float, and ID
// type definitions (schema)

const typeDefs = `
type Query {
  title: String!
  price: Float!
  releaseYear: Int
  rating: Float
  inStock: Boolean!

}
`

//Resolvers - functions that run when operations are done

const resolvers = {
  Query: {
    title(){
      return 'Name of product'
    },
    price() {
      return 9.99
    },
    releaseYear() {
      return null
    },
    rating() {
      return 3.78
    },
    inStock() {
      return false
    }

  }
}

const server = new GraphQLServer({
  typeDefs, resolvers
})

server.start(() => {
  console.log('The server is up and running')
})