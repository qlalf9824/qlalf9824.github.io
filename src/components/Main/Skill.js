import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Camera from "../../images/camera.svg"
import Filming from "../../images/filming.png"
import Light from "../../images/light.png"

const Background = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 30px 0 30px 0;
`
const Title = styled.p`
  font-size: 58px;
  font-weight: 800;
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

const ContentSpace = styled.div`
  text-align: center;
  margin: 30px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 540px) {
    margin: 20px 0 10px 0;
  }
`

const ContentImg = styled.img`
  width: 150px;
  height: 130px;

  @media (max-width: 900px) {
    width: 130px;
    height: 110px;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 60px;
  }

  @media (max-width: 540px) {
    width: 50px;
    height: 40px;
  }
`

const ContentLight = styled.img`
  width: 700px;
  height: 180px;
  margin-left: 10px;

  @media (max-width: 900px) {
    width: 600px;
    height: 150px;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 80px;
  }

  @media (max-width: 540px) {
    width: 250px;
    height: 55px;
  }
`

const Content = styled.div`
  margin-bottom: 50px;
  display: flex;
  position: relative;
`

const CotnentText = styled.div`
  width: 100px;
  height: 180px;
  text-align: center;
  position: absolute;
  left: 1.3%;
  font-weight: 600;
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    height: 150px;
    left: 0.7%;
    font-size: 17px;
  }

  @media (max-width: 768px) {
    width: 72px;
    height: 80px;
    left: -0.5%;
    font-size: 8px;
    font-weight: 500;
  }

  @media (max-width: 540px) {
    display: none;
  }
`

const ContentImagesSpace = styled.div`
  width: 100px;
  height: 180px;
  position: absolute;
  left: 20%;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    height: 150px;
  }

  @media (max-width: 768px) {
    height: 80px;
  }

  @media (max-width: 540px) {
    height: 54px;
  }
`

const ContentIamge = styled.img`
  width: 100px;
  height: 40px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 55px;
    height: 25px;
  }

  @media (max-width: 540px) {
    width: 40px;
    height: 20px;
    margin-right: 5px;
  }
`

const Skill = function () {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson {
        nodes {
          skill {
            index
            images {
              publicURL
            }
          }
        }
      }
    }
  `)
  const skillList = data.allDataJson.nodes[0].skill

  return (
    <Background id="skill">
      <Title>
        <TtileImage src={Camera} alt="타이틀 이미지" />
        Skills
      </Title>
      <ContentSpace>
        {skillList.map((value, key) => {
          return (
            <Content key={key}>
              <ContentImg src={Filming} />
              <ContentLight src={Light} />
              <CotnentText>{value.index}</CotnentText>
              <ContentImagesSpace>
                {value.images.map((imgValue, key) => {
                  return <ContentIamge src={imgValue.publicURL} key={key} />
                })}
              </ContentImagesSpace>
            </Content>
          )
        })}
      </ContentSpace>
    </Background>
  )
}

export default Skill
