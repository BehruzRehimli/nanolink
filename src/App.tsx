import "./global.css"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import { useState } from "react"
import Result from "./components/Result"
import NotFoundTab from "./components/NotFoundTab"
import Live from "./components/Live"


function App() {
  const [tab,setTab]=useState<number>(1)

  const renderTab=()=>{
    switch (tab) {
      case 1:
        return <Live/>
      case 4:
        return <Result/>
      default:
        return <NotFoundTab/>;
    }
  }

  return (
    <div className="App ">
      <div className="container-xxl m-auto">
        <Header/>
        <Tabs tab={tab} setTab={setTab}/>
        {
          renderTab()
        }
      </div>
    </div>
  )
}

export default App
