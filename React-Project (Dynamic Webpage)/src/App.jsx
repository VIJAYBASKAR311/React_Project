import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Container from './Router/Container'
import Home from './Router/Home'
import Course from './Router/Course'
import Details from './Router/Details'
import Form from './Router/Form'
import './App.css'
import About from './Router/About'
import RegisDetails from './RegisDetails'
import EditCourse from './Router/EditCourse'
import DeleteDetails from './Router/DeleteDetails'
import Trainer from './Router/Trainer'



let router=createBrowserRouter([
  {
    path:'/',
    element:<Container></Container>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/subject',
        element:<About></About>
      },
      {
        path:'/course',
        element:<Course></Course>
      },
         
      {
        path:'/trainer',
        element:<Trainer></Trainer>,
      },

      {
        path:'/details',
        element:<Details></Details>
      },
      {
        path:'/form',
        element:<Form></Form>
      },
      {
        path:'/display',
        element:<RegisDetails></RegisDetails>,
      },
            {
        path:'/edit/:id',
        element:<EditCourse></EditCourse>,
      },
      
      {
        path:'/delete/:id',
        element:<DeleteDetails></DeleteDetails>,
      },
   
    ]
  }
]
)
const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
export default App