import React from 'react'
import Images from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'

const Services = () => {
    const servicesData = [
        {
            title: 'Content Marketing',
            desc: 'We help You execute your plan and deliver',
            icon: Images.content_icon
        },
        {
            title: 'Advertising',
            desc: 'We turn bold ideas into powerful digital solutions that connect, engage,...',
            icon: Images.ads_icon
        },
        {
            title: 'Content Writing',
            desc: 'We help you create a marketing strategy that drives results.',
            icon: Images.content_icon
        },
        {
            title: 'Social Media',
            desc: 'We help you build a strong social media presence and engage with your audience.',
            icon: Images.social_icon
        }
    ]
    return (
        <div id="Services" className='relative flex flex-col gap-5 items-center justify-center pt-19 max-sm:pt-14 dark:bg-black'>
            
            <img src={Images.bgImage2} alt="" className='absolute -top-110 -left-70 dark:hidden -z-1' />

            <Title title='How can we help?' description='From strategy to execution, we craft digital solutions that move your business forward.'/>
           <div className='flex flex-col md:grid grid-cols-2'> {servicesData.map(function(e ,index){
                return <ServicesCard key={index} title={e.title} description={e.desc} icon={e.icon} />
            })}</div>
        </div>
    )
}

export default Services
