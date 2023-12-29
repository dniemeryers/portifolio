import {Container, Social} from './style';
import { SocialIcon } from "react-social-icons";
import Foto from '../../img/perfildiego2.png';
import PDF from '../../img/pdf.png'
import {Header} from '../header/header'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";

import { NavLink } from 'react-router-dom';

import Seta from '../../img/projetos/icone-fleche-droite-grise.png'


export function Inicio() {
    
   
return(
    <>      
    <Container>            
        <div className='bio'>
            <div className="imgs">                    
                <img className="perfil" src={Foto} width="250px" alt="" />
            </div>
                <div className='descricao'>
                    <div className='helo'>
                    <div className='bolahelo'></div><p id='helo'>Olá</p>
                    </div>
                    <h2>Eu sou <h2 className='nome'>Diego</h2> Niemeyer</h2>
                <h1>Desenvolvedor Web<Cursor cursorColor='#FF0000' /></h1>
                            
                <Social>
        <SocialIcon className='social-icon' url="https://www.linkedin.com/in/diego-niemeyer/"
            style={{width: 30, height: 30}}
            fgColor='#FF0000'
            bgColor='transparent'
            target={"_blank"}/>
        <SocialIcon url="https://github.com/dniemeryers"
        style={{width: 30, height: 30}}
            fgColor='#FF0000'
            bgColor='transparent'
            target={"_blank"}/>
        <SocialIcon url="mailto:dniemeyers@gmail.com"
        style={{width: 30, height: 30}}
            fgColor='#FF0000'
            bgColor='transparent'
            target={"_blank"}/>    
        <SocialIcon url="https://api.whatsapp.com/send?phone=5521974112744"
        style={{width: 30, height: 30}}
            fgColor='#FF0000'
            bgColor='transparent'
            target={"_blank"}/>    
    </Social>
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
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            }}      >
            <NavLink to="/#sobre"><img className="seta" src={Seta} alt="" /></NavLink>
        </motion.div>

        <NavLink to="https://drive.google.com/file/d/   1iOKMBp0xvfcxqOO-K60MVmyALkey42tJ/view?usp=share_link" target={"_blank"}>
            <div className="button" >
            <p className='curriculo'>CURRICULO</p><img className="pdf" src={PDF} width="30px" height='30px;' alt="" /></div>
        </NavLink>
</Container>

    
    

    </>
    )
};