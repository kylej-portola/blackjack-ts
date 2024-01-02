import { QueryResolvers, User } from "../../types.generated";

const usersArray: User[] = [
  { id: 1, name: "Kyle" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Eric" },
];

export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return usersArray;
};
