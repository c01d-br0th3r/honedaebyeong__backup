import React from "react";
import { Placeholder } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
`;

const Main = () => {
  return (
    <Container>
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line length="medium" />
        </Placeholder.Header>
        <Placeholder.Image />
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </Container>
  );
};

export default Main;
