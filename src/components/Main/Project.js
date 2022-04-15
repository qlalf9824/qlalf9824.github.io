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

const Content = styled.div`
  text-align: center;
  position: relative;
  height: 420px;

  @media (max-width: 768px) {
    height: 320px;
  }

  @media (max-width: 540px) {
    height: 220px;
  }
`

const ContentImage = styled.img`
  width: 700px;
  height: 430px;

  @media (max-width: 768px) {
    width: 500px;
    height: 330px;
  }

  @media (max-width: 540px) {
    width: 350px;
    height: 230px;
  }

  @media (max-width: 370px) {
    display: none;
  }
`

const ContentTitle = styled.p`
  font-size: 28px;
  font-weight: 800;
  color: #ff7800;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 540px) {
    font-size: 13px;
  }
`

const ContentPeriod = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #f7f7f7;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 540px) {
    font-size: 8px;
    margin-bottom: 7px;
  }
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

  @media (max-width: 768px) {
    width: 370px;
    font-size: 15px;
  }

  @media (max-width: 540px) {
    width: 260px;
    font-size: 10px;
    margin-bottom: 5px;
  }
`

const ContentDetail = styled.p`
  font-size: 18px;
  font-weight: 400;
  width: 500px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 768px) {
    width: 370px;
    font-size: 13px;
  }

  @media (max-width: 540px) {
    width: 260px;
    font-size: 9px;
  }
`

const ContentListSpace = styled.ul`
  width: 500px;
  margin: 0 auto;
  text-align: left;
  padding-left: 15px;
  height: 88px;
  margin-top: 15px;

  @media (max-width: 768px) {
    width: 370px;
  }

  @media (max-width: 540px) {
    margin-top: 8px;
    height: 65px;
    width: 265px;
  }
`

const ContentListItem = styled.li`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 540px) {
    font-size: 8px;
  }
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

  @media (max-width: 768px) {
    width: 120px;
    height: 30px;
    font-size: 13px;
    margin-top: 0px;
  }

  @media (max-width: 540px) {
    width: 100px;
    height: 25px;
    font-size: 11px;
    margin-top: 0px;
  }
`

const ContentGithubImage = styled.img`
  width: 35px;
  height: 35px;

  @media (max-width: 768px) {
    width: 23px;
    height: 23px;
  }

  @media (max-width: 540px) {
    width: 18px;
    height: 18px;
  }
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
