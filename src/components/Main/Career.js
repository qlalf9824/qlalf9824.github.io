import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import Camera from "../../images/camera.svg"

const Background = styled.div`
  width: 100%;
  background-color: #ffeedb;
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
  margin-top: 30px;
`

const ContentTitle = styled.p`
  font-size: 43px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #ff6363;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  margin-bottom: 100px;
`
const ContentSubheading = styled.div`
  padding-right: 10px;
  width: 300px;
  font-size: 28px;
  font-weight: 500;
  text-align: right;
`

const ContentTextSpace = styled.div`
  border-left: 2px solid #000;
  padding-left: 15px;
  width: 700px;
`

const ContentDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
`
const ContentPosition = styled.p`
  padding-left: 80px;
  font-size: 20px;
  font-weight: 400;
`
const ContentPeriod = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #9d9d9d;
`
const ContentListSpace = styled.ul`
  text-align: left;
  padding-left: 15px;
  margin-top: 15px;
`

const ContentListItem = styled.li`
  font-size: 18px;
  font-weight: 400;
`

const Career = function () {
  const data = useStaticQuery(graphql`
    query CareerQuery {
      allDataJson {
        nodes {
          career {
            content
            description
            period
            title
            position
          }
        }
      }
    }
  `)
  const careerList = data.allDataJson.nodes[0].career
  console.log(careerList)

  return (
    <Background id="career">
      <Title>
        <TtileImage src={Camera} alt="타이틀 이미지" />
        Career
      </Title>
      <ContentSpace>
        <ContentTitle>Viewmagine</ContentTitle>
        {careerList.map((value, key) => {
          return (
            <Content key={key}>
              <ContentSubheading>
                {value.title}
                <ContentPosition>{value.position}</ContentPosition>
                <ContentPeriod>{value.period}</ContentPeriod>
              </ContentSubheading>
              <ContentTextSpace>
                <ContentDescription>{value.description}</ContentDescription>
                <ContentListSpace>
                  {value.content.map((contentValue, key) => {
                    return (
                      <ContentListItem key={key}>
                        {contentValue}
                      </ContentListItem>
                    )
                  })}
                </ContentListSpace>
              </ContentTextSpace>
            </Content>
          )
        })}
      </ContentSpace>
    </Background>
  )
}

export default Career
