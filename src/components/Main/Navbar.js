import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Background = styled.div`
  width: 100%;
  background-color: #000;
  height: 70px;
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 50px;
  }
`
const Title = styled.p`
  font-size: 23px;
  font-weight: 500;
  color: #fff;
  line-height: 67px;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 47px;
  }

  @media (max-width: 540px) {
    font-size: 12px;
    font-weight: 500;
  }
`

const NavSpace = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const NavItem = styled(({ active, ...props }) => <Link {...props} />)`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  line-height: 67px;
  margin-right: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-right: 10px;
    line-height: 47px;
  }

  @media (max-width: 540px) {
    font-size: 12px;
    margin-right: 5px;
  }

  @media (max-width: 360px) {
    display: none;
  }
`

const Navbar = function () {
  return (
    <Background>
      <Title>Gayoung's Portfolio</Title>
      <NavSpace>
        <NavItem to="#home">Home</NavItem>
        <NavItem to="#skill">Skills</NavItem>
        <NavItem to="#archiving">Archiving</NavItem>
        <NavItem to="#project">Projects</NavItem>
        <NavItem to="#career">Career</NavItem>
      </NavSpace>
    </Background>
  )
}

export default Navbar
