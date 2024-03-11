import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

interface RouteElement {
    path: string
    element: React.JSX.Element
    title: string
}

export const routes: RouteElement[] = [
    {
        path: '/',
        element: <Home />,
        title: 'Home'
    },
    {
        path: '/about',
        element: <About />,
        title: 'About'
    },
    {
        path: '/contact',
        element: <Contact />,
        title: 'Contact'
    }
]