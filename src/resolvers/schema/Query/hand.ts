import { QueryResolvers } from "../../types.generated";

// const hands  = [
//     <PlayerHand>{ __typename: "PlayerHand", id: 1, userId: 1, cards: [{suit: "CLUBS", rank: "TWO", value: 2}], total: 2}
// ]
export const hand: NonNullable<QueryResolvers["hand"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  // return hands.find((hand) => hand.id === +_arg.id) ?? null;

  // todo - fix the resolver statement above
  return {
    __typename: "PlayerHand",
    id: 1,
    userId: 1,
    cards: [{ suit: "CLUBS", rank: "TWO", value: 2 }],
    total: 2,
  };
};
