import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import CreatePoint from './pages/CreatePoint'
import PointCreated from './pages/PointCreated'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={PointCreated} path="/point-created" />
      
    </BrowserRouter>
  )
}

export default Routes