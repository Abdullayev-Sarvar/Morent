import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('../routes/home/Home'))

const RouteController = () => {
  return useRoutes([
    {
      path: '/',
      element: <Suspense fallback={<div className='loading'><div className="loader"></div></div>}><Home /></Suspense>,
    }
  ])
}

export default RouteController