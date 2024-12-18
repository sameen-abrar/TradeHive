/* eslint-disable */
// import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

// export type RegisterMutationMutationVariables = Exact<{
//   firstName: Scalars['String']['input'];
//   lastName: Scalars['String']['input'];
//   email: Scalars['String']['input'];
//   phone: Scalars['String']['input'];
//   password: Scalars['String']['input'];
//   address: Scalars['String']['input'];
// }>;


// export type RegisterMutationMutation = { __typename?: 'Mutation', register?: string | null };

// export type AddProductMutationVariables = Exact<{
//   title: Scalars['String']['input'];
//   description: Scalars['String']['input'];
//   price: Scalars['Float']['input'];
//   rentPrice: Scalars['Float']['input'];
//   rentType?: InputMaybe<Scalars['String']['input']>;
//   categoryIds: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
//   createdBy: Scalars['Int']['input'];
// }>;


// export type AddProductMutation = { __typename?: 'Mutation', addProduct: number };

// export type UpdateProductMutationVariables = Exact<{
//   productId: Scalars['Int']['input'];
//   title?: InputMaybe<Scalars['String']['input']>;
//   description?: InputMaybe<Scalars['String']['input']>;
//   price?: InputMaybe<Scalars['Float']['input']>;
//   rentPrice: Scalars['Float']['input'];
//   rentType?: InputMaybe<Scalars['String']['input']>;
// }>;


// export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct?: string | null };

// export type RentMutationVariables = Exact<{
//   productId: Scalars['Int']['input'];
//   userId: Scalars['Int']['input'];
//   fromDate: Scalars['Date']['input'];
//   toDate: Scalars['Date']['input'];
// }>;


// export type RentMutation = { __typename?: 'Mutation', rentProduct?: boolean | null };

// export type BuyMutationVariables = Exact<{
//   userId: Scalars['Int']['input'];
//   productId: Scalars['Int']['input'];
// }>;


// export type BuyMutation = { __typename?: 'Mutation', buyProduct?: boolean | null };

// export type LoginQueryQueryVariables = Exact<{
//   email: Scalars['String']['input'];
//   password: Scalars['String']['input'];
// }>;


// export type LoginQueryQuery = { __typename?: 'Query', login?: number | null };

// export type GetAllQueryVariables = Exact<{ [key: string]: never; }>;


// export type GetAllQuery = { __typename?: 'Query', getAllProducts?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null };

// export type GetProductByIdQueryVariables = Exact<{
//   productId: Scalars['Int']['input'];
// }>;


// export type GetProductByIdQuery = { __typename?: 'Query', getProduct?: { __typename?: 'productResponseModel', id: number, title: string, description: string, price: number, rentPrice: string, rentType: string, categories?: Array<string> | null, createdAt: any } | null };

// export type GetAllbyUserIdQueryVariables = Exact<{
//   userId: Scalars['Int']['input'];
// }>;


// export type GetAllbyUserIdQuery = { __typename?: 'Query', getProductsByUserId?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null };

// export type DeleteProductQueryVariables = Exact<{
//   productId: Scalars['Int']['input'];
// }>;


// export type DeleteProductQuery = { __typename?: 'Query', deleteProduct?: boolean | null };

// export type GetAllByUserQueryVariables = Exact<{
//   userId: Scalars['Int']['input'];
// }>;


// export type GetAllByUserQuery = { __typename?: 'Query', getProductsByUserId?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null };

// export type GetUserProductsQueryVariables = Exact<{
//   userId: Scalars['Int']['input'];
// }>;


// export type GetUserProductsQuery = { __typename?: 'Query', getUserProducts?: { __typename?: 'userProductsResponse', bought?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null, sold?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null, borrowed?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null, lent?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null } | null };


// export const RegisterMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}]}}]} as unknown as DocumentNode<RegisterMutationMutation, RegisterMutationMutationVariables>;
// export const AddProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rentPrice"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rentType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"rentPrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rentPrice"}}},{"kind":"Argument","name":{"kind":"Name","value":"rentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rentType"}}},{"kind":"Argument","name":{"kind":"Name","value":"categoryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"createdBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdBy"}}}]}]}}]} as unknown as DocumentNode<AddProductMutation, AddProductMutationVariables>;
// export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rentPrice"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rentType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"rentPrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rentPrice"}}},{"kind":"Argument","name":{"kind":"Name","value":"rentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rentType"}}}]}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;
// export const RentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Rent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fromDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rentProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"fromDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fromDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"toDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toDate"}}}]}]}}]} as unknown as DocumentNode<RentMutation, RentMutationVariables>;
// export const BuyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Buy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buyProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}]}]}}]} as unknown as DocumentNode<BuyMutation, BuyMutationVariables>;
// export const LoginQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginQueryQuery, LoginQueryQueryVariables>;
// export const GetAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rentType"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetAllQuery, GetAllQueryVariables>;
// export const GetProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rentType"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetProductByIdQuery, GetProductByIdQueryVariables>;
// export const GetAllbyUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllbyUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rentType"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetAllbyUserIdQuery, GetAllbyUserIdQueryVariables>;
// export const DeleteProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeleteProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}]}]}}]} as unknown as DocumentNode<DeleteProductQuery, DeleteProductQueryVariables>;
// export const GetAllByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllByUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rentType"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetAllByUserQuery, GetAllByUserQueryVariables>;
// export const GetUserProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bought"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rentType"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sold"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rentType"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"borrowed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rentType"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rentType"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserProductsQuery, GetUserProductsQueryVariables>;
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

