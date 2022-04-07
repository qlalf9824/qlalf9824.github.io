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
}
`

const TextSpace = styled.div`
  width: 500px;
`

const Title = styled.p`
  font-size: 63px;
  font-weight: 800;
  color: #fff;
`

const Hello = styled.p`
  font-size: 55px;
  font-weight: 800;
  color: #fff;
  margin-top: 200px;
`

const Description = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`

const MainImage = styled.img`
  width: 350px;
  height: 450px;
  margin: 10px;
`

const Header = () => {
  const text1 = "Hello!"
  const text2 = "I'm Gayoung Ha"
  // const [hello, setHello] = React.useState("")
  // const [introduce, setIntroduce] = React.useState("")
  // const [description, setDescription] = React.useState("")

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setHello(hello => hello + text1[hello.length])
  //   }, 200)

  //   if (hello.length === text1.length) {
  //     clearInterval(interval)
  //     const interval1 = setInterval(() => {
  //       setIntroduce(introduce => introduce + text2[introduce.length])
  //     }, 200)

  //     if (introduce.length === text2.length) {
  //       clearInterval(interval1)
  //       setDescription("행복한 개발자를 꿈꾸는 Front-End Developer 입니다.")
  //     }

  //     return () => clearInterval(interval1)
  //   }

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [hello, introduce])

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
