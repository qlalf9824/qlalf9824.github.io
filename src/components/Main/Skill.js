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
`

const CotnentText = styled("div")`
  position: absolute;
  top: ${props => props.key};
  left: 58px;
  font-weight: 500;
  font-family: "M PLUS Rounded 1c", sans-serif;
`

const Skill = function () {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson {
        nodes {
          data {
            index
            images {
              base
            }
          }
        }
      }
    }
  `)
  const skillList = data.allDataJson.nodes[0].data

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
            <Content>
              <ContentImg src={Filming} />
              <ContentLight src={Light} />
              <CotnentText key={653 + 229 * key}>{value.index}</CotnentText>
            </Content>
          )
        })}
      </ContentSpace>
    </Background>
  )
}

export default Skill
