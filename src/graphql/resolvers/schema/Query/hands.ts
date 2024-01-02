import { QueryResolvers } from "../../types.generated";

export const hands: NonNullable<QueryResolvers["hands"]> = (
  _parent,
  _arg,
  _ctx,
) => {
  return [
    {
      __typename: "PlayerHand",
      id: 1,
      userId: 1,
      cards: [{ suit: "CLUBS", rank: "TWO", value: 2 }],
      total: 2,
    },
  ];
};
