import {makeExecutableSchema} from "@graphql-tools/schema";
import {User} from "./types";
import typeDefs from "./schema.graphql"
import {Context} from "./context";

export type QueryUserArgs = {
    id: number
    name: String
}

const resolvers = {
    Query: {
        user: (_parent: any, _args: QueryUserArgs, _contextValue: Context, _info: any) => {
            return users.find((user) => user.id === +_args.id);
        },
        users: () => users
    }
}

const users: User[] = [
    {id: 1, name: 'Kyle'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Eric'}
]

// const cards = [
//     { suit: 'Clubs', rank: 'Two', value: 2 },
//     { suit: 'Clubs', rank: 'Three', value: 3 },
//     { suit: 'Clubs', rank: 'Four', value: 4 },
//     { suit: 'Clubs', rank: 'Five', value: 5 },
//     { suit: 'Clubs', rank: 'Six', value: 6 },
//     { suit: 'Clubs', rank: 'Seven', value: 7 },
//     { suit: 'Clubs', rank: 'Eight', value: 8 },
//     { suit: 'Clubs', rank: 'Nine', value: 9 },
//     { suit: 'Clubs', rank: 'Ten', value: 10 },
//     { suit: 'Clubs', rank: 'Jack', value: 11 },
//     { suit: 'Clubs', rank: 'Queen', value: 11 },
//     { suit: 'Clubs', rank: 'King', value: 11 },
//     { suit: 'Clubs', rank: 'Ace', value: 11 }
// ]

// const hands: Hand[] = [
//     {id: 1, userId: 1, cards: [{suit: 'Clubs', rank: 'Two', value: 2}]}
// ]

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
