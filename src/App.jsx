import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';
import images from './images';

function App() {

  const [width,setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);

  return (
    <div className="flex items-center justify-center h-[100vh] mx-[10%]">
      <motion.div 
      ref={carousel} 
      className='cursor-grab overflow-hidden shadow-2xl shadow-black' 
      whileTap={{cursor:"grabbing"}}>

        <motion.div
        drag="x" 
        dragConstraints={{right:0, left: -width}}   
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        className='flex'>

          {images.map(image => {
            return(
              <motion.div> 
                <img src={image}
                className='h-full w-full min-w-[19rem] p-[20px] rounded-[2.5rem]' 
                draggable='false' 
                key={image} 
                alt="" />
              </motion.div>

            );
          })}

        </motion.div>

      </motion.div>
    </div>
  );
}

export default App;
