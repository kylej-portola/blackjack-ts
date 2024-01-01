import {
    CardRank,
    CardSuit,
    DealerHand,
    PlayerHand,
    QueryResolvers
} from "../generated/resolvers";
import {GraphQLResolveInfo} from "graphql";

const hands: (PlayerHand | DealerHand)[] = [
    <PlayerHand>{id: 1, userId: 1, cards: [{suit: CardSuit.Clubs, rank: CardRank.Two, value: 2}], total: 2}
]

export const handsResolver: NonNullable<QueryResolvers["hands"]> = (
    _parent,
    {},
    _ctx
) => {
    return hands!;
};

export const handTypeResolver = (
    parent: any,
    _context: any,
    _info: GraphQLResolveInfo
) => {
    if (parent.visibleCard) {
        return "DealerHand";
    } else if (parent.userId) {
        return "PlayerHand";
    }
    return null;
};