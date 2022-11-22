import logo from './logo.svg';
import './App.css';
import Front_page from './pages/front-page/front-page'
import About from './pages/about'
import SystemProjects from './pages/system_projects/system_projects'
import Contact from './pages/contact_me'
import Login from './pages/login'
import Tabs from './assets/tabsLogo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
    
  const [currentDisplay,setCurrentDisplay] = useState(<Front_page/>)
  const [sideBarStyle,setSideBarStyle] = useState(null)
  const [tabStyle,setTabStyle] = useState(null)

  const openTabs = () => {

     setSideBarStyle({
        width: '25vw'
        
     })
     setTabStyle({
      display: 'block'
     })
  }
  
  const closeTabs = () => {
    console.log("hello")
    setSideBarStyle({
      width: 0
    })
    setTabStyle({display: 'none'})
  }
  
  const changeTabs = (e) => {
    const pageTarget = e.target.textContent
    if (pageTarget === "Login"){
      setCurrentDisplay(<Login/>)
    }
    if(pageTarget === "Front Page"){
      setCurrentDisplay(<Front_page/>)
    }
    if(pageTarget === "System Projects"){
      setCurrentDisplay(<SystemProjects/>)
    }
  }



  return (
    <div className="App d-flex">
      <div className='d-flex flex-column text-white bg-dark position-absolute h-100 end-0' style={sideBarStyle} id="tabs">
        <div className="tabs m-4" style={tabStyle} onClick={closeTabs}>CLOSE IT</div>
        <p className="tabs m-4" style={tabStyle} onClick={changeTabs}>Front Page</p>
        <p className="tabs m-4" style={tabStyle} onClick={changeTabs}>System Projects</p>
        <p className="tabs m-4" style={tabStyle} onClick={changeTabs}>About</p>
        <p className="tabs m-4" style={tabStyle} onClick={changeTabs}>Contact Me</p>
        <p className="tabs m-4" style={tabStyle} onClick={changeTabs}>Login</p>
      </div>
      <div className='p-5 position-absolute end-0 d-flex align-items-center justify-content-end' style={{ height: '13vh'}} id="header">
        <p onClick={openTabs}>
          <img src={Tabs} />
        </p>
      </div>
      <div className='d-flex justify-content-center align-items-center' style={{height: '100vh', width: '100vw'}} id='body'>
        {currentDisplay}
      </div>
      <div className='' id='footer'>
        
      </div>
    </div>
  );
}

export default App;
