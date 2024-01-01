import {Card, CardRank, CardSuit, QueryResolvers} from "../generated/resolvers";

const cards: Card[] = [
    { suit: CardSuit.Clubs, rank: CardRank.Two, value: 2 },
    { suit: CardSuit.Clubs, rank: CardRank.Three, value: 3 },
    { suit: CardSuit.Clubs, rank: CardRank.Four, value: 4 },
    { suit: CardSuit.Clubs, rank: CardRank.Five, value: 5 },
    { suit: CardSuit.Clubs, rank: CardRank.Six, value: 6 },
    { suit: CardSuit.Clubs, rank: CardRank.Seven, value: 7 },
    { suit: CardSuit.Clubs, rank: CardRank.Eight, value: 8 },
    { suit: CardSuit.Clubs, rank: CardRank.Nine, value: 9 },
    { suit: CardSuit.Clubs, rank: CardRank.Ten, value: 10 },
    { suit: CardSuit.Clubs, rank: CardRank.Jack, value: 11 },
    { suit: CardSuit.Clubs, rank: CardRank.Queen, value: 11 },
    { suit: CardSuit.Clubs, rank: CardRank.Queen, value: 11 },
    { suit: CardSuit.Clubs, rank: CardRank.Ace, value: 11 }
]

export const cardResolver: NonNullable<QueryResolvers["card"]> = (
    _parent,
    { suit, cardRank },
    _ctx
) => {
    return cards.find((card) => card.suit === suit && card.rank === cardRank) ?? null;
};

export const cardsResolver: NonNullable<QueryResolvers["cards"]> = (
    _parent,
    { },
    _ctx
) => {
    return cards;
};