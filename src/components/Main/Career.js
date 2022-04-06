import React from "react"
import styled from "@emotion/styled"
import Camera from "../../images/camera.svg"

const Background = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ffeedb;
  padding: 30px 0 30px 0;
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

const Career = function () {
  return (
    <Background>
      <Title>
        <TtileImage src={Camera} alt="타이틀 이미지" />
        Career
      </Title>
    </Background>
  )
}

export default Career
