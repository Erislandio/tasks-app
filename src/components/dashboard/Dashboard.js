import React from "react";
import { Container } from "../styles/styles";
import { MdDashboard } from "react-icons/md";

export const Dashboard = React.memo(({ user }) => {
  console.log(user);

  return (
    <div>
      <header>
        <div>
          <span>
            <MdDashboard />
          </span>
          Dash
        </div>
      </header>
      <Container></Container>
    </div>
  );
});
