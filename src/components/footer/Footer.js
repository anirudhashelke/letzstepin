import React from 'react'
import './Footer.css'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'

const icons=[
    <FaTwitter  />,
    <FaInstagram />,
    <FaYoutube />,
    <FaLinkedinIn />
]
const Footer = () => {
    const data=[
        {
            heading:"Useful Links",
            items:[
               "Home",
               "About us",
               "Jobs",
               "Refer & earn",
               "Terms of service",
               "Privacy policy",
               "Contact us",
            ]
        },
        {
            heading:"Our Services",
            items:[
               "Food Delivery",
               "Shopping",
               "Healthcare",
               "Real-estate",
               "Fitness",
               "Eduaction",
               "Automobile",
            ]
        },
    ]
    return (
        <div className='bg-[#359EDB] py-5 mt-5  a_footer_res'>
            <div className="container">
                <div className="row a_footer rounded-[25px] justify-center text-white bg-[#181818] py-5">
                    <div className='col-12 col-md-5'>
                        <div>
                            <h1 className='text-[30px] a_700 mb-3'>Letzstepin</h1>
                            <p className='text-[14px] a_500 '>LetzStepIn – India's avant-garde super app designed to seamlessly <br /> 
                                integrate into your daily lifestyle, property endeavors, and travel <br /> escapades.
                                 We're not just a platform; we're a commitment to user <br /> satisfaction, guaranteeing
                                  unparalleled benefits, quality, and safety</p>
                                  <div className='flex gap-3 mt-4 a_icons'>
                                    {icons.map((icon,index)=>{
                                        return <span className='text-[22px]' key={index}>{icon}</span>
                                    })}
                                  </div>
                        </div>
                    </div>
                    {data.map((values,index)=>{
                        return <div key={index} className='col-12 col-md-3'>
                        <ul>
                            <h1 className='font-bold text-[18px] mb-3'>{values.heading}</h1>
                            {values.items.map((value,index)=>{
                                return  <li key={index}><Link className=' text-[#29D9E7] text-[14px] a_400' href="#">{value}</Link></li>
                            })}
                           
                        </ul>
                    </div>
                    })}
                    
                    {/* <div className='col-12 col-md-4'></div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer