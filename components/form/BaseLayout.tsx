import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import TopNav from "./nav/TopNav";

const BaseLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <TopNav />
      <Container>{children}</Container>
    </>
  );
};

export default BaseLayout;
