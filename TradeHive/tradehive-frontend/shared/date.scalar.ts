import { GraphQLScalarType, Kind } from "graphql";

export const DateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Custom Date scalar type",
  serialize(value: any) {
    // Convert outgoing Date to ISO string
    if (value instanceof Date) {
      return value.toISOString(); 
    }
    throw new Error("DateScalar can only serialize Date objects");
  },
  parseValue(value: any) {
    // Convert incoming ISO string to Date
    const parsedDate = new Date(value);
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date format");
    }
    return parsedDate; 
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      // Parse ISO string from the query
      const parsedDate = new Date(ast.value);
      if (isNaN(parsedDate.getTime())) {
        throw new Error("Invalid date format");
      }
      return parsedDate; 
    }
    throw new Error("DateScalar can only parse string literals");
  },
});
