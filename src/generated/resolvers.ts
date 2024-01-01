import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  UUID: { input: any; output: any; }
};

export type Card = {
  __typename?: 'Card';
  rank: CardRank;
  suit: CardSuit;
  value?: Maybe<Scalars['Int']['output']>;
};

export enum CardRank {
  Ace = 'ACE',
  Eight = 'EIGHT',
  Five = 'FIVE',
  Four = 'FOUR',
  Jack = 'JACK',
  King = 'KING',
  Nine = 'NINE',
  Queen = 'QUEEN',
  Seven = 'SEVEN',
  Six = 'SIX',
  Ten = 'TEN',
  Three = 'THREE',
  Two = 'TWO'
}

export enum CardSuit {
  Clubs = 'CLUBS',
  Diamonds = 'DIAMONDS',
  Hearts = 'HEARTS',
  Spades = 'SPADES'
}

export type DealerHand = Hand & {
  __typename?: 'DealerHand';
  cards?: Maybe<Array<Card>>;
  id: Scalars['ID']['output'];
  total: Scalars['Int']['output'];
  visibleCard: Card;
};

export type Hand = {
  cards?: Maybe<Array<Card>>;
  id: Scalars['ID']['output'];
  total: Scalars['Int']['output'];
};

export type PlayerHand = Hand & {
  __typename?: 'PlayerHand';
  cards?: Maybe<Array<Card>>;
  id: Scalars['ID']['output'];
  total: Scalars['Int']['output'];
  userId: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  card?: Maybe<Card>;
  cards: Array<Card>;
  hands: Array<Hand>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryCardArgs = {
  cardRank: CardRank;
  suit: CardSuit;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes = ResolversObject<{
  Hand: ( DealerHand ) | ( PlayerHand );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Card: ResolverTypeWrapper<Card>;
  CardRank: CardRank;
  CardSuit: CardSuit;
  DealerHand: ResolverTypeWrapper<DealerHand>;
  Hand: ResolverTypeWrapper<ResolversInterfaceTypes['Hand']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PlayerHand: ResolverTypeWrapper<PlayerHand>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Card: Card;
  DealerHand: DealerHand;
  Hand: ResolversInterfaceTypes['Hand'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  PlayerHand: PlayerHand;
  Query: {};
  String: Scalars['String']['output'];
  UUID: Scalars['UUID']['output'];
  User: User;
}>;

export type CardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Card'] = ResolversParentTypes['Card']> = ResolversObject<{
  rank?: Resolver<ResolversTypes['CardRank'], ParentType, ContextType>;
  suit?: Resolver<ResolversTypes['CardSuit'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealerHandResolvers<ContextType = any, ParentType extends ResolversParentTypes['DealerHand'] = ResolversParentTypes['DealerHand']> = ResolversObject<{
  cards?: Resolver<Maybe<Array<ResolversTypes['Card']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visibleCard?: Resolver<ResolversTypes['Card'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HandResolvers<ContextType = any, ParentType extends ResolversParentTypes['Hand'] = ResolversParentTypes['Hand']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DealerHand' | 'PlayerHand', ParentType, ContextType>;
  cards?: Resolver<Maybe<Array<ResolversTypes['Card']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type PlayerHandResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerHand'] = ResolversParentTypes['PlayerHand']> = ResolversObject<{
  cards?: Resolver<Maybe<Array<ResolversTypes['Card']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  card?: Resolver<Maybe<ResolversTypes['Card']>, ParentType, ContextType, RequireFields<QueryCardArgs, 'cardRank' | 'suit'>>;
  cards?: Resolver<Array<ResolversTypes['Card']>, ParentType, ContextType>;
  hands?: Resolver<Array<ResolversTypes['Hand']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
}>;

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Card?: CardResolvers<ContextType>;
  DealerHand?: DealerHandResolvers<ContextType>;
  Hand?: HandResolvers<ContextType>;
  PlayerHand?: PlayerHandResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;

