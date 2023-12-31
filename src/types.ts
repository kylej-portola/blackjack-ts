
export type User = {
    id: number;
    name: String;
}

export type Card = {
    suit: String;
    rank: String;
    value: number;
}

export type Hand = {
    id: number;
    userId: number;
    cards: Card[]
}