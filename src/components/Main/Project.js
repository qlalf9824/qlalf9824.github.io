import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Camera from "../../images/camera.svg"
import Film from "../../images/film.png"
import Octocat from "../../images/Octocat.png"
const Background = styled.div`
  width: 100%;
  background-color: #ffd8cc;
  padding: 30px 0 100px 0;
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
  height: 420px;
`

const ContentImage = styled.img`
  width: 700px;
  height: 430px;
`

const ContentTitle = styled.p`
  font-size: 28px;
  font-weight: 800;
  color: #ff7800;
`

const ContentPeriod = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #f7f7f7;
`

const ContentTextSpace = styled.div`
  position: absolute;
  top: 8%;
  width: 100%;
  text-align: center;
`
const ContentDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: left;
`

const ContentDetail = styled.p`
  font-size: 18px;
  font-weight: 400;
  width: 500px;
  margin: 0 auto;
  text-align: left;
`

const ContentListSpace = styled.ul`
  width: 500px;
  margin: 0 auto;
  text-align: left;
  padding-left: 15px;
  height: 88px;
  margin-top: 15px;
`

const ContentListItem = styled.li`
  font-size: 18px;
  font-weight: 400;
`

const ContentGithub = styled.button`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #fc4f4f;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 7px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 1px grey;

  &:active {
    background-color: #fc6c4f;
    box-shadow: none;
  }
`

const ContentGithubImage = styled.img`
  width: 35px;
  height: 35px;
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
            github
            skill
          }
        }
      }
    }
  `)
  const projectList = data.allDataJson.nodes[0].project

  return (
    <Background id="project">
      <Title>
        <TtileImage src={Camera} alt="타이틀 이미지" />
        Projects
      </Title>

      {projectList.map((value, key) => {
        return (
          <Content key={key}>
            <ContentImage src={Film} alt="필름 이미지" />
            <ContentTextSpace>
              <ContentTitle>{value.title}</ContentTitle>
              <ContentPeriod>{value.period}</ContentPeriod>
              <ContentDescription>{value.description}</ContentDescription>
              <ContentDetail>Skill: {value.skill}</ContentDetail>
              <ContentListSpace>
                {value.content.map((detail, key) => {
                  console.log(detail)
                  return <ContentListItem key={key}>{detail}</ContentListItem>
                })}
              </ContentListSpace>
              {value.github !== "" && (
                <ContentGithub
                  onClick={() => {
                    window.open(value.github)
                  }}
                >
                  <ContentGithubImage src={Octocat} alt="Octocat" />
                  GITHUB
                </ContentGithub>
              )}
            </ContentTextSpace>
          </Content>
        )
      })}
    </Background>
  )
}

export default Project
