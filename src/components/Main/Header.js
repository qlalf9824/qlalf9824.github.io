import * as React from "react"
import styled from "@emotion/styled"
// import Me from "../../images/me.jpg"

const Background = styled.div`
  width: 100%;
  background-color: #0a1d37;
  height: 200px;
`

// const MainImage = styled.img`
//   width: 200px;
//   height: 300px;
//   margin: 10px;
// `

const Header = () => {
  return <Background>{/* <MainImage src={Me} /> */}</Background>
}

export default Header
