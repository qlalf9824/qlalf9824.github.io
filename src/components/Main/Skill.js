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
`
const TtileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`

const ContentSpace = styled.div`
  text-align: center;
  margin: 30px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentImg = styled.img`
  width: 150px;
  height: 130px;
`

const ContentLight = styled.img`
  width: 800px;
  height: 180px;
  margin-left: 10px;
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
`

const ContentImagesSpace = styled.div`
  width: 100px;
  height: 180px;
  position: absolute;
  left: 18%;
  display: flex;
  align-items: center;
`

const ContentIamge = styled.img`
  width: 200px;
  height: 50px;
  margin-right: 10px;
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
    <Background>
      <Title>
        <TtileImage src={Camera} alt="타이틀 이미지" />
        Skills
      </Title>
      <ContentSpace>
        {skillList.map((value, key) => {
          console.log(value)
          return (
            <Content key={key}>
              <ContentImg src={Filming} />
              <ContentLight src={Light} />
              <CotnentText>{value.index}</CotnentText>
              <ContentImagesSpace>
                {value.images.map((imgValue, key) => {
                    console.log(imgValue.publicURL)
                    return (
                      <ContentIamge src={imgValue.publicURL} key={key} />
                    )
                  })
                }
              </ContentImagesSpace>
            </Content>
          )
        })}
      </ContentSpace>
    </Background>
  )
}

export default Skill
