import React from "react"
import styled from "@emotion/styled"
import Blog from "../../images/blog.png"
import Git from "../../images/github.png"
import Camera from "../../images/camera.svg"

const Background = styled.div`
  width: 100%;
  background-color: #ffbd9b;
  text-align: center;
  padding: 30px 0 30px 0;
`
const ArchivingImage = styled.img`
  width: 350px;
  height: 500px;
  box-shadow: 7px 3px 7px darkgrey;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 540px) {
    width: 150px;
    height: 250px;
    margin-bottom: 20px;
  }
`
const ArchivingSpace = styled.div`
  text-align: center;
  padding: 40px 0 30px 0;
  display: flex;
  justify-content: space-evenly;
`

const Title = styled.p`
  font-size: 58px;
  font-weight: 800;
  font-family: "M PLUS Rounded 1c", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TtileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`

const Archiving = function () {
  return (
    <Background>
      <Title>
        <TtileImage src={Camera} alt="타이틀 이미지" />
        Archiving
      </Title>
      <ArchivingSpace>
        <ArchivingImage src={Blog} alt="블로그"></ArchivingImage>
        <ArchivingImage src={Git} alt="블로그"></ArchivingImage>
      </ArchivingSpace>
    </Background>
  )
}

export default Archiving
