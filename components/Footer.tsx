import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@data';
import MagicButton from './ui/MagicButton';

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img 
        src="/footer-grid.svg" 
        alt="grid" 
        className='w-full h-full opacity-50' 
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Está pronto para levar <span
          className='text-purple'>sua</span> presença digital para o proximo nivel?
        </h1>
          <p className='text-white-200 md:mt-10 my-5 text-center'>Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a atingir seus objetivos.
          </p>
          <a href="mailto:contact@jsmastery.pro">
            <MagicButton 
              title="Entrar em contato"
              icon={<FaLocationArrow />}
              position="right" 
            />
          </a>
          <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">
              Copyright © 2024 Bruno
              </p>

            <div className='flex items-center md:gap-3 gap-6'>
              {socialMedia.map((profile) => (
              <div 
              key={profile.id} 
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
              >
                <img src={profile.img} alt={profile.id} width={20} height={20}/>

              </div>  
              ))}
            </div>
          </div>
      </div>
      
      </footer>
  )
}

export default Footer