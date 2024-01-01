import {QueryResolvers, User} from "../generated/resolvers";

export const userResolver: NonNullable<QueryResolvers["user"]> = (
    _parent,
    { id },
    _ctx
) => {
    return users.find((user) => user.id === +id) ?? null;
};

export const usersResolver:  NonNullable<QueryResolvers["users"]> = (
    _parent,
    {  },
    _ctx
) => {
    return users;
};

const users: User[] = [
    {id: 1, name: 'Kyle'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Eric'}
]