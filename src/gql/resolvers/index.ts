import { books } from "../../../db/index.js";

export const resolvers = {
  Query: {
    books: () => books,
    book: (parent: any, args: { bookId: String }, context: any) => {
      const result = books.find((db) => db.id === args.bookId);
      return result;
    },
  },
};
