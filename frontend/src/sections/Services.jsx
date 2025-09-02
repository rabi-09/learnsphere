import React from 'react'
import { ServiceCard } from '../components/ServiceCard'

const Services = () => {
    return (
        <>
            <h2 className='text-5xl text-white text-center'>Our Services</h2>
            <div className='flex space-x-5 p-5'>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </>
    )
}

export default Services