import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <TextField label="Email Address"/>
      <TextField label="Password" type="password"/>
      <Link to='/'>HOME</Link>
    </div>
    )
}