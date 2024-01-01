import {User} from "./generated/resolvers";

export interface Context {
    isAdmin?: boolean;
    user?: User;
}