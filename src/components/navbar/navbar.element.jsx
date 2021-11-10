import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
export const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  margin-left: 25px;
  align-items: center;
  padding: 5px;
`;
export const Input = styled.input`
  border: none;
  ${mobile({ width: "80px" })}
  outline: none;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Logo = styled(Link)`
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  font-size: 36px;
  color: black;
  ${mobile({ fontSize: "24px" })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "2" })}
`;

export const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
