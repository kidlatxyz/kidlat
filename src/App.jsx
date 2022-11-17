import { useState } from 'react'
import './App.css'

import Nav from './components/Nav/Nav';

const Hero = () => {
  return (   
  <header className="w-full h-96 bg-[url('https://www.kindacode.com/wp-content/uploads/2022/06/hero-image-example.jpeg')] bg-cover bg-center flex justify-center items-center">
      <div className="mt-2 flex flex-col justify-center items-center">
          <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">WELCOME TO
          KIDLAT
          </h1>
      </div>
    </header>
  );
}

function App() {
 
  return (
    <div className="App">
      <Nav />
      <br />
      <br />
      <br />
      <Hero />
      
       <div>
        <a href="https://t.me/+zkxzjy8_2ylkMDU9" target="_blank">
          Join on Telegram 
        </a>
      </div>
      
      <div className="card">
        <p>
          Learn more about <a href="https://darthcoin.substack.com/p/lightning-network-is-awesome">Lightning network</a>
        </p>
      </div>
     
    </div>
  )
}

export default App
