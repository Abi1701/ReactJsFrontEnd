import React from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../components/layout/layout'
import LayoutOther from '../components/layout/layoutOther'
import Auth from '../pages/auth/auth'
import Game from '../pages/game/game'
import Index from '../pages/home/index'
import Notfound from '../pages/notFound/Notfound'
import Work from '../pages/page2/page2'
import Room from '../pages/room/room'
import Feature from '../pages/page3/feature'
import Requirement from '../pages/page4/requirement'
import Score from '../pages/page5/topscore'
import Subscribe from '../pages/page6/subscribe'
import Search from '../pages/search/search'


const Router = (loggedIn) => {
  return [
    {
      path: 'apps',
      element: loggedIn ? <Layout /> : <Navigate to='/auth/login' />,
      children: [
        { path: 'room', element: <Room /> },
        { path: 'game/:id', element: <Game /> },
        { path: 'search', element: <Search /> },
        { path: 'work', element: <Work /> },
        { path: 'feature', element: <Feature /> },
        { path: 'requirement', element: <Requirement /> },
        { path: 'score', element: <Score /> },
        { path: 'subscribe', element: <Subscribe /> },
        
      ],
    },
    {
      path: '/auth',
      element: !loggedIn ? <LayoutOther /> : <Navigate to='/' />,
      children: [
        { path: 'login', element: <Auth /> },
        { path: 'work', element: <Work /> },
        { path: 'feature', element: <Feature /> },
        { path: 'requirement', element: <Requirement /> },
        { path: 'score', element: <Score /> },
        { path: 'subscribe', element: <Subscribe /> },
      ],
    },
    {
      path: '/',
      element: <Index />,
    },
    { path: '404', element: <Notfound /> },
    { path: '*', element: <Navigate to='/404' /> },
  ]
}
export default Router
