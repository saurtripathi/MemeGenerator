import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Meme from './Meme'
// import {getMemesData} from './Data.js'


async function getMemesData() {
  const response = await fetch('https://api.imgflip.com/get_memes')
  const data = await response.json()   
  return data;
}

function App() {


  console.log(getMemesData())
  return (
    <>
     <Header />
      <Meme />
    </>
  )
}

export default App
