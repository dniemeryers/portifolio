import {Container, Social,Sobre,H1,Formacao,Projetos,Experiencia} from './style';
import { SocialIcon } from "react-social-icons"
import Foto from '../../assets/img/perfil-diego.png';
import Anhanguera from '../../assets/img/Anhanguera_Educacional_logo-e1589831484851.png';
import Betel from '../../assets/img/logo_betel_2023novo.fw_.png';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import JsWorkover from '../../assets/img/Certificado JS Worked.jpeg'
import { Header } from '../../assets/components/header/header';
import {Inicio} from '../../assets/components/inicio/inicio'
import {Experiencias} from '../../page/experiencia/Experiencia'
import { NavLink } from 'react-router-dom';
//import Contact from '../../assets/components/contatos/contato'
import Calc from '../../assets/img/projetos/calc.gif'
import Seta from '../../assets/img/projetos/icone-fleche-droite-grise.png'


export function Home() {
    
    
    return(<>
        <Header/>
        <Inicio/>
        <H1>Sobre</H1>
        <Sobre id="sobre">      
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
        <Experiencias/>
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
 
