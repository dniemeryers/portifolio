import {Sobre,H1,H2,Formacao,Projetos,Habilidade} from './style';

import Foto from '../../assets/img/perfil-diego.png';
import Anhanguera from '../../assets/img/Anhanguera_Educacional_logo-e1589831484851.png';
import Betel from '../../assets/img/logo_betel_2023novo.fw_.png';


import {Inicio} from '../../assets/components/inicio/inicio'
import {Experiencias} from '../../page/experiencia/Experiencia'
import { NavLink } from 'react-router-dom';

import Calc from '../../assets/img/projetos/calc.gif'



export function Home() {
    
    
    return(<>
        
        <Inicio/>
        <H1>Sobre</H1>
        <Sobre id="sobre">             
                    <div className='info'>
                        <img src={Foto} width='200px' alt="" />
                        <h1>Diego Niemeyer</h1>
                        <h3>Desenvolvedor Front-End</h3>
                    </div>            
                    <div className='texto'>            
                        <p>Olá meu nome é Diego Niemeyer e estou estudando desenvolvimento front-end,<strong> minha meta é ajudar empresas a alcançar seus objetivos através do desenvolvimento tecnológico, fornecendo soluções personalizadas e de alta qualidade para seus problemas.</strong></p>
                        <p>Por meio do uso de tecnologias inovadoras, metodologias ágeis e boas práticas de desenvolvimento, garanto que meu trabalho será de alta qualidade. Além disso, acredito que a transparência, comunicação e a colaboração são fundamentais para o sucesso de qualquer projeto, mantendo sempre uma comunicação clara e efetiva com todos no processo de desenvolvimento.</p>
                    </div> 
        </Sobre>
        <Habilidade>
        <div className='habilidade'>
                <h1>Habilidades</h1>
                <div className='skills'>
                <img className='skill' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="" />
                <img className='skill' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="" />
                <img className='skill' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="" />
                <img className='skill' src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png" alt="" />
                <img className='skill' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                <img className='skill' src="https://avatars.githubusercontent.com/u/20658825?s=200&v=4" alt="" />
                </div>
                </div>
        </Habilidade>
        <H2>Projetos</H2>
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
        <Experiencias/>
        <Formacao>
            <div className='container'>                
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
           
        </Formacao>
        
       

         

    </>)


};
 
