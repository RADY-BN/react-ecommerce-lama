import { Send } from "@material-ui/icons";
import React from "react";
import {
  Container,
  Title,
  Description,
  InputContainer,
  Button,
  Input,
} from "./newsletter.element";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your Email'/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
