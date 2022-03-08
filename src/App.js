import { useState, useEffect, useRef } from 'react';

import './styles.css'

function App() {

  const [image, setImage] = useState(null);

  const canvas = useRef(null);

  const [topText, setTopText] = useState('Cat Meme Generator');

  const [bottomText, setBottomText] = useState('Sample Text');

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://thiscatdoesnotexist.com/";
    catImage.onload = () => setImage(catImage);
  }, [])

  useEffect(() => {
    if(image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, 1000, 556 + 80);
      ctx.drawImage(image, (800 - 500) / 2, 60)

      ctx.font = "32px Poppins"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"

      ctx.fillText(topText, (800 / 2), 40)
      ctx.fillText(bottomText, (800 / 2), 550 + 40 + 25)
    }
  }, [image, canvas, topText, bottomText])

  return (
   <div className="container">
     <div>
       <canvas ref={canvas} width={800} height={556+80}/>
     </div>

     <div>
       <input type="text"  value={topText} onChange={e => setTopText(e.target.value)} />
       <input type="text"  value={bottomText} onChange={e => setBottomText(e.target.value)} />
     </div>
   </div>
  );
}

export default App;