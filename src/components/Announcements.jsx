import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
margin: 20px 0px 0px 0px;
`

const Announcements = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over Rs.1999
    </Container>
  )
}

export default Announcements
