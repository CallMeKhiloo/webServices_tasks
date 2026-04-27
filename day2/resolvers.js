const schema = require("./schema");
const { authors, comments, articles } = require("./data");

const resolvers = {
  Query: {
    articles: (parent, args, context, info) => {
      if (args.id) {
        return articles.filter((article) => article.id === args.id);
      }
      return articles;
    },
  },
  Article: {
    author: (parent, args, context, info) => {
      return authors.find((author) => author.id === parent.authorId);
    },
    comments: (parent, args, context, info) => {
      return comments.filter((comment) => comment.articleId === parent.id);
    },
  },
};

module.exports = resolvers;
