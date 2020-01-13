import React from "react";
import { Container } from "../styles/styles";
import { Header } from "../header/Header";

export const UserContext = React.createContext();

export const Dashboard = React.memo(({ user }) => {
  console.log(user);

  return (
    <UserContext.Provider value={user}>
      <Header user={user.user} />
      <Container></Container>
    </UserContext.Provider>
  );
});
