import "./global.css"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import { useState } from "react"


function App() {
  const [tab,setTab]=useState<number>(1)


  return (
    <div className="App ">
      <div className="container-xxl m-auto">
        <Header/>
        <Tabs tab={tab} setTab={setTab}/>
      </div>
    </div>
  )
}

export default App
