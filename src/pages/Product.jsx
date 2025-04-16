import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Padding, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({Padding: "10px", flexDirection:"column"})}
`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit:cover ;
${mobile({height: "40vh"})}
`;

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding: "10px"})}
`;

const Title = styled.h1`
font-weight: 200;
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight: 100;
font-size:40px;
`; 

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width: "100%"})}
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=> props.color};
margin: 0px 5px;
cursor:pointer;
`;

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;


`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border:1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin:0px 5px;
`;

const Button = styled.button`
padding: 15px;
border:1px solid teal;
background-color: white;
cursor:pointer;
font-weight: 500;

&:hover{
  background-color: #f8f4f4;
}
`;



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
            <Image src="/pictures/jean.png"/>
            </ImgContainer>
            <InfoContainer>
              <Title>Wide Ultra High Jeans</Title>
              <Desc>5-pocket jeans in rigid denim that feels firm at first but then softens and loosens with wear. Wide leg with a regular fit from the waist to the hip and a wide cut from the thigh to the hem. Extra-high waist with a zip fly and button. Regular length, designed to hit the top of the foot with little or no stacking. The wide-leg jean is a wardrobe essential.</Desc>
              <Price>Rs. 1,699.15</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black"/>
                  <FilterColor color="darkblue"/>
                  <FilterColor color="gray"/>
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>

                <AmountContainer>
                  <Remove/>
                  <Amount>1</Amount>
                  <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
              </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>    
    </Container>
  )
}

export default Product
