import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Signup from './components/Signup.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "",
            element:<Home/>
        },
        {
            path: "signup",
            element:<Signup/>
        },
        {
          path:"login",
          element: <Login/>

        }
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
