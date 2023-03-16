import React from 'react'
import FeatureItem from './FeatureItem'

function Feature() {
  return (
    <div className='max-w-7xl px-5 mx-auto lg:mt-12 py-12 lg:py-24'>
        <h2 className='text-center text-3xl text-black/80 font-bold mb-4 tracking-wide'>Creating Extraordinary Customer Experience</h2>
        <p className='max-w-2xl mx-auto text-center text-black/40'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-48 gap-y-8 lg:gap-y-12 pt-12 lg:pt-24'>
            <FeatureItem image="circleLayer.png" title="Integrity" text="Displaying the highest level of Integrity in the way we conduct our business"/>
            <FeatureItem image="Scenery.png" title="Demonstrate" text="Demonstrating a strong Will to Win in the market place"/>
            <FeatureItem image="diversity.png" title="Diversity" text="Promoting Diversity in the work place and community"/>
            <FeatureItem image="teamWork.png" title="Teamwork" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen"/>
            <FeatureItem image="circleLayer.png" title="Collaboration" text="Displaying the highest level of Integrity in the way we conduct our business"/>
            <FeatureItem image="Rocket.png" title="Technology" text="Harnessing the power of Technology to deliver better customer experience"/>
            <FeatureItem image="Bag.png" title="Corporate" text="Setting the standard for the best Corporate Citizenship in the communities we work"/>
            <FeatureItem image="Cube.png" title="Digital" text="Setting the standard for the best Corporate Citizenship in the communities we work"/>
        </div>
    </div>
  )
}

export default Feature