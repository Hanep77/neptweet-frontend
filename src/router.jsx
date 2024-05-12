import AuthLayout from './Layouts/AuthLayout.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import DefaultLayout from './Layouts/DefaultLayout.jsx'
import Home from './Pages/Home.jsx'
import Profile from './Pages/Profile.jsx'
import Post from './Pages/Post.jsx'
import CreatePost from './Pages/CreatePost.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/post",
                element: <Post />
            },
            {
                path: "/posts/create",
                element: <CreatePost />
            }
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])


export default router