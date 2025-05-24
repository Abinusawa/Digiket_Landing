import React from 'react'
import bg_img from '../assets/images/featureimage.jpg'
import graph from '../assets/images/graph.png'


const Main_Feature = () => {
  return (
    <>
        <div className='Main_Feature container gap-[30px] flex border-solid border-2'>
            <div className='inner_feature ml-[-100px] '>
              <img src={bg_img} alt="bgFeature" className=' h-[640px] w-[595px] rounded-[10px]'/>
              {/* <img  className='bg-[url(../assets/images/featureimage.jpg'/> */}
              {/* <img src={graph} alt="bgFeature" className='w-[360px] h-[307px] absolute bottom-0 left-0'/> */}
            </div>
              <div className='Main__content contianer w-[650px] mt-[70px] border-solid border-2'>
                <p className='small_Feature__title text-xl font-semibold text-[#FF7F49] '>🤩 Exclusive Features</p>
                <br />
                <h1 className='Main_Feature__title text-5xl font-semibold leading-[55px] w-[550px]'>Empower Your Business with Next Generation AI SEO Tools</h1>
                <br />
                <h1 className='Main_Feature__subtitle text-lg font-semibold '>Artificial Intelligence (AI) CRM solutions are transforming businesses manage and nurture customer relationships.</h1>
                <div className='cards'>
                  cards
                </div>

              </div>
        
        </div>
    </>
  )
}

export default Main_Feature
