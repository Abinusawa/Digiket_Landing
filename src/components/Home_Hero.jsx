import React from 'react'
import Button from '.Button'
import Hero from '../assets/images/hero.png'
import Pattern from '../assets/images/pattern.png'
import Review_tape from '../assets/images/review_tape.png'
import Avatar from '../assets/images/Avatar.png'

const Home_Hero = () => {
  return (
    <div className="home__hero container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500 ease-in-out">
      
      {/* Content Section */}
      <div className="home__hero-content w-full md:w-1/2 leading-7 space-y-4 transition-all duration-500 ease-in-out">
        <p className="text-sm font-semibold text-[#FF7F49] animate-fade-in">
          👋 Hey there! We’re Digiket
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in">
          High-Impact SEO Strategies for Business Growth
        </h1>

        <p className="text-base text-gray-700 animate-fade-in">
          In an ever-evolving digital landscape, our SEO agency stands at the forefront of innovation, 
          utilizing cutting-edge AI technologies to drive unparalleled search engine performance.
        </p>

        <div className="hero__buttons flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up">
          <Button 
            className="transition-transform transform hover:scale-105"
            variant="primary" size="md"
          >
            Our Services
          </Button>

          <Button 
            className="transition-transform transform hover:scale-105"
            variant="secondary" size="md"
          >
            About Us
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div 
        className="hero__image w-full md:w-1/2 relative bg-no-repeat bg-center bg-contain transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${Pattern})`, minHeight: '400px' }}
      >
        <img 
          src={Hero} 
          alt="Hero Image" 
          className="w-full max-h-[500px] object-contain animate-fade-in"
        />
        <img 
  src={Avatar} 
  alt="Avatar" 
  className="absolute bottom-[200px] left-[10%] w-[282px] sm:w-36 md:w-40 animate-bounce"
/>

<img 
  src={Review_tape} 
  alt="Review Tape" 
  className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[280px] sm:w-56 md:w-60 md:left-[235px] md:translate-x-0 animate-fade-in"
/>


        {/* <img 
          src={Avatar} 
          alt="Avatar" 
          className="absolute bottom-[200px] left-[10%] w-[282px] sm:w-36 md:w-40 animate-bounce"
        />

        <img 
          src={Review_tape} 
          alt="Review Tape" 
          className="absolute w-[395px] bottom-[40px] left-[235px] sm:w-56 md:w-60 animate-fade-in"
        /> */}

      </div>
    </div>
  )
}

export default Home_Hero

















































// import React from 'react'
// import Button from '../assets/button'
// import Hero from '../assets/images/hero.png'
// import Pattern from '../assets/images/pattern.png'
// import Review_tape from '../assets/images/review_tape.png'
// import Avatar from '../assets/images/Avatar.png'

// const Home_Hero = () => {
//   return (
//     <>
//       <div className='home__hero container  h-[800px] flex gap-10  items-center justify-center'>
//         <div className='home__hero  content w-[40%] leading-7 '>
//           <p className='hero__intro text-xs font-semibold text-[#FF7F49]'>👋 Hey there! We’re Digiket</p>
//           <br />
//           <h1 className='text-4xl leading-10 font-bold animate-pulse space-x-4'>High-Impact SEO Strategies for Business Growth</h1>
//           <br />
//             <p className=''>Ever-evolving digital landscape, our SEO agency stands forefront innovation, 
//             utilizing cutting-edge AI technologies to drive unparalleled search engine performance.</p>
          
//           <br />
//           <div className='hero__buttons flex gap-4 '>
//           <Button 
//           // onClick={handleClick} 
//           className='animate-bounce'
//           variant="primary" size="md">
//             Our Services
//           </Button>

//           <Button 
//           // onClick={handleClick} 
//           variant="secondary" size="md">
//             About Us
//           </Button>
//           </div>


//         </div>

//         <div className='hero__image' style={{ backgroundImage: `url(${Pattern})`, height: '500px'}} >
//           <img src={Hero} alt="Hero Image" className="" style={{ height: '600px' }}/>
//           <img src={Avatar} alt="Avartar" className="relative bottom-[350px] left-200" style={{ height: '200px' }}/>
//           <img src={Review_tape} alt="Review tape" className="relative bottom-[330px] left-[10px]" style={{ height: '180px' }}/>
          
//         </div>

        
//       </div>
//     </>
//   )
// }

// export default Home_Hero
