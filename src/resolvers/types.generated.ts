/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { Context } from "src/context/context";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  UUID: { input: string; output: string };
};

export type Card = {
  readonly __typename?: "Card";
  readonly rank: CardRank;
  readonly suit: CardSuit;
  readonly value?: Maybe<Scalars["Int"]["output"]>;
};

export type CardRank =
  | "ACE"
  | "EIGHT"
  | "FIVE"
  | "FOUR"
  | "JACK"
  | "KING"
  | "NINE"
  | "QUEEN"
  | "SEVEN"
  | "SIX"
  | "TEN"
  | "THREE"
  | "TWO";

export type CardSuit = "CLUBS" | "DIAMONDS" | "HEARTS" | "SPADES";

export type DealerHand = Hand & {
  readonly __typename?: "DealerHand";
  readonly cards?: Maybe<ReadonlyArray<Card>>;
  readonly id: Scalars["ID"]["output"];
  readonly total: Scalars["Int"]["output"];
  readonly visibleCard: Card;
};

export type Hand = {
  readonly cards?: Maybe<ReadonlyArray<Card>>;
  readonly id: Scalars["ID"]["output"];
  readonly total: Scalars["Int"]["output"];
};

export type PlayerHand = Hand & {
  readonly __typename?: "PlayerHand";
  readonly cards?: Maybe<ReadonlyArray<Card>>;
  readonly id: Scalars["ID"]["output"];
  readonly total: Scalars["Int"]["output"];
  readonly userId: Scalars["ID"]["output"];
};

export type Query = {
  readonly __typename?: "Query";
  readonly card?: Maybe<Card>;
  readonly cards: ReadonlyArray<Card>;
  readonly hand?: Maybe<Hand>;
  readonly hands: ReadonlyArray<Hand>;
  readonly user?: Maybe<User>;
  readonly users: ReadonlyArray<User>;
};

export type QuerycardArgs = {
  cardRank: CardRank;
  suit: CardSuit;
};

export type QueryhandArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryuserArgs = {
  id: Scalars["ID"]["input"];
};

export type User = {
  readonly __typename?: "User";
  readonly id: Scalars["ID"]["output"];
  readonly name: Scalars["String"]["output"];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of interface types */
export type ResolversInterfaceTypes =
  ResolversObject<{
    Hand:
      | (DealerHand & { __typename: "DealerHand" })
      | (PlayerHand & { __typename: "PlayerHand" });
  }>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Card: ResolverTypeWrapper<Card>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  CardRank: CardRank;
  CardSuit: CardSuit;
  DealerHand: ResolverTypeWrapper<DealerHand>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Hand: ResolverTypeWrapper<ResolversInterfaceTypes["Hand"]>;
  PlayerHand: ResolverTypeWrapper<PlayerHand>;
  Query: ResolverTypeWrapper<{}>;
  UUID: ResolverTypeWrapper<Scalars["UUID"]["output"]>;
  User: ResolverTypeWrapper<User>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Card: Card;
  Int: Scalars["Int"]["output"];
  DealerHand: DealerHand;
  ID: Scalars["ID"]["output"];
  Hand: ResolversInterfaceTypes["Hand"];
  PlayerHand: PlayerHand;
  Query: {};
  UUID: Scalars["UUID"]["output"];
  User: User;
  String: Scalars["String"]["output"];
  Boolean: Scalars["Boolean"]["output"];
}>;

export type CardResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Card"] = ResolversParentTypes["Card"],
> = ResolversObject<{
  rank?: Resolver<ResolversTypes["CardRank"], ParentType, ContextType>;
  suit?: Resolver<ResolversTypes["CardSuit"], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealerHandResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["DealerHand"] = ResolversParentTypes["DealerHand"],
> = ResolversObject<{
  cards?: Resolver<
    Maybe<ReadonlyArray<ResolversTypes["Card"]>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  visibleCard?: Resolver<ResolversTypes["Card"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HandResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Hand"] = ResolversParentTypes["Hand"],
> = ResolversObject<{
  __resolveType?: TypeResolveFn<
    "DealerHand" | "PlayerHand",
    ParentType,
    ContextType
  >;
  cards?: Resolver<
    Maybe<ReadonlyArray<ResolversTypes["Card"]>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
}>;

export type PlayerHandResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["PlayerHand"] = ResolversParentTypes["PlayerHand"],
> = ResolversObject<{
  cards?: Resolver<
    Maybe<ReadonlyArray<ResolversTypes["Card"]>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = ResolversObject<{
  card?: Resolver<
    Maybe<ResolversTypes["Card"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycardArgs, "cardRank" | "suit">
  >;
  cards?: Resolver<
    ReadonlyArray<ResolversTypes["Card"]>,
    ParentType,
    ContextType
  >;
  hand?: Resolver<
    Maybe<ResolversTypes["Hand"]>,
    ParentType,
    ContextType,
    RequireFields<QueryhandArgs, "id">
  >;
  hands?: Resolver<
    ReadonlyArray<ResolversTypes["Hand"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, "id">
  >;
  users?: Resolver<
    ReadonlyArray<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
}>;

export interface UUIDScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["UUID"], any> {
  name: "UUID";
}

export type UserResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Card?: CardResolvers<ContextType>;
  DealerHand?: DealerHandResolvers<ContextType>;
  Hand?: HandResolvers<ContextType>;
  PlayerHand?: PlayerHandResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;
