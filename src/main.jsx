import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import FirebaseProvider from './Firebase/FirebaseProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NeedVolunteer from './Pages/NeedVolunteer';
import ProtectedRoute from './PrivateRoute/ProtectedRoute';
import AddVolunteer from './Pages/AddVolunteer';
import MyPost from './Pages/MyPost';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: ()=>fetch('http://localhost:8000/addvolunteerdata')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/needvolunteer',
        element:<ProtectedRoute><NeedVolunteer></NeedVolunteer></ProtectedRoute>
      },
      {
        path:'/addvolunteer',
        element:<ProtectedRoute><AddVolunteer></AddVolunteer></ProtectedRoute>
      },
      {
        path:'/mypost',
        element:<MyPost></MyPost>
      },
      {
        path:'/addvolunteerdata/:id',
        element:<ProtectedRoute><NeedVolunteer></NeedVolunteer></ProtectedRoute>,
        loader:({params})=>fetch(`http://localhost:8000/addvolunteerdata/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <FirebaseProvider><RouterProvider router={router}></RouterProvider></FirebaseProvider>
  </React.StrictMode>,
)
