/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
// /** All built-in and custom scalars, mapped to their actual values */
// export type Scalars = {
//   ID: { input: string; output: string; }
//   String: { input: string; output: string; }
//   Boolean: { input: boolean; output: boolean; }
//   Int: { input: number; output: number; }
//   Float: { input: number; output: number; }
//   /** Custom Date scalar type */
//   Date: { input: any; output: any; }
// };

// export type Mutation = {
//   __typename?: 'Mutation';
//   addProduct: Scalars['Int']['output'];
//   buyProduct?: Maybe<Scalars['Boolean']['output']>;
//   register?: Maybe<Scalars['String']['output']>;
//   rentProduct?: Maybe<Scalars['Boolean']['output']>;
//   updateProduct?: Maybe<Scalars['String']['output']>;
// };


// export type MutationAddProductArgs = {
//   categoryIds: Array<Scalars['Int']['input']>;
//   createdBy: Scalars['Int']['input'];
//   description: Scalars['String']['input'];
//   price?: InputMaybe<Scalars['Float']['input']>;
//   rentPrice: Scalars['Float']['input'];
//   rentType?: InputMaybe<Scalars['String']['input']>;
//   title?: InputMaybe<Scalars['String']['input']>;
// };


// export type MutationBuyProductArgs = {
//   productId: Scalars['Int']['input'];
//   userId: Scalars['Int']['input'];
// };


// export type MutationRegisterArgs = {
//   address?: InputMaybe<Scalars['String']['input']>;
//   email?: InputMaybe<Scalars['String']['input']>;
//   firstName: Scalars['String']['input'];
//   lastName?: InputMaybe<Scalars['String']['input']>;
//   password: Scalars['String']['input'];
//   phone?: InputMaybe<Scalars['String']['input']>;
// };


// export type MutationRentProductArgs = {
//   fromDate: Scalars['Date']['input'];
//   productId: Scalars['Int']['input'];
//   toDate: Scalars['Date']['input'];
//   userId: Scalars['Int']['input'];
// };


// export type MutationUpdateProductArgs = {
//   description?: InputMaybe<Scalars['String']['input']>;
//   price?: InputMaybe<Scalars['Float']['input']>;
//   productId: Scalars['Int']['input'];
//   rentPrice?: InputMaybe<Scalars['Float']['input']>;
//   rentType?: InputMaybe<Scalars['String']['input']>;
//   title?: InputMaybe<Scalars['String']['input']>;
// };

// export type ProductListResponse = {
//   __typename?: 'ProductListResponse';
//   categories: Array<Scalars['String']['output']>;
//   createdAt: Scalars['Date']['output'];
//   description: Scalars['String']['output'];
//   id: Scalars['Int']['output'];
//   price: Scalars['Float']['output'];
//   rentPrice: Scalars['Float']['output'];
//   rentType?: Maybe<Scalars['String']['output']>;
//   title: Scalars['String']['output'];
// };

// export type Query = {
//   __typename?: 'Query';
//   deleteProduct?: Maybe<Scalars['Boolean']['output']>;
//   getAllProducts?: Maybe<Array<Maybe<ProductListResponse>>>;
//   getProduct?: Maybe<ProductResponseModel>;
//   getProductsByUserId?: Maybe<Array<Maybe<ProductListResponse>>>;
//   getUserProducts?: Maybe<UserProductsResponse>;
//   login?: Maybe<Scalars['Int']['output']>;
// };


// export type QueryDeleteProductArgs = {
//   productId?: InputMaybe<Scalars['Int']['input']>;
// };


// export type QueryGetProductArgs = {
//   productId?: InputMaybe<Scalars['Int']['input']>;
// };


// export type QueryGetProductsByUserIdArgs = {
//   userId?: InputMaybe<Scalars['Int']['input']>;
// };


// export type QueryGetUserProductsArgs = {
//   userId?: InputMaybe<Scalars['Int']['input']>;
// };


// export type QueryLoginArgs = {
//   email: Scalars['String']['input'];
//   password: Scalars['String']['input'];
// };

// export type ProductResponseModel = {
//   __typename?: 'productResponseModel';
//   categories?: Maybe<Array<Scalars['String']['output']>>;
//   createdAt: Scalars['Date']['output'];
//   description: Scalars['String']['output'];
//   id: Scalars['Int']['output'];
//   price: Scalars['Int']['output'];
//   rentPrice: Scalars['String']['output'];
//   rentType: Scalars['String']['output'];
//   title: Scalars['String']['output'];
//   updatedAt?: Maybe<Scalars['Date']['output']>;
// };

