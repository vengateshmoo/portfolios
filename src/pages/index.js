import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import {BsFillMoonStarsFill} from "react-icons/bs";
import{
  AiFillTwitterCircle,
  AiFillMail,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { Inter } from 'next/font/google';
import code from "../../public/code.png";
import design from "../../public/design.png";
import apis from "../../public/apis.png";
import others from "../../public/others.png";
import devedwave from "../../public/dev-ed-wave.png";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode,setDarkmode] = useState(false);
    return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Vengatesh Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-black dark:text-white ">
    <section className="min-h-screen">
      <nav className=" py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons md:text-2xl lg:text-3xl">Vengtesh</h1>
        <ul className="flex justify-between gap-10 ">
          <li>
            <BsFillMoonStarsFill onClick={()=>setDarkmode(!darkMode)} className="cursor-pointer text-2xl"/>{' '}
          </li>
          <a href="../../public/vengateshresume.pdf" className="text-xl text-blue-600 hover:text-green-400 cursor-pointer">Resume</a>
        </ul>
      </nav>
      <div className="text-center">
        <h2 className="text-5xl py-5  text-teal-600">Vegatesh Moorthy</h2>
        <h3 className="text-2xl py-5">Software Engineer</h3>
        <p className="text-md py-5 text-pink-600 font-medium leading-8 md:text-3xl">I’m a software professional. I test and write codes.</p>
      </div>
      <div className="text-5xl flex justify-center gap-16 text-blue-900 cursor-pointer ">
        <AiFillLinkedin />
        <AiFillMail />
        <AiFillTwitterCircle />
      </div>
    </section>
    <section>
      <div className='w-60 h-60 rounded-full bg-blue-300 mx-auto relative mt-20 pt-8 md:w-96 md:h-96'>
      <Image className='m-auto' src={devedwave} />
      </div>
      <div>
        <h3 className='text-3xl py-1'>About Me</h3>
        <p className='text-md py-2 leading-B text-gray-900'>I am Vengatesh. I work as a software professional specializing in the area of Quality Assurance. I have 3.5+ years of Industry experience. I come from an underprivileged background and struggled a lot to study engineering and it was a nightmare to find a relevant job. I absolutely had no idea on how to get into IT field, I was so helpless. Years gone by, 
        I thought things would have changed and students are aware of the opportunities available.</p>
      </div>
      <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <Image className='m-auto' src={code} />
          <h3 className="text-3xl font-md">Coding Languages</h3>
          <p className="py-1">Java</p>
          <p className="py-1">JavaScript</p>
          <h5 className="py-1  text-blue-900 text-3xl">IDEs</h5>
          <p className="text-gray-800 py-1">Eclipse</p>
          <p className="text-gray-800 py-1">IntelliJ</p>
          <p className="text-gray-800 py-1">VS-Code Edititor</p>
        
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <Image className='m-auto' src={design} />
          <h3 className="text-3xl font-md ">Testing Tools</h3>
          <p className="py-1">Java-Selenium</p>
          <p className="py-1">JavaScript-Cypress</p>
          <ol>
            <h5 className='py-1 text-blue-900 text-2xl'> Java Frame Works</h5>
            <li>POM</li>
            <li>TestNG</li>
            <li>Cucumber</li>
            <li>Data Driven</li>
          </ol>
          <h5 className='py-1 text-blue-900 text-2xl'> JavaScript Frame Works</h5>
          <p className="text-gray-800 py-1">POM</p>
          <p className="text-gray-800 py-1">Fixture</p>
          <p className="text-gray-800 py-1">Data Driven</p>
        
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <Image className='m-auto' src={apis} />
          <h3 className="text-lg font-md">API's</h3>
          <p className="py-1">PostMan</p>
          <p className="py-1">RestAssured</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image className='m-auto' src={others} />
          <h4 className="text-lg font-md">Project Managent Tool </h4>
          <p className="text-gray-800 py-1">Maven</p>
          <h4 className="text-lg font-md">Version Control Tool</h4>
          <p className="text-gray-800 py-1">GitHub</p>
          </div>
          </div>
    </section>
     </main>
    </div>
  );
}
