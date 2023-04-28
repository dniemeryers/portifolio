import {Container, Social,Sobre,H1,Formacao,Projetos,Experiencia} from './style';
import { SocialIcon } from "react-social-icons";
import Foto from '../../assets/img/perfil-diego.png';
import Anhanguera from '../../assets/img/Anhanguera_Educacional_logo-e1589831484851.png';
import Betel from '../../assets/img/logo_betel_2023novo.fw_.png';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import JsWorkover from '../../assets/img/Certificado JS Worked.jpeg'
import { Header } from '../../assets/components/header/header';
import { NavLink } from 'react-router-dom';
import Calc from '../../assets/img/projetos/calc.gif'


export function Home() {
    
    const [text, count] = useTypewriter({
        words: [
            "Developer",
            "Front-End"            
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return(<>

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
        <Container>    
            
           
            <div className='bio'>
                <div className="imgs">                    
                    <img className="perfil" src={Foto} width="250px" alt="" />
                    
                    <h1>{text} <Cursor cursorColor='#BFBFBF' /></h1>
                   
                </div>                        
            </div>
        </Container>

        </>)}