import { User } from "./types"
export interface Context {
    isAdmin?: boolean;
    user?: User;
}