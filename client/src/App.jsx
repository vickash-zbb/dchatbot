import './App.css'
import Chatbot from './Components/Chatbot/Chatbot'
import Login from './Components/Login/Login'
import Questions from './Components/Questions/Questions'
import Register from './Components/Register/Register'

// /import React Dom
import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'


//  lets create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/chatbot',
    element: <div><Chatbot/></div>
  },
  {
    path: '/questions',
    element: <div><Questions/></div>
  }
])
function App() {
 

  return (
    <>
     <RouterProvider router={router}/>
    </>


  )
}

export default App
