import gql from "graphql-tag";

const updateProfilePicture = gql`
  mutation updateProfilePicture($id: ID!, $image: String!) {
    updateUser(id: $id, image: $image) {
      name
      image
    }
  }
`;

export { updateProfilePicture };
