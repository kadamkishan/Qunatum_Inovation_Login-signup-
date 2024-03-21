import './App.css'
import Login from './components/Login'
import SignupPage from './components/SignupPage'
import Home from './components/Home'
import { useEffect, useState } from 'react'


import { BrowserRouter as Router,Routes,Route, json } from 'react-router-dom'


function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  useEffect(()=>{
    setIsLoggedIn(localStorage.getItem("MyUser"));
  },[])

  const updateUser=(user)=>{
    localStorage.setItem("MyUser",JSON.stringify(user))
    setIsLoggedIn(user);
  }

  return (
    <>
      <Router>
        <Routes>

        <Route path='/' element={isLoggedIn ?<Home/>: <Login updateUser={updateUser}/>}/>
        <Route path='/login' element={<Login updateUser={updateUser}/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/home' element={ isLoggedIn ?<Home/>: <Login updateUser={updateUser}/>}/>

        </Routes>
      </Router>
      
    </>
  )
}

export default App
