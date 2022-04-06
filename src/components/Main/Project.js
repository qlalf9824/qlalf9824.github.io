import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Camera from "../../images/camera.svg"
import Film from "../../images/film.png"

const Background = styled.div`
  width: 100%;
  background-color: #ffd8cc;
  padding: 30px 0 30px 0;
`
const Title = styled.p`
  font-size: 58px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
const TtileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`

const Content = styled.div`
  text-align: center;
  position: relative;
`

const ContentImage = styled.img`
  width: 700px;
  height: 430px;
`

const ContentTitle = styled.p`
  font-size: 28px;
  font-weight: 800;
`

const ContentPeriod = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
`

const ContentTextSpace = styled.div`
  position: absolute;
  top: 22%;
  left: 28%;
  width: 510px;
  text-align: left;
`
const ContentDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`

const ContentDetail = styled.p`
  font-size: 18px;
  font-weight: 400;
`

const ContentDetailImage = styled.img`
  width: 300px;
  height: 200px;
`

const Project = function () {

  const data = useStaticQuery(graphql`
    query ProjectQuery {
      allDataJson {
        nodes {
          project {
            content
            description
            period
            title
            image {
              publicURL
            }
          }
        }
      }
    }
  `)
  const projectList = data.allDataJson.nodes[0].project

  console.log(projectList)

  return (
    <Background>
      <Title>
        <TtileImage src={Camera} alt="타이틀 이미지" />
        Projects
      </Title>
      <Content>
        <ContentTitle>{projectList[0].title}</ContentTitle>
        <ContentPeriod>{projectList[0].period}</ContentPeriod>
        <ContentImage src={Film} alt="필름 이미지" />
        <ContentTextSpace>
          <ContentDescription>{projectList[0].description}</ContentDescription>
          {projectList[0].content.map((detail, key) => {
              console.log(detail)
              return (
                <ContentDetail key={key}>- {detail}</ContentDetail>
              )
            })
          }
          <ContentDetailImage  src={projectList[0].image.publicURL} alt="프로젝트 이미지" />
        </ContentTextSpace>
      </Content>
    </Background>
  )
}

export default Project
