import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Data from './Data.js'

function Meme() {
    const memesArray = Data.data.memes

    const memesArrayIndex = Math.floor(Math.random() * memesArray.length)

    let [imageUrl, setUrl] = useState(memesArray[memesArrayIndex].url)
    console.log(imageUrl)

    function handleClick() {
        setUrl(prevUrlState => imageUrl = prevUrlState)
        console.log(imageUrl)
    }
    return (
        <>
            <form>
                <div className='form--inp-group'>
                    <input className='form--input-1' type='text' placeholder='Shut up' />
                    <input className='form--input-2' type='text' placeholder='and take my money' />
                </div>
                <button onClick={handleClick} className='form--btn'>Get a new meme image  🖼</button>
                <div className='meme--image--div'>
                    <img className='meme--image' src={imageUrl} />
                </div>
            </form>
        </>
    )
}

export default Meme