export type RegisterMutationMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  password: Scalars['String']['input'];
  address: Scalars['String']['input'];
}>;


export type RegisterMutationMutation = { __typename?: 'Mutation', register?: string | null };

export type AddProductMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  rentPrice: Scalars['Float']['input'];
  rentType?: InputMaybe<Scalars['String']['input']>;
  categoryIds: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  createdBy: Scalars['Int']['input'];
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: number };

export type UpdateProductMutationVariables = Exact<{
  productId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rentPrice: Scalars['Float']['input'];
  rentType?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct?: string | null };

export type RentMutationVariables = Exact<{
  productId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
  fromDate: Scalars['Date']['input'];
  toDate: Scalars['Date']['input'];
}>;


export type RentMutation = { __typename?: 'Mutation', rentProduct?: boolean | null };

export type BuyMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
}>;


export type BuyMutation = { __typename?: 'Mutation', buyProduct?: boolean | null };

export type LoginQueryQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQueryQuery = { __typename?: 'Query', login?: number | null };

export type GetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllQuery = { __typename?: 'Query', getAllProducts?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null };

export type GetProductByIdQueryVariables = Exact<{
  productId: Scalars['Int']['input'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', getProduct?: { __typename?: 'productResponseModel', id: number, title: string, description: string, price: number, rentPrice: string, rentType: string, categories?: Array<string> | null, createdAt: any } | null };

export type GetAllbyUserIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetAllbyUserIdQuery = { __typename?: 'Query', getProductsByUserId?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null };

export type DeleteProductQueryVariables = Exact<{
  productId: Scalars['Int']['input'];
}>;


export type DeleteProductQuery = { __typename?: 'Query', deleteProduct?: boolean | null };

export type GetAllByUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetAllByUserQuery = { __typename?: 'Query', getProductsByUserId?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null };

export type GetUserProductsQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetUserProductsQuery = { __typename?: 'Query', getUserProducts?: { __typename?: 'userProductsResponse', bought?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null, sold?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null, borrowed?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null, lent?: Array<{ __typename?: 'ProductListResponse', id: number, title: string, description: string, price: number, rentPrice: number, rentType?: string | null, categories: Array<string>, createdAt: any } | null> | null } | null };


export const RegisterMutationDocument = gql`
    mutation RegisterMutation($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $password: String!, $address: String!) {
  register(
    firstName: $firstName
    lastName: $lastName
    email: $email
    phone: $phone
    password: $password
    address: $address
  )
}
    `;
export type RegisterMutationMutationFn = Apollo.MutationFunction<RegisterMutationMutation, RegisterMutationMutationVariables>;

/**
 * __useRegisterMutationMutation__
 *
 * To run a mutation, you first call `useRegisterMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutationMutation, { data, loading, error }] = useRegisterMutationMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      phone: // value for 'phone'
 *      password: // value for 'password'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useRegisterMutationMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutationMutation, RegisterMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutationMutation, RegisterMutationMutationVariables>(RegisterMutationDocument, options);
      }
export type RegisterMutationMutationHookResult = ReturnType<typeof useRegisterMutationMutation>;
export type RegisterMutationMutationResult = Apollo.MutationResult<RegisterMutationMutation>;
export type RegisterMutationMutationOptions = Apollo.BaseMutationOptions<RegisterMutationMutation, RegisterMutationMutationVariables>;
export const AddProductDocument = gql`
    mutation AddProduct($title: String!, $description: String!, $price: Float!, $rentPrice: Float!, $rentType: String, $categoryIds: [Int!]!, $createdBy: Int!) {
  addProduct(
    title: $title
    description: $description
    price: $price
    rentPrice: $rentPrice
    rentType: $rentType
    categoryIds: $categoryIds
    createdBy: $createdBy
  )
}
    `;
export type AddProductMutationFn = Apollo.MutationFunction<AddProductMutation, AddProductMutationVariables>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      rentPrice: // value for 'rentPrice'
 *      rentType: // value for 'rentType'
 *      categoryIds: // value for 'categoryIds'
 *      createdBy: // value for 'createdBy'
 *   },
 * });
 */
export function useAddProductMutation(baseOptions?: Apollo.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, options);
      }
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($productId: Int!, $title: String, $description: String, $price: Float, $rentPrice: Float!, $rentType: String) {
  updateProduct(
    productId: $productId
    title: $title
    description: $description
    price: $price
    rentPrice: $rentPrice
    rentType: $rentType
  )
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      rentPrice: // value for 'rentPrice'
 *      rentType: // value for 'rentType'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const RentDocument = gql`
    mutation Rent($productId: Int!, $userId: Int!, $fromDate: Date!, $toDate: Date!) {
  rentProduct(
    productId: $productId
    userId: $userId
    fromDate: $fromDate
    toDate: $toDate
  )
}
    `;
export type RentMutationFn = Apollo.MutationFunction<RentMutation, RentMutationVariables>;

/**
 * __useRentMutation__
 *
 * To run a mutation, you first call `useRentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rentMutation, { data, loading, error }] = useRentMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      userId: // value for 'userId'
 *      fromDate: // value for 'fromDate'
 *      toDate: // value for 'toDate'
 *   },
 * });
 */
