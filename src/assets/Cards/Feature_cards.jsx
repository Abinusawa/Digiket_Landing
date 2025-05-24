import React from 'react'


const Feature_cards = ({ icon, title, sub_title, arrow_icon, className = '', highlightReadMore = false}) => {
  return (
    <>
      {/* <div className={`feature_card ${className}`}> */}
      <div className='feature_card mt-4'>
        <div className={ `${className} card_content container  rounded-md w-[220px] h-[244px] bg-[#FBF1EC] p-8   `}>
          <img className='h-[35px]' src={icon} alt="images" />
          <div className='font-[600] text-[16px] mt-[13px] '>{title}</div>
          <div className='font-[400] text-[13px] mt-[13px]'>{sub_title}</div>
          <div className='flex gap-2 items-center mt-2'>
            <p className={highlightReadMore ? 'text-orange-500' : ''}>Read more</p>
            <img className='h-[10px] mt-[4px]' src={arrow_icon} alt="arrow" />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Feature_cards



























// import React from 'react'


// const Feature_cards = ({ icon, title, sub_title}) => {
//   return (
//     <>
     
//         <div className='card_content main border-solid border-2 w-[300px] h-[344px]  '>
//           {/* <img className='' src={icon} alt="images" /> */}
//           <div className=''>{title}</div>
//           <div className=''>{sub_title}</div>
//         </div>
        
 
//     </>
//   )
// }

// export default Feature_cards












