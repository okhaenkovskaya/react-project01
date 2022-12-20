import styled from "styled-components";

import DashboardPlaceholderPie from "../../components/DashboardPlaceholderPie";
import DashboardPlaceholderLine from "../../components/DashboardPlaceholderLine";

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #C1C6DB;
    margin: 0 0 10px;
`;


const Dashboard = () => {
  return (
    <>
      <Title>Dashboard</Title>

      <DashboardPlaceholderPie />

      <DashboardPlaceholderLine />
    </>
  );
};

export default Dashboard;
