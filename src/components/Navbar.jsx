import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { mobile } from "../responsive";
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Container = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:98%;
  height: 60px;
  background-color: #fff; 
  box-shadow: 0px 4px 2px -2px gray; 
  z-index: 100;  
  padding: 10px 20px;  
  ${mobile({ height: "auto" })}
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px", flexDirection: "column", gap: "10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "center", width: "100%" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  padding: 5px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "60px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  ${mobile({ width: "100%", textAlign: "center" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  ${mobile({ flexWrap: "wrap", justifyContent: "center", width: "100%" })}
`;

const Button = styled.button`
  padding: 6px 14px;
  font-size: 14px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: darkcyan;
  }

  ${mobile({ padding: "10px 12px", fontSize: "12px" })}
`;

const Navbar = ({ onNavigate }) => {
  const { cart } = useContext(CartContext);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: "gray", fontSize: 18 }} />
          </SearchContainer>
          <Button onClick={() => onNavigate("home")}>HOME</Button>
        </Left>
        <Center><h1>LAMA.</h1></Center>
        <Right>
          <Button onClick={() => onNavigate("register")}>REGISTER</Button>
          <Button onClick={() => onNavigate("login")}>LOGIN</Button>
          <Badge
          badgeContent={cart.length} 
          color="primary"
          onClick={() => onNavigate("cart")} 
          style={{ cursor: "pointer" }}
          >
            <ShoppingCartOutlined />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
