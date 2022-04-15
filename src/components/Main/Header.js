import * as React from "react"
import styled from "@emotion/styled"
import Me from "../../images/me.png"

const Background = styled.div`
  width: 100%;
  background-color: #0a1d37;
  text-align: left;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;

  @media (max-width: 540px) {
    font-size: 35px;
    justify-content: flex-start;
  }
}
`

const TextSpace = styled.div`
  margin-left: 30px;
`

const Title = styled.p`
  font-size: 50px;
  font-weight: 800;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 540px) {
    font-size: 35px;
  }
`

const Hello = styled.p`
  font-size: 46px;
  font-weight: 800;
  color: #fff;
  margin-top: 200px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 540px) {
    font-size: 33px;
  }
`

const Description = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 540px) {
    font-size: 10px;
  }
`

const MainImage = styled.img`
  width: 320px;
  height: 430px;
  margin: 10px;

  @media (max-width: 768px) {
    width: 250px;
    height: 370px;
  }

  @media (max-width: 540px) {
    display: none;
  }
`

const Header = () => {
  return (
    <Background id="home">
      <TextSpace>
        <Hello>Hello!</Hello>
        <Title>I'm Gayoung Ha</Title>
        <Description>
          행복한 개발자를 꿈꾸는 Front-End Developer 입니다.
        </Description>
      </TextSpace>
      <MainImage src={Me} />
    </Background>
  )
}

export default Header
