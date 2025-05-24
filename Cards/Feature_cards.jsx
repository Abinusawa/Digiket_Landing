import React from 'react'


const Feature_cards = ({ icon, title, sub_title}) => {
  return (
    <>
     
        <div className='card_content main border-solid border-2 w-[300px] h-[344px]  '>
          {/* <img className='' src={icon} alt="images" /> */}
          <div className=''>{title}</div>
          <div className=''>{sub_title}</div>
        </div>
        
 
    </>
  )
}

export default Feature_cards
