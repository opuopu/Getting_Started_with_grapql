import { books } from "../../../db/index.js";
export const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args, context) => {
            const result = books.find((db) => db.id === args.bookId);
            return result;
        },
    },
};
