const typeDefs = `
    type Article {
        id: ID!
        title: String!
        content: String!
        comments: [Comment!]!
        author: User!
    }
    type User{
        fullName: String!
        name: String!
        dob: String!
    }
    type Comment{
        id: ID!
        title: String!
        content: String!
        article: Article!
    }

    type Query {
        articles(id: ID): [Article!]!
    }

    type Mutation {
        createArticle(title: String!, content: String!, authorId: ID!): Article!
    }
`;

module.exports = typeDefs;