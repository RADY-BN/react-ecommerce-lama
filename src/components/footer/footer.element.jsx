import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column", textAlign: "center" })}
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Logo = styled.h1`
  font-weight: 300;
`;
export const Desc = styled.p`
  margin: 20px 0px;
`;
export const IconContainer = styled.div`
  display: flex;
  ${mobile({ justifyContent: "center" })}
`;
export const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  ${mobile({ justifyContent: "center" })}
`;
