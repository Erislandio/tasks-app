import gql from "graphql-tag";

const signinUser = gql`
  mutation signinUser($email: String!, $password: String!){
	signinUser(email: {email: $email, password: $password }){
			token
    	user{
        email
        id
        lastname
        name
			projects {
                id
                name
                tasks {
                    completed
                    name
                    description
                    description
                  }
                  description
				        }
      }
  }
}
`;

export { signinUser };
