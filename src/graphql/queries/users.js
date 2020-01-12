import gql from "graphql-tag";

const allUsers = gql`
  {
    allUsers {
      email
      id
      lastname

      name
    }
  }
`;

export { allUsers };
