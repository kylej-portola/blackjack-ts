import { QueryResolvers } from "../../types.generated";

// const handsArray: (PlayerHand | DealerHand| undefined)[] = [
//     <PlayerHand>{id: 1, userId: 1, cards: [{suit: "CLUBS", rank: "TWO", value: 2}], total: 2}
// ]
export const hands: NonNullable<QueryResolvers["hands"]> = (
  _parent,
  _arg,
  _ctx,
) => {
  // todo - fix type in array
  // return handsArray

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
