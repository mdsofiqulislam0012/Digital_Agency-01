import React from 'react'
import assets from '../../assets/assets'
import Title from '../TitleSections/Title'
import ServiceCard from '../ServiceCard/ServiceCard'

export default function ServicesSections() {
    const servicesData = [
        {
            title: 'Advertising',
            description: 'we turn bold ideas into powerfull digital solutions that conncet engage...',
            icons: assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'we help you execute your plan and deliver results.',
            icons: assets.marketing_icon
        },
        {
            title: 'Content writing',
            description: 'we help you create a marketing strategy that drives results',
            icons: assets.content_icon
        },
        {
            title: 'Social media',
            description: 'we help you build a strong social media presence and engage with your audience',
            icons: assets.social_icon
        },
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 sm:px-12 lg:px-40 pt-30 text-gray-700 '>
        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1' alt="" />
        <Title title={'How can we help?'}
        description={'From strategy to execution, we craft digital solutions that move your business forward'}>
        </Title>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            {servicesData.map((service, index)=> (
                <ServiceCard key={index} service={service}></ServiceCard>
            ))}
        </div>
    </div>
  )
}
