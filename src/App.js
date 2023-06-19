import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Admin from './Admin/App'
import User from './User/App'

export default function App() {
  return (
      <Routes>
        <Route path="/Admin/*" element={<Admin/>}/>
        <Route path="/*" element={<User/>}/>
      </Routes>
  )
}
