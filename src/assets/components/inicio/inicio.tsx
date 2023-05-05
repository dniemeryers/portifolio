import {Container, Social} from './style';
import { SocialIcon } from "react-social-icons";
import Foto from '../../img/perfildiego2.png';
import {Header} from '../header/header'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";

import { NavLink } from 'react-router-dom';

import Seta from '../../img/projetos/icone-fleche-droite-grise.png'


export function Inicio() {
    
    const [text, count] = useTypewriter({
        words: [
            "Developer",
            "Front-End"            
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return(
        <>
        
         
       
        <Container>   
       
            
           
            <div className='bio'>
                <div className="imgs">                    
                    <img className="perfil" src={Foto} width="250px" alt="" />
                    
                    <h1>{text}<Cursor cursorColor='#BFBFBF' /></h1>
                   
                </div>                        
            </div>
     
            <motion.div
      style={{
        position: "absolute",
        left: "100%",
        transform: "translateX(-50%)",
        top: "-60px",
      }}
      animate={{
        top: ["0px", "55px"],
      }}
      transition={{
        duration: 0.7,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    >
      <NavLink to="/#sobre"><img className="seta" src={Seta} alt="" /></NavLink>
    </motion.div>
    </Container>
    <Social>
            <SocialIcon className='social-icon' url="https://www.linkedin.com/in/diego-niemeyer/"
                fgColor='#BFBFBF'
                bgColor='transparent'
                target={"_blank"}/>
            <SocialIcon url="https://github.com/dniemeryers"
                fgColor='#BFBFBF'
                bgColor='transparent'
                target={"_blank"}/>
            <SocialIcon url="https://api.whatsapp.com/send?phone=5521974112744"
                fgColor='#BFBFBF'
                bgColor='transparent'
                target={"_blank"}/>    
        </Social>

        </>
        )
    };