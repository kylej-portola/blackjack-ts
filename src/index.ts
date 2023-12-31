import 'graphql-import-node';
import { schema } from "./schema";
import {Context} from "./context";
import type {ListenOptions} from "net";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

async function startApolloServer(context: Context = {}, options: ListenOptions = {port: 4000}) {
    const server = new ApolloServer<Context>({
        schema,
    });
    const {url} = await startStandaloneServer<Context>(server, {
        context: () => Promise.resolve(context),
        listen: options,
    });

    return {server, url};
}

startApolloServer();