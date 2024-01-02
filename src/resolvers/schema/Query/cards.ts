import type { QueryResolvers, Card } from "./../../types.generated";

export const cardsArray: Card[] = [
  { suit: "CLUBS", rank: "TWO", value: 2 },
  { suit: "CLUBS", rank: "THREE", value: 3 },
  { suit: "CLUBS", rank: "FOUR", value: 4 },
  { suit: "CLUBS", rank: "FIVE", value: 5 },
  { suit: "CLUBS", rank: "SIX", value: 6 },
  { suit: "CLUBS", rank: "SEVEN", value: 7 },
  { suit: "CLUBS", rank: "EIGHT", value: 8 },
  { suit: "CLUBS", rank: "NINE", value: 9 },
  { suit: "CLUBS", rank: "TEN", value: 10 },
  { suit: "CLUBS", rank: "JACK", value: 11 },
  { suit: "CLUBS", rank: "QUEEN", value: 11 },
  { suit: "CLUBS", rank: "KING", value: 11 },
  { suit: "CLUBS", rank: "ACE", value: 11 },
];

export const cards: NonNullable<QueryResolvers["cards"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return cardsArray;
};
