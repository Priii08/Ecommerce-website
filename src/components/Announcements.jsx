import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 40px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
margin: 20px 0px 0px 0px;
padding-top: 10px;
margin-top: 70px;
z-index: 1;
`

const Announcements = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over Rs.1999
    </Container>
  )
}

export default Announcements
