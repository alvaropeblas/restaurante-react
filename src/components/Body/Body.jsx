import logo from '../../assets/images/Logo.png'
import { Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import Reservas from './Reservas';
import Footer from './Footer';


const Body = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);
    const handleScrollPage = () => {
        const nextDiv = document.querySelector('.calendar');
        if (nextDiv) {
            nextDiv.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='bg-TERCIARY h-screen w-screen'>
            <div className='flex flex-col items-center justify-center h-screen'>
                <div className='flex items-center mb-4'>
                    <h1 className={`text-4xl font-lilita transition-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-2em] opacity-0'}`}>W<label className='text-BUTTON_COLOR'>e</label>lcom<label className='text-BUTTON_COLOR'>e</label> to </h1>
                    <div>
                        <img src={logo} alt="" className='mx-4 opacity-100' />
                    </div>
                    <h1 className={`text-4xl font-lilita transition-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-2em] opacity-0'}`}>R<label className='text-BUTTON_COLOR'>e</label>st<label className='text-BUTTON_COLOR'>a</label>ur<label className='text-BUTTON_COLOR'>a</label>nt</h1>
                </div>

                <Button className={` flex flex-col transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-2em] opacity-0'}`}
                    bg='#FE5F55'
                    height='3em'
                    width="5em"
                    onClick={handleScrollPage}
                    _hover={{ bg: '#ed7771' }}
                    color="white"
                >
                    <p className='p-5'>RESERVAS</p>
                </Button>
                <hr />
            </div>
            <HeroSection />
            <Reservas />
            <Footer />
        </div >
    );
};

export default Body;