export function useRentMutation(baseOptions?: Apollo.MutationHookOptions<RentMutation, RentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RentMutation, RentMutationVariables>(RentDocument, options);
      }
export type RentMutationHookResult = ReturnType<typeof useRentMutation>;
export type RentMutationResult = Apollo.MutationResult<RentMutation>;
export type RentMutationOptions = Apollo.BaseMutationOptions<RentMutation, RentMutationVariables>;
export const BuyDocument = gql`
    mutation Buy($userId: Int!, $productId: Int!) {
  buyProduct(userId: $userId, productId: $productId)
}
    `;
export type BuyMutationFn = Apollo.MutationFunction<BuyMutation, BuyMutationVariables>;

/**
 * __useBuyMutation__
 *
 * To run a mutation, you first call `useBuyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBuyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [buyMutation, { data, loading, error }] = useBuyMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useBuyMutation(baseOptions?: Apollo.MutationHookOptions<BuyMutation, BuyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BuyMutation, BuyMutationVariables>(BuyDocument, options);
      }
export type BuyMutationHookResult = ReturnType<typeof useBuyMutation>;
export type BuyMutationResult = Apollo.MutationResult<BuyMutation>;
export type BuyMutationOptions = Apollo.BaseMutationOptions<BuyMutation, BuyMutationVariables>;
export const LoginQueryDocument = gql`
    query LoginQuery($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;

/**
 * __useLoginQueryQuery__
 *
 * To run a query within a React component, call `useLoginQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQueryQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQueryQuery(baseOptions: Apollo.QueryHookOptions<LoginQueryQuery, LoginQueryQueryVariables> & ({ variables: LoginQueryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQueryQuery, LoginQueryQueryVariables>(LoginQueryDocument, options);
      }
export function useLoginQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQueryQuery, LoginQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQueryQuery, LoginQueryQueryVariables>(LoginQueryDocument, options);
        }
export function useLoginQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LoginQueryQuery, LoginQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LoginQueryQuery, LoginQueryQueryVariables>(LoginQueryDocument, options);
        }
export type LoginQueryQueryHookResult = ReturnType<typeof useLoginQueryQuery>;
export type LoginQueryLazyQueryHookResult = ReturnType<typeof useLoginQueryLazyQuery>;
export type LoginQuerySuspenseQueryHookResult = ReturnType<typeof useLoginQuerySuspenseQuery>;
export type LoginQueryQueryResult = Apollo.QueryResult<LoginQueryQuery, LoginQueryQueryVariables>;
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
export const GetAllbyUserIdDocument = gql`
    query getAllbyUserId($userId: Int!) {
  getProductsByUserId(userId: $userId) {
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
 * __useGetAllbyUserIdQuery__
 *
 * To run a query within a React component, call `useGetAllbyUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllbyUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllbyUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetAllbyUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetAllbyUserIdQuery, GetAllbyUserIdQueryVariables> & ({ variables: GetAllbyUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllbyUserIdQuery, GetAllbyUserIdQueryVariables>(GetAllbyUserIdDocument, options);
      }
export function useGetAllbyUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllbyUserIdQuery, GetAllbyUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllbyUserIdQuery, GetAllbyUserIdQueryVariables>(GetAllbyUserIdDocument, options);
        }
export function useGetAllbyUserIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllbyUserIdQuery, GetAllbyUserIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllbyUserIdQuery, GetAllbyUserIdQueryVariables>(GetAllbyUserIdDocument, options);
        }
export type GetAllbyUserIdQueryHookResult = ReturnType<typeof useGetAllbyUserIdQuery>;
export type GetAllbyUserIdLazyQueryHookResult = ReturnType<typeof useGetAllbyUserIdLazyQuery>;
export type GetAllbyUserIdSuspenseQueryHookResult = ReturnType<typeof useGetAllbyUserIdSuspenseQuery>;
export type GetAllbyUserIdQueryResult = Apollo.QueryResult<GetAllbyUserIdQuery, GetAllbyUserIdQueryVariables>;
export const DeleteProductDocument = gql`
    query DeleteProduct($productId: Int!) {
  deleteProduct(productId: $productId)
}
    `;

/**
 * __useDeleteProductQuery__
 *
 * To run a query within a React component, call `useDeleteProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeleteProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useDeleteProductQuery(baseOptions: Apollo.QueryHookOptions<DeleteProductQuery, DeleteProductQueryVariables> & ({ variables: DeleteProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeleteProductQuery, DeleteProductQueryVariables>(DeleteProductDocument, options);
      }
export function useDeleteProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeleteProductQuery, DeleteProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeleteProductQuery, DeleteProductQueryVariables>(DeleteProductDocument, options);
        }
export function useDeleteProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DeleteProductQuery, DeleteProductQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DeleteProductQuery, DeleteProductQueryVariables>(DeleteProductDocument, options);
        }
export type DeleteProductQueryHookResult = ReturnType<typeof useDeleteProductQuery>;
export type DeleteProductLazyQueryHookResult = ReturnType<typeof useDeleteProductLazyQuery>;
export type DeleteProductSuspenseQueryHookResult = ReturnType<typeof useDeleteProductSuspenseQuery>;
export type DeleteProductQueryResult = Apollo.QueryResult<DeleteProductQuery, DeleteProductQueryVariables>;
export const GetAllByUserDocument = gql`
    query GetAllByUser($userId: Int!) {
  getProductsByUserId(userId: $userId) {
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
 * __useGetAllByUserQuery__
 *
 * To run a query within a React component, call `useGetAllByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetAllByUserQuery(baseOptions: Apollo.QueryHookOptions<GetAllByUserQuery, GetAllByUserQueryVariables> & ({ variables: GetAllByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllByUserQuery, GetAllByUserQueryVariables>(GetAllByUserDocument, options);
      }
export function useGetAllByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllByUserQuery, GetAllByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllByUserQuery, GetAllByUserQueryVariables>(GetAllByUserDocument, options);
        }
export function useGetAllByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllByUserQuery, GetAllByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllByUserQuery, GetAllByUserQueryVariables>(GetAllByUserDocument, options);
        }
export type GetAllByUserQueryHookResult = ReturnType<typeof useGetAllByUserQuery>;
export type GetAllByUserLazyQueryHookResult = ReturnType<typeof useGetAllByUserLazyQuery>;
export type GetAllByUserSuspenseQueryHookResult = ReturnType<typeof useGetAllByUserSuspenseQuery>;
export type GetAllByUserQueryResult = Apollo.QueryResult<GetAllByUserQuery, GetAllByUserQueryVariables>;
export const GetUserProductsDocument = gql`
    query GetUserProducts($userId: Int!) {
  getUserProducts(userId: $userId) {
    bought {
      id
      title
      description
      price
      rentPrice
      rentType
      categories
      createdAt
    }
    sold {
      id
      title
      description
      price
      rentPrice
      rentType
      categories
      createdAt
    }
    borrowed {
      id
      title
      description
      price
      rentPrice
      rentType
      categories
      createdAt
    }
    lent {
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
}
    `;

/**
 * __useGetUserProductsQuery__
 *
 * To run a query within a React component, call `useGetUserProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProductsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserProductsQuery(baseOptions: Apollo.QueryHookOptions<GetUserProductsQuery, GetUserProductsQueryVariables> & ({ variables: GetUserProductsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserProductsQuery, GetUserProductsQueryVariables>(GetUserProductsDocument, options);
      }
export function useGetUserProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProductsQuery, GetUserProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserProductsQuery, GetUserProductsQueryVariables>(GetUserProductsDocument, options);
        }
export function useGetUserProductsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserProductsQuery, GetUserProductsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserProductsQuery, GetUserProductsQueryVariables>(GetUserProductsDocument, options);
        }
export type GetUserProductsQueryHookResult = ReturnType<typeof useGetUserProductsQuery>;
export type GetUserProductsLazyQueryHookResult = ReturnType<typeof useGetUserProductsLazyQuery>;
export type GetUserProductsSuspenseQueryHookResult = ReturnType<typeof useGetUserProductsSuspenseQuery>;
export type GetUserProductsQueryResult = Apollo.QueryResult<GetUserProductsQuery, GetUserProductsQueryVariables>;