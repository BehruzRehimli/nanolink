import "./global.css"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import { useState } from "react"
import Live from "./components/Result"


function App() {
  const [tab,setTab]=useState<number>(1)

  const renderTab=()=>{
    switch (tab) {
      case 1:
        return <Live/>
      
      default:
        break;
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
