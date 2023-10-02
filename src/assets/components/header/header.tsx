import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Container2, Social } from './style';
import { motion } from 'framer-motion'


import { SocialIcon } from "react-social-icons"
import Foto from '../../img/perfil-diego.png'
import LogoIcnv from '../../img/logo icnv.png'
import PDF from '../../img/pdf.png'


export function Header() {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }  

  return (<>
    <Container style={{zIndex: '3'}}  >
      <div className="icons">
      <div className='logo'>
      <img className="perfil" src={LogoIcnv} width="60px" height="50px" alt="" />
      <motion.div
             initial={{
                x: 1500,
                opacity: 0,
                scale: 0.5,
             }}
             animate={{
                x: 0,
                opacity: 1,
                scale: 1,
             }}
             transition={{
                duration: 2.5,
             }}>          
          <h1>ICNV Cerâmica</h1>       
        </motion.div>
        </div>
        <div className="menu">
          <input type="checkbox" id="checkbox-menu"  checked={isMenuOpen} onChange={handleMenuClick} />
          <label style={{zIndex: '1'}} htmlFor="checkbox-menu">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className='links-desktop'>
          <NavLink className={'navlink'} to="/home">Programação</NavLink>
          <NavLink className={'navlink'} to="/sobre"></NavLink>
          <NavLink className={'navlink'} to="/educacao"></NavLink>
          <NavLink className={'navlink'} to="/projetos">Projetos</NavLink>
          <NavLink className={'navlink'} to="/experiencia">Experiências</NavLink>
          
          <NavLink to="https://drive.google.com/file/d/1iOKMBp0xvfcxqOO-K60MVmyALkey42tJ/view?usp=share_link" target={"_blank"}><div className="button" ><p className='curriculo'>CURRICULO</p></div></NavLink>
        </div>
      </div>
    </Container>
    <Container2>
      <motion.div 
             initial={{
                y: -4500,
                opacity: 0,
             }}
             animate={{
                y: isMenuOpen ? '30rem' : '0%',
                
               
                opacity: isMenuOpen ? 1 : 0,
                
             }}
             transition={{
                duration: isMenuOpen ? 0.75 : 1,
                
             }}
             style={{ 
                position: !isMenuOpen ? 'relative':'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                             
             }}>
              
      <div className="nav" style={{ 
        display: isMenuOpen ? 'block' : 'none',
        
        }}>

        <h1>Igreja</h1>       
        <NavLink className="child" to="/home">Quem Somos</NavLink>
        <NavLink className="child" to="/sobre">Onde Estamos</NavLink>
        <NavLink className="child" to="/educacao">Liderança</NavLink>
        <NavLink to="/projetos">Programação</NavLink>
        <NavLink to="/experiencia">Contatos</NavLink>
        <NavLink to="/experiencia">Doação</NavLink>
        
        <Social>
          <SocialIcon className='ic' url="https://www.instagram.com/icnvceramica/"
            fgColor='black'
            bgColor='transparent'
            target={"_blank"}/>
          <SocialIcon className='ic' url="https://www.youtube.com/channel/UCMsoMi0lmy4jjGTDljr47tg"
            fgColor='black'
            bgColor='transparent'
            target={"_blank"}/>
          <SocialIcon url="mailto:dniemeyers@gmail.com"
              fgColor='black'
              bgColor='transparent'
              target={"_blank"}/>    
          <SocialIcon className='ic' url="https://api.whatsapp.com/send?phone=5521974112744"
            fgColor='black'
            bgColor='transparent'
            target={"_blank"}/>     
        </Social>               
      </div>
      </motion.div>   
    </Container2>
  </>);
}
 