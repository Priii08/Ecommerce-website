
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import {mobile} from "../responsive";

const Container = styled.div`
height: 60px;
${mobile({height:"auto"})}

`;

const Wrapper = styled.div`
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({padding: "10px",flexDirection:"column",gap:"10px"})}
`;

const Left = styled.div`
flex:1;
display: flex;
align-items:center;
${mobile({justifyContent:"center",width:"100%"})}
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
padding: 5px;
${mobile({display: "none"})}
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
${mobile({width: "60px"})}
`
// const Logo = styled.h1`
// font-weight: bold;
// ${mobile({fontSize: "24px"})}
// `

const Center = styled.div`
flex:1;
text-align: center;
font-size: 20px;
font-weight: bold;
${mobile({width:"100%",textAlign:"center"})}
`;

const Right = styled.div`
flex:1;
display: flex;
align-items: center; 
justify-content: flex-end;
gap: 15px;
${mobile({flexWrap: "wrap",justifyContent:"center",width:"100%"})}

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

  &:hover{
    background-color: darkcyan;
  }

  ${mobile({padding: "10px 12px",fontSize:"12px"})}
`;

// const MenuItem = styled.div`
// font-size:14px;
// cursor: pointer;
// margin-left: 25px;
// ${mobile({fontSize: "12px" , marginLeft:"10px"})}
// `;

// const Navbar = () => {
//   return (
//     <Container>
//         <Wrapper>
//             <Left>
//                 <Language>EN</Language>
//                 <SearchContainer>
//                     <Input placeholder="Search"/>
//                     <Search style={{color:"gray", fontSize:16}}/>
//                 </SearchContainer>
//             </Left>
//             <Center><Logo>LAMA. </Logo>
//             </Center>
//             <Right>

//               <MenuItem>REGISTER</MenuItem>
//               <MenuItem>SIGN IN</MenuItem>
//               <MenuItem>
//               <Badge badgeContent={4} color="primary">
//                 <ShoppingCartOutlined />
//               </Badge>
//               </MenuItem>
//             </Right>
            
//         </Wrapper>
//     </Container>
//   )
// }

// export default Navbar

const Navbar = ({ onNavigate }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{color:"gray",fontSize:18}}/>
          </SearchContainer>
          <Button onClick={() => onNavigate("home")}>HOME</Button>
        </Left>
        <Center><h1>LAMA.</h1></Center>
        <Right>
          <Button onClick={() => onNavigate("register")}>REGISTER</Button>
          <Button onClick={() => onNavigate("login")}>LOGIN</Button>
          <Badge badgeContent={3} color="primary" onClick={() => onNavigate("cart")} style={{ cursor: "pointer" }}>
            <ShoppingCartOutlined />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
