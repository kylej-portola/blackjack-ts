import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "UUID", loc: { start: 7, end: 11 } },
      directives: [],
      loc: { start: 0, end: 11 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 18, end: 22 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 27, end: 29 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 31, end: 33 } },
              loc: { start: 31, end: 33 },
            },
            loc: { start: 31, end: 34 },
          },
          directives: [],
          loc: { start: 27, end: 34 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 37, end: 41 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 43, end: 49 },
              },
              loc: { start: 43, end: 49 },
            },
            loc: { start: 43, end: 50 },
          },
          directives: [],
          loc: { start: 37, end: 50 },
        },
      ],
      loc: { start: 13, end: 52 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 59, end: 64 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "users", loc: { start: 69, end: 74 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "User",
                    loc: { start: 77, end: 81 },
                  },
                  loc: { start: 77, end: 81 },
                },
                loc: { start: 77, end: 82 },
              },
              loc: { start: 76, end: 83 },
            },
            loc: { start: 76, end: 84 },
          },
          directives: [],
          loc: { start: 69, end: 84 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 87, end: 91 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 92, end: 94 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 96, end: 98 },
                  },
                  loc: { start: 96, end: 98 },
                },
                loc: { start: 96, end: 99 },
              },
              directives: [],
              loc: { start: 92, end: 99 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 102, end: 106 },
            },
            loc: { start: 102, end: 106 },
          },
          directives: [],
          loc: { start: 87, end: 106 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "card", loc: { start: 109, end: 113 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "suit",
                loc: { start: 114, end: 118 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CardSuit",
                    loc: { start: 120, end: 128 },
                  },
                  loc: { start: 120, end: 128 },
                },
                loc: { start: 120, end: 129 },
              },
              directives: [],
              loc: { start: 114, end: 129 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "cardRank",
                loc: { start: 131, end: 139 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CardRank",
                    loc: { start: 141, end: 149 },
                  },
                  loc: { start: 141, end: 149 },
                },
                loc: { start: 141, end: 150 },
              },
              directives: [],
              loc: { start: 131, end: 150 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Card",
              loc: { start: 153, end: 157 },
            },
            loc: { start: 153, end: 157 },
          },
          directives: [],
          loc: { start: 109, end: 157 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "cards", loc: { start: 160, end: 165 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Card",
                    loc: { start: 168, end: 172 },
                  },
                  loc: { start: 168, end: 172 },
                },
                loc: { start: 168, end: 173 },
              },
              loc: { start: 167, end: 174 },
            },
            loc: { start: 167, end: 175 },
          },
          directives: [],
          loc: { start: 160, end: 175 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "hands", loc: { start: 178, end: 183 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Hand",
                    loc: { start: 186, end: 190 },
                  },
                  loc: { start: 186, end: 190 },
                },
                loc: { start: 186, end: 191 },
              },
              loc: { start: 185, end: 192 },
            },
            loc: { start: 185, end: 193 },
          },
          directives: [],
          loc: { start: 178, end: 193 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "hand", loc: { start: 196, end: 200 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 201, end: 203 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 205, end: 207 },
                  },
                  loc: { start: 205, end: 207 },
                },
                loc: { start: 205, end: 208 },
              },
              directives: [],
              loc: { start: 201, end: 208 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Hand",
              loc: { start: 211, end: 215 },
            },
            loc: { start: 211, end: 215 },
          },
          directives: [],
          loc: { start: 196, end: 215 },
        },
      ],
      loc: { start: 54, end: 217 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Card", loc: { start: 224, end: 228 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "suit", loc: { start: 233, end: 237 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CardSuit",
                loc: { start: 239, end: 247 },
              },
              loc: { start: 239, end: 247 },
            },
            loc: { start: 239, end: 248 },
          },
          directives: [],
          loc: { start: 233, end: 248 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rank", loc: { start: 251, end: 255 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CardRank",
                loc: { start: 257, end: 265 },
              },
              loc: { start: 257, end: 265 },
            },
            loc: { start: 257, end: 266 },
          },
          directives: [],
          loc: { start: 251, end: 266 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "value", loc: { start: 269, end: 274 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 276, end: 279 } },
            loc: { start: 276, end: 279 },
          },
          directives: [],
          loc: { start: 269, end: 279 },
        },
      ],
      loc: { start: 219, end: 281 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "CardSuit", loc: { start: 288, end: 296 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CLUBS", loc: { start: 301, end: 306 } },
          directives: [],
          loc: { start: 301, end: 306 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "SPADES",
            loc: { start: 309, end: 315 },
          },
          directives: [],
          loc: { start: 309, end: 315 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "HEARTS",
            loc: { start: 318, end: 324 },
          },
          directives: [],
          loc: { start: 318, end: 324 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "DIAMONDS",
            loc: { start: 327, end: 335 },
          },
          directives: [],
          loc: { start: 327, end: 335 },
        },
      ],
      loc: { start: 283, end: 337 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "CardRank", loc: { start: 344, end: 352 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TWO", loc: { start: 357, end: 360 } },
          directives: [],
          loc: { start: 357, end: 360 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "THREE", loc: { start: 363, end: 368 } },
          directives: [],
          loc: { start: 363, end: 368 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FOUR", loc: { start: 371, end: 375 } },
          directives: [],
          loc: { start: 371, end: 375 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FIVE", loc: { start: 378, end: 382 } },
          directives: [],
          loc: { start: 378, end: 382 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SIX", loc: { start: 385, end: 388 } },
          directives: [],
          loc: { start: 385, end: 388 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SEVEN", loc: { start: 391, end: 396 } },
          directives: [],
          loc: { start: 391, end: 396 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EIGHT", loc: { start: 399, end: 404 } },
          directives: [],
          loc: { start: 399, end: 404 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NINE", loc: { start: 407, end: 411 } },
          directives: [],
          loc: { start: 407, end: 411 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TEN", loc: { start: 414, end: 417 } },
          directives: [],
          loc: { start: 414, end: 417 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JACK", loc: { start: 420, end: 424 } },
          directives: [],
          loc: { start: 420, end: 424 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "QUEEN", loc: { start: 427, end: 432 } },
          directives: [],
          loc: { start: 427, end: 432 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "KING", loc: { start: 435, end: 439 } },
          directives: [],
          loc: { start: 435, end: 439 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ACE", loc: { start: 442, end: 445 } },
          directives: [],
          loc: { start: 442, end: 445 },
        },
      ],
      loc: { start: 339, end: 447 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "Hand", loc: { start: 459, end: 463 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 468, end: 470 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 472, end: 474 },
              },
              loc: { start: 472, end: 474 },
            },
            loc: { start: 472, end: 475 },
          },
          directives: [],
          loc: { start: 468, end: 475 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "cards", loc: { start: 478, end: 483 } },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Card",
                  loc: { start: 486, end: 490 },
                },
                loc: { start: 486, end: 490 },
              },
              loc: { start: 486, end: 491 },
            },
            loc: { start: 485, end: 492 },
          },
          directives: [],
          loc: { start: 478, end: 492 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "total", loc: { start: 495, end: 500 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 502, end: 505 },
              },
              loc: { start: 502, end: 505 },
            },
            loc: { start: 502, end: 506 },
          },
          directives: [],
          loc: { start: 495, end: 506 },
        },
      ],
      loc: { start: 449, end: 508 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PlayerHand",
        loc: { start: 515, end: 525 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: { kind: "Name", value: "Hand", loc: { start: 537, end: 541 } },
          loc: { start: 537, end: 541 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 546, end: 548 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 550, end: 552 },
              },
              loc: { start: 550, end: 552 },
            },
            loc: { start: 550, end: 553 },
          },
          directives: [],
          loc: { start: 546, end: 553 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 556, end: 562 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 564, end: 566 },
              },
              loc: { start: 564, end: 566 },
            },
            loc: { start: 564, end: 567 },
          },
          directives: [],
          loc: { start: 556, end: 567 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "cards", loc: { start: 570, end: 575 } },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Card",
                  loc: { start: 578, end: 582 },
                },
                loc: { start: 578, end: 582 },
              },
              loc: { start: 578, end: 583 },
            },
            loc: { start: 577, end: 584 },
          },
          directives: [],
          loc: { start: 570, end: 584 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "total", loc: { start: 587, end: 592 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 594, end: 597 },
              },
              loc: { start: 594, end: 597 },
            },
            loc: { start: 594, end: 598 },
          },
          directives: [],
          loc: { start: 587, end: 598 },
        },
      ],
      loc: { start: 510, end: 600 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "DealerHand",
        loc: { start: 607, end: 617 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: { kind: "Name", value: "Hand", loc: { start: 629, end: 633 } },
          loc: { start: 629, end: 633 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 638, end: 640 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 642, end: 644 },
              },
              loc: { start: 642, end: 644 },
            },
            loc: { start: 642, end: 645 },
          },
          directives: [],
          loc: { start: 638, end: 645 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "cards", loc: { start: 648, end: 653 } },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Card",
                  loc: { start: 656, end: 660 },
                },
                loc: { start: 656, end: 660 },
              },
              loc: { start: 656, end: 661 },
            },
            loc: { start: 655, end: 662 },
          },
          directives: [],
          loc: { start: 648, end: 662 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "total", loc: { start: 665, end: 670 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 672, end: 675 },
              },
              loc: { start: 672, end: 675 },
            },
            loc: { start: 672, end: 676 },
          },
          directives: [],
          loc: { start: 665, end: 676 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "visibleCard",
            loc: { start: 679, end: 690 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Card",
                loc: { start: 692, end: 696 },
              },
              loc: { start: 692, end: 696 },
            },
            loc: { start: 692, end: 697 },
          },
          directives: [],
          loc: { start: 679, end: 697 },
        },
      ],
      loc: { start: 602, end: 699 },
    },
  ],
  loc: { start: 0, end: 700 },
} as unknown as DocumentNode;
