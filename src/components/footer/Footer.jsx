import {
  Container,
  Left,
  Center,
  Right,
  IconContainer,
  Desc,
  Logo,
  SocialIcon,
  ListItem,
  List,
  Title,
  ContactItem,
} from "./footer.element";
import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RADY</Logo>
        <Desc>
          Thanks to Lama for his video of Creating websites.
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          corporis nulla dolore dignissimos aliquam magnam iusto qui ipsa,
          molestiae, excepturi unde inventore blanditiis culpa totam sapiente
          iste. Corrupti, alias asperiores.
        </Desc>
        <IconContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </IconContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man fashion</ListItem>
          <ListItem>Woman fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Karaj , Alborz
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +98 0912 3456 789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@rady.dev
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
