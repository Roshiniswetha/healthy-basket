import React from 'react'
import { Footer } from '.'
import { Drawer } from '.'
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
        <Drawer />
        <Outlet />
    </div>
  )
}

export default Dashboard