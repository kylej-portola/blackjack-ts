import {makeExecutableSchema} from "@graphql-tools/schema";
import typeDefs from "./schema.graphql"
import {resolvers} from "../resolvers/resolvers.generated";
// const resolvers: Resolvers = {
//     Hand: {
//         __resolveType: handTypeResolver
//     },
//     Query: {
//         user: userResolver,
//         users: usersResolver,
//         card: cardResolver,
//         cards: cardsResolver,
//         hand: handResolver,
//         hands: handsResolver
//     }
// }

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
