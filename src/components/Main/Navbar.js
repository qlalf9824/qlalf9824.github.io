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
`
const Title = styled.p`
  width: 300px;
  font-size: 23px;
  font-weight: 500;
  color: #fff;
  line-height: 67px;
  margin-left: 20px;
`

const NavSpace = styled.div`
  height: 70px;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const NavItem = {
  fontSize: "20px",
  fontWeight: "400",
  color: "#fff",
  lineHeight: "67px",
}

const Navbar = function () {
  return (
    <Background>
      <Title>Gayoung's Portfolio</Title>
      <NavSpace>
        <Link to="#home" style={NavItem}>
          Home
        </Link>
        <Link to="#skill" style={NavItem}>
          Skills
        </Link>
        <Link to="#archiving" style={NavItem}>
          Archiving
        </Link>
        <Link to="#project" style={NavItem}>
          Projects
        </Link>
        <Link to="#career" style={NavItem}>
          Career
        </Link>
      </NavSpace>
    </Background>
  )
}

export default Navbar
