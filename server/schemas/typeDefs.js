const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input SaveBookInput{
        bookId: ID
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SaveBookInput): User
        removeBook(bookId: ID!): User
    }

`

module.exports = typeDefs;