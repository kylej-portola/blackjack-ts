import { QueryResolvers, User } from "../../types.generated";

const users: User[] = [
  { id: 1, name: "Kyle" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Eric" },
];

export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return users.find((user) => user.id === +_arg.id) ?? null;
};
