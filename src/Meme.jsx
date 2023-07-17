import { useState, useEffect } from 'react'
import memeimg from '/memeimg.jpg'
import './App.css'
import Header from './Header'


function Meme() {

    const [meme, setMeme] = useState(
                                        {   topText:"",
                                            bottomText:"",
                                            randomImage:memeimg
                                        }
                                    )
    // console.log(defaultMemeImg)

    const [allMemes,setAllMemes] = useState([])

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    function handleChange(event){
        
        const{name,value} = event.target
        console.log(name,value)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]:value
            }
        })
    }
    function getMemeImage() {
        console.log('clicked')
        const memesArray = allMemes
       
        const memesArrayIndex = Math.floor(Math.random() * memesArray.length)
        // console.log(allMemes[memesArrayIndex].url)
        setMeme(prevMeme => {
            return { 
                ...prevMeme,
                randomImage:allMemes[memesArrayIndex].url
            }
        })
    }
    return (
        <>
            
                <div className='form--inp-group'>
                    <input 
                    name="topText" 
                    value={meme.topText} 
                    className='form--input-1' 
                    type='text' 
                    placeholder='Shut up' 
                    onChange={handleChange}
                    />
                    <input 
                    name="bottomText" 
                    value={meme.bottomText} 
                    className='form--input-2' 
                    type='text' 
                    placeholder='and take my money' 
                    onChange={handleChange}
                    />
                </div>
                <button 
                    className='form--btn'
                    onClick={getMemeImage}
                >Get a new meme image  🖼     
                </button>
                <div className='meme--image--div'>
                    <img className='meme--image' src={meme.randomImage} />
                    <p className='meme--top'>{meme.topText}</p>
                    <p className='meme--bottom'>{meme.bottomText}</p>
                </div>
            
        </>
    )
}

export default Meme
