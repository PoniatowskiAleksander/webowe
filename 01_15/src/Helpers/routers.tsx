import React from 'react'
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import Blog from '../pages/Blog/index.tsx'
interface RouteElement {
    path: string
    element: React.JSX.Element
    title: string
    hideInMenu?: boolean
}

export const routes: Array<RouteElement> = [
    {
        path: "/",
        element: <Homepage/>,
        title: "Homepage"
    },
    {
        path: "/about",
        element: <About/>,
        title: "About us"
    },
    {
        path: "/blog",
        element: <Blog/>,
        title: "Title blog"
    }
]