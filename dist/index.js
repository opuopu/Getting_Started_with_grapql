import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `#graphql
  type Book {
    id:String
    title: String
    author: String
  }


  type Query {
    books: [Book]
    book(bookId:ID!):Book
  }
`;
const books = [
    {
        id: "1",
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        id: "1",
        title: "City of Glass",
        author: "Paul Auster",
    },
];
const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args, context) => {
            const result = books.find((db) => db.id === args.bookId);
            return result;
        },
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
