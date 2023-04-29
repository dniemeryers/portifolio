import {Container, Social,Sobre,H1,Formacao,Projetos,Experiencia} from './style';
import { SocialIcon } from "react-social-icons"
import Foto from '../../assets/img/perfil-diego.png';
import Anhanguera from '../../assets/img/Anhanguera_Educacional_logo-e1589831484851.png';
import Betel from '../../assets/img/logo_betel_2023novo.fw_.png';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import JsWorkover from '../../assets/img/Certificado JS Worked.jpeg'
import { Header } from '../../assets/components/header/header';
import { NavLink } from 'react-router-dom';
import Calc from '../../assets/img/projetos/calc.gif'
import Seta from '../../assets/img/projetos/icone-fleche-droite-grise.png'


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
       <Header/>
       
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
     
            <motion.div
      style={{
        position: "absolute",
        left: "100%",
        transform: "translateX(-50%)",
        top: "-60px",
      }}
      animate={{
        top: ["0px", "30px"],
      }}
      transition={{
        duration: 0.7,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    >
      <img className="seta" src={Seta} alt="" />
    </motion.div>
    
        </Container>
        <H1>Sobre</H1>
<Sobre>      
<div className='sobre'>
<div className='emprego'>
    <div className='info'>
       <img src={Foto} width='200px' alt="" />
       <h1>Diego Niemeyer</h1>
       <h3>Desenvolvedor Front-End</h3>
    </div>
    
    <div className='texto'>
    
       <p>Olá meu nome é Diego Niemeyer e estou estudando desenvolvimento front-end,<strong> minha meta é ajudar empresas a alcançar seus objetivos através do desenvolvimento tecnológico, fornecendo soluções personalizadas e de alta qualidade para seus problemas.</strong></p>
       <p>Por meio do uso de tecnologias inovadoras, metodologias ágeis e boas práticas de desenvolvimento, garanto que meu trabalho será de alta qualidade. Além disso, acredito que a transparência, a comunicação e a colaboração são fundamentais para o sucesso de qualquer projeto, por isso que gosto de manter uma comunicação clara e efetiva com todos no processo de desenvolvimento.</p>
       
       
    </div>
    
</div>
</div>
</Sobre>

<Experiencia>
    <h1>Experiência</h1>   
    <div className='container'>        
        <div className='container1'>
            <img src="https://media.licdn.com/dms/image/C4D0BAQH94aQSIHZPNA/company-logo_200_200/0/1649874998369?e=1691020800&v=beta&t=dTTNIAmrAx_XhEC2wihhYkeQwA_5v-l9j_IQh4tON9s" alt="" />
        </div>
        <div className='container2'>
            <h2>Desenvolvedor Front-End</h2>
            <h3>Instituto de Educação e Cidadania</h3>
            <h4>Março de 2023 - o momento (Voluntário)</h4>
            <p>- Revitalização do site, aplicando novas tecnologias de desenvolvimento para da mais performance à página.</p>
            <p>- React + TypeScript</p>
            <p>- Responsividade</p>
            <p>Competências: Bitbucket · JIRA · TypeScript · Styled-components · react-router-dom · HTML · CSS · React.js · Scrum · JavaScript</p>
            <div className='social' >
            <SocialIcon className='ic' url="https://www.instagram.com/iecbrasil/"
                fgColor='#BFBFBF'
                bgColor='transparent'
                target={"_blank"}/>
            <SocialIcon className='ic' url="https://www.facebook.com/iecbrasil.org"
                fgColor='#BFBFBF'
                bgColor='transparent'
                target={"_blank"}/>
            <SocialIcon className='ic' url="https://www.linkedin.com/company/iecbrasil/"
                fgColor='#BFBFBF'
                bgColor='transparent'
                target={"_blank"}/>
            <SocialIcon className='ic' url="https://www.youtube.com/@iecbrasil7560"
                fgColor='#BFBFBF'
                bgColor='transparent'
                target={"_blank"}/>       
        </div>
        </div>
    </div>
    
</Experiencia>
<Formacao>
    <div className='container'>
    <div className='cont'>
        <h1>Formação</h1> 
        <div className='educacao'>                                          
            <div className='escola'>                        
                <img src={Anhanguera} alt="" />
                <h3>Anhanguera Educacional</h3>                        
                <h4>Análise e Dev. de Sistemas</h4>
                <p>Cursando 2º Período 2022 - 2024</p>
            </div>
            <div className='escola'>
                <img src={Betel} alt="" />
                <h3>Centro Educacional Betel</h3>
                <h4>Ensino médio - Téc. em Informática</h4>
                <p>Concluído 2004 - 2006</p>
            </div>
        </div>
    </div>
    <div className='habilidade'>
        <h1>Habilidades</h1>
        <div className='skills'>
        <img className='skill' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="" />
        <img className='skill' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="" />
        <img className='skill' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="" />
        <img className='skill' src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png" alt="" />
        <img className='skill' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
        </div>
    </div>
    </div>
    <div className='cursos'>
        <h1>Cursos</h1>
        <p className='cert'>Click para ver o Certificado</p>
        <div className='certificados'>
        <div className="curso" >
            <img className="certlinha1" src={JsWorkover} alt="" />
            <img className="certlinha1" src={JsWorkover} alt="" />
            <img className="certlinha1" src={JsWorkover} alt="" />         
            <img className="certlinha1" src={JsWorkover} alt="" />
            <img className="certlinha1" src={JsWorkover} alt="" />
            <img className="certlinha1" src={JsWorkover} alt="" />       
            <img className="certlinha1" src={JsWorkover} alt="" />
            <img className="certlinha1" src={JsWorkover} alt="" />
            <img className="certlinha1" src={JsWorkover} alt="" />
            </div>
        </div>
    </div>

</Formacao>
<Projetos>
<div className='trabalho'>                        
                        <h4>Calculadora</h4>
                        <div>
                            <img className='imgcalc' src={Calc} alt="" />
                        </div>
                        <h3>Link do deploy:<NavLink to="/home"></NavLink></h3>
                        <h3>Link do Repositório:<NavLink to="/home"></NavLink></h3>
                        <h4>Tecnologias Utilizadas</h4>
                        <div className='tecnologia'>
                            <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg'} alt="React" />
                            <img className='tec' src={'https://avatars.githubusercontent.com/u/20658825?s=200&v=4'} alt="Styled-Component" />
                        </div>                          
                    </div>  

</Projetos>

         

    </>)


};
 