// export type UserProductsResponse = {
//   __typename?: 'userProductsResponse';
//   borrowed?: Maybe<Array<Maybe<ProductListResponse>>>;
//   bought?: Maybe<Array<Maybe<ProductListResponse>>>;
//   lent?: Maybe<Array<Maybe<ProductListResponse>>>;
//   sold?: Maybe<Array<Maybe<ProductListResponse>>>;
// };

// export type GetAllQueryVariables = Exact<{ [key: string]: never; }>;


// export type GetAllQuery = { __typename?: 'Query', getAllProducts?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null };

// export type GetProductByIdQueryVariables = Exact<{
//   productId: Scalars['Int']['input'];
// }>;


// export type GetProductByIdQuery = { __typename?: 'Query', getProduct?: { __typename?: 'productResponseModel', id: number, title: string, description: string, price: number, rentPrice: string, rentType: string, categories?: Array<string> | null, createdAt: any } | null };


// export const GetAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rentType"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetAllQuery, GetAllQueryVariables>;
// export const GetProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rentType"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetProductByIdQuery, GetProductByIdQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Custom Date scalar type */
  Date: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addProduct: Scalars['Int']['output'];
  buyProduct?: Maybe<Scalars['Boolean']['output']>;
  register?: Maybe<Scalars['String']['output']>;
  rentProduct?: Maybe<Scalars['Boolean']['output']>;
  updateProduct?: Maybe<Scalars['String']['output']>;
};


export type MutationAddProductArgs = {
  categoryIds: Array<Scalars['Int']['input']>;
  createdBy: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  rentPrice: Scalars['Float']['input'];
  rentType?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationBuyProductArgs = {
  productId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationRegisterArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRentProductArgs = {
  fromDate: Scalars['Date']['input'];
  productId: Scalars['Int']['input'];
  toDate: Scalars['Date']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productId: Scalars['Int']['input'];
  rentPrice?: InputMaybe<Scalars['Float']['input']>;
  rentType?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListResponse = {
  __typename?: 'ProductListResponse';
  categories: Array<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  rentPrice: Scalars['Float']['output'];
  rentType?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  deleteProduct?: Maybe<Scalars['Boolean']['output']>;
  getAllProducts?: Maybe<Array<Maybe<ProductListResponse>>>;
  getProduct?: Maybe<ProductResponseModel>;
  getProductsByUserId?: Maybe<Array<Maybe<ProductListResponse>>>;
  getUserProducts?: Maybe<UserProductsResponse>;
  login?: Maybe<Scalars['Int']['output']>;
};


export type QueryDeleteProductArgs = {
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetProductArgs = {
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetProductsByUserIdArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserProductsArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ProductResponseModel = {
  __typename?: 'productResponseModel';
  categories?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  rentPrice: Scalars['String']['output'];
  rentType: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type UserProductsResponse = {
  __typename?: 'userProductsResponse';
  borrowed?: Maybe<Array<Maybe<ProductListResponse>>>;
  bought?: Maybe<Array<Maybe<ProductListResponse>>>;
  lent?: Maybe<Array<Maybe<ProductListResponse>>>;
  sold?: Maybe<Array<Maybe<ProductListResponse>>>;
};

export type GetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllQuery = { __typename?: 'Query', getAllProducts?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null };

export type GetProductByIdQueryVariables = Exact<{
  productId: Scalars['Int']['input'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', getProduct?: { __typename?: 'productResponseModel', id: number, title: string, description: string, price: number, rentPrice: string, rentType: string, categories?: Array<string> | null, createdAt: any } | null };


export const GetAllDocument = gql`
    query getAll {
  getAllProducts {
    id
    title
    description
    price
    rentPrice
    rentType
    categories
    createdAt
  }
}
    `;

/**
 * __useGetAllQuery__
 *
 * To run a query within a React component, call `useGetAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllQuery(baseOptions?: Apollo.QueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
      }
export function useGetAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
        }
export function useGetAllSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
        }
export type GetAllQueryHookResult = ReturnType<typeof useGetAllQuery>;
export type GetAllLazyQueryHookResult = ReturnType<typeof useGetAllLazyQuery>;
export type GetAllSuspenseQueryHookResult = ReturnType<typeof useGetAllSuspenseQuery>;
export type GetAllQueryResult = Apollo.QueryResult<GetAllQuery, GetAllQueryVariables>;
export const GetProductByIdDocument = gql`
    query getProductById($productId: Int!) {
  getProduct(productId: $productId) {
    id
    title
    description
    price
    rentPrice
    rentType
    categories
    createdAt
  }
}
    `;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables> & ({ variables: GetProductByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
      }
export function useGetProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
        }
export function useGetProductByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
        }
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdSuspenseQueryHookResult = ReturnType<typeof useGetProductByIdSuspenseQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<GetProductByIdQuery, GetProductByIdQueryVariables>;