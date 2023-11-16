export const typeDefs = `#graphql
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
