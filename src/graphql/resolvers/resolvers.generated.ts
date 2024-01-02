/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Card } from "./schema/Card";
import { DealerHand } from "./schema/DealerHand";
import { PlayerHand } from "./schema/PlayerHand";
import { card as Query_card } from "./schema/Query/card";
import { cards as Query_cards } from "./schema/Query/cards";
import { hand as Query_hand } from "./schema/Query/hand";
import { hands as Query_hands } from "./schema/Query/hands";
import { user as Query_user } from "./schema/Query/user";
import { users as Query_users } from "./schema/Query/users";
import { User } from "./schema/User";
import { UUIDResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
  Query: {
    card: Query_card,
    cards: Query_cards,
    hand: Query_hand,
    hands: Query_hands,
    user: Query_user,
    users: Query_users,
  },

  Card: Card,
  DealerHand: DealerHand,
  PlayerHand: PlayerHand,
  User: User,
  UUID: UUIDResolver,
};
