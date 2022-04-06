import Archiving from "components/Main/Archiving"
import Career from "components/Main/Career"
import Project from "components/Main/Project"
import Skill from "components/Main/Skill"
import * as React from "react"
import GlobalStyle from "components/Common/GlobalStyle"
import Header from "components/Main/Header"

const IndexPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Skill />
      <Archiving />
      <Project />
      <Career />
    </div>
  )
}

export default IndexPage
