import {makeExecutableSchema} from "@graphql-tools/schema";
import typeDefs from "./schema.graphql"
import { Resolvers } from "./generated/resolvers";
import {userResolver, usersResolver} from "./resolvers/userResolvers";
import {cardResolver, cardsResolver} from "./resolvers/cardResolvers";
import {handsResolver, handTypeResolver} from "./resolvers/handResolvers";

const resolvers: Resolvers = {
    Hand: {
        __resolveType: handTypeResolver
    },
    Query: {
        user: userResolver,
        users: usersResolver,
        card: cardResolver,
        cards: cardsResolver,
        hands: handsResolver
    }
}

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
