/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Custom Date scalar type */
  Date: { input: any; output: any };
};

export type Mutation = {
  __typename?: "Mutation";
  addProduct?: Maybe<Scalars["String"]["output"]>;
  buyProduct?: Maybe<Scalars["Boolean"]["output"]>;
  register?: Maybe<Scalars["String"]["output"]>;
  rentProduct?: Maybe<Scalars["Boolean"]["output"]>;
  updateProduct?: Maybe<Scalars["String"]["output"]>;
};

export type MutationAddProductArgs = {
  categoryIds: Array<Scalars["Int"]["input"]>;
  description: Scalars["String"]["input"];
  price?: InputMaybe<Scalars["Float"]["input"]>;
  rentPrice: Scalars["Float"]["input"];
  rentType?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationBuyProductArgs = {
  productId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

export type MutationRegisterArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName: Scalars["String"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  phone: Scalars["String"]["input"];
};

export type MutationRentProductArgs = {
  fromDate: Scalars["Date"]["input"];
  productId: Scalars["Int"]["input"];
  toDate: Scalars["Date"]["input"];
  userId: Scalars["Int"]["input"];
};

export type MutationUpdateProductArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  productId: Scalars["Int"]["input"];
  rentPrice?: InputMaybe<Scalars["Float"]["input"]>;
  rentType?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductListResponse = {
  __typename?: "ProductListResponse";
  categories: Array<Scalars["String"]["output"]>;
  createdAt: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  rentPrice: Scalars["Float"]["output"];
  rentType?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  deleteProduct?: Maybe<Scalars["Boolean"]["output"]>;
  getAllProducts?: Maybe<Array<Maybe<ProductListResponse>>>;
  login?: Maybe<Scalars["Boolean"]["output"]>;
};

export type QueryDeleteProductArgs = {
  productId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type GetAllQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllQuery = {
  __typename?: "Query";
  getAllProducts?: Array<{
    __typename?: "ProductListResponse";
    title: string;
    description: string;
    price: number;
    rentPrice: number;
    rentType?: string | null;
    categories: Array<string>;
    createdAt: string;
  } | null> | null;
};

export const GetAllDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAll" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getAllProducts" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "rentPrice" } },
                { kind: "Field", name: { kind: "Name", value: "rentType" } },
                { kind: "Field", name: { kind: "Name", value: "categories" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllQuery, GetAllQueryVariables>;

export function useGetAllQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllQuery, GetAllQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllQuery, GetAllQueryVariables>(
    GetAllDocument,
    options
  );
}
export function useGetAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllQuery, GetAllQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllQuery, GetAllQueryVariables>(
    GetAllDocument,
    options
  );
}
export function useGetAllSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetAllQuery, GetAllQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllQuery, GetAllQueryVariables>(
    GetAllDocument,
    options
  );
}
export type GetAllQueryHookResult = ReturnType<typeof useGetAllQuery>;
export type GetAllLazyQueryHookResult = ReturnType<typeof useGetAllLazyQuery>;
export type GetAllSuspenseQueryHookResult = ReturnType<
  typeof useGetAllSuspenseQuery
>;
export type GetAllQueryResult = Apollo.QueryResult<
  GetAllQuery,
  GetAllQueryVariables
>;
