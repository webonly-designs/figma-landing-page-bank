import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Glance from '@/components/Glance'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Newsletter from '@/components/Newsletter'
import Patners from '@/components/Patners'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='relative lg:h-[650px]'>
          <div className='hidden lg:block absolute top-0 right-0 w-[47vw] h-full bg-[#FFEAF5] -z-50'></div>
          <Nav />
          <Hero />
        </div>
        <Feature />
        <Patners />
        <Glance />
        <Services />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
