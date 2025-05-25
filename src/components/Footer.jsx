import React from 'react'
import Digiket from '../assets/images/Digiket.png'
import Button from './Button'

const Footer = () => {
  return (
    <div className="container max-w-[1000px] mx-auto py-20 px-4 sm:px-6">
      {/* Top Side */}
      <div className=" flex flex-col md:flex-row items-start md:items-center gap-8 bg-white rounded-2xl p-6 overflow-hidden">
        {/* Left Side */}
        <div className="w-full md:w-[65%]">
          <h2 className="text-8xl md:text-4xl font-bold text-gray-900 max-w-[500px]">
            Looking For Professional SEO Agency?
          </h2>
          <p className="text-sm text-gray-600 mt-4 max-w-[450px]">
            Highly recommend their templates for any business looking to establish a strong online presence quickly and affordably.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[30%] flex flex-col justify-center items-start self-center">
          <Button className="bg-[#FF7F49] text-white text-[11px] px-6 py-3 font-semibold hover:bg-white hover:text-[#FF7F49] border border-[#FF7F49] transition">
            Get Started Free →
          </Button>
          <p className="text-[12px] text-gray-700 mt-3">No credit card required</p>
        </div>
      </div>


      {/* Bottom Content */}
      <div className="w-full mt-20 flex justify-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[300px_repeat(4,auto)] gap-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-y-6">
            <div>
              <img src={Digiket} alt="Digiket logo" className="w-[120px]" />
            </div>
            <p className="text-sm text-gray-600 max-w-[200px]">
              #1 framer template for digital marketing and SEO businesses.
            </p>
            <div className="relative w-full max-w-[250px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full h-[45px] border border-gray-300 rounded-[6px] px-4 pr-12 focus:outline-none focus:border-[#FF7F49]"
              />
              <Button
                children="→"
                variant="primary"
                className="w-[35px] h-[34px] rounded-[5px] absolute right-1 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>

          {/* Other Columns */}
          {[
            { title: 'Company', items: ['About Us', 'Careers', 'Press', 'Contact'] },
            { title: 'Product', items: ['Features', 'Pricing', 'Integrations', 'Security'] },
            { title: 'Resources', items: ['Blog', 'Guides', 'Webinars', 'Help Center'] },
            { title: 'Legal', items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Status'] }
          ].map((col, idx) => (
            <div key={idx}>
              <p className="text-sm text-gray-600 font-bold">{col.title}</p>
              <ul className="pt-[30px] text-[15px] text-gray-600 flex flex-col gap-y-[10px]">
                {col.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
