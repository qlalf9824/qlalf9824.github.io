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
  width: 250px;
  height: 400px;
  box-shadow: 3px 3px 2px grey;

  &:active {
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
  }

  @media (max-width: 540px) {
    width: 130px;
    height: 200px;
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

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 540px) {
    font-size: 28px;
  }
`
const TtileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 540px) {
    width: 35px;
    height: 35px;
  }
`

const Archiving = function () {
  return (
    <Background id="archiving">
      <Title>
        <TtileImage src={Camera} alt="타이틀 이미지" />
        Archiving
      </Title>
      <ArchivingSpace>
        <ArchivingImage
          src={Blog}
          alt="블로그"
          onClick={() => {
            window.open("https://securityoung.tistory.com/")
          }}
        ></ArchivingImage>
        <ArchivingImage
          src={Git}
          onClick={() => {
            window.open("https://github.com/qlalf9824")
          }}
          alt="블로그"
        ></ArchivingImage>
      </ArchivingSpace>
    </Background>
  )
}

export default Archiving
