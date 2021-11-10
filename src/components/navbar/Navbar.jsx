import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Center,
  Right,
  Input,
  Logo,
  MenuItem,
} from "./navbar.element.jsx";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />{" "}
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo to="/">RADY</Logo>
        </Center>
        <Right>
          <MenuItem to="/signup">Register</MenuItem>
          <MenuItem to="/login">Sign in</MenuItem>
          <MenuItem to="/cart">
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
