import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Admin from './Admin/App'
import User from './User/App'
import Guest from './Guest/App'
import Blog from './Blog/App'
import Landlord from './Landlord/App'
import Community from './Community/App';

export default function App() {
  return (
      <Routes>
        <Route path="/Admin/*" element={<Admin/>}/>
        <Route path="/User/*" element={<User/>}/>
        <Route path="/Landlord/*" element={<Landlord/>}/>
        <Route path="/Community/*" element={<Community/>}/>
        <Route path="/Blog/*" element={<Blog/>}/>
        <Route path="/*" element={<Guest/>}/>
      </Routes>
  )
}
