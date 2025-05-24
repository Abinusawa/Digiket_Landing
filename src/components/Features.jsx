import React from 'react'
import './styles.css'
import Card_list from '../assets/Cards/Card_list'
import { fcard_data } from '../assets/Cards/cards_data'

const Features = () => {
  return (
    <div className='Features container bg-white w-full px-4 py-8 sm:px-6 md:px-12 lg:px-20 border-2 border-solid'>
      <p className='Features_Title w-full text-center font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mb-6'>
        AI-Enhanced SEO: Optimize, Analyze, & Dominate
      </p>

      <div className="Features_Cards w-full mx-auto max-w-screen-lg">
        <Card_list features={fcard_data} />
      </div>
    </div>
  )
}

export default Features



























// import React from 'react'
// import './styles.css'


// const Features = () => {
//   return (
//     <>
//         <div className='Features container bg-white w-auto h-auto p-20 border-solid border-2'>
//             <p className='Features_Title container w-[850px] text-center font-semibold text-5xl'>AI-Enhanced SEO Optimize,
//             Analyze, & Dominate</p>
         


        

//         </div>
//     </>
//   )
// }

// export default Features




