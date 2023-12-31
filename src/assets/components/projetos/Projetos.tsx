import {Container1, Container2,H1} from './style'
import { NavLink } from 'react-router-dom'
import { Header } from "../../assets/components/header/header"
import Calc from "../../assets/img/projetos/calc.gif"
import Org from "../../assets/img/projetos/organizar-os-estudos.gif"




export function Projetos() {


    return(<>
        <Header/>
        <H1>Projetos</H1>
        <Container1>    
        <div className='trabalho'>                        
            <h4>Organizar Estudos</h4>
            <div>
                <img className='imgorg' src={Org}   alt="" />
            </div>
            <NavLink to='https://organizar-os-estudos.vercel.app/' target={"_blank"}><h3>&gt; Link do deploy &lt;</h3></NavLink>
            <NavLink to="https://github.com/dniemeryers/organizar-os-estudos" target={"_blank"}><h3>&gt; Link do repositório &lt;</h3></NavLink>
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
                        <NavLink to="https://dniemeryers.github.io/trilha-react-desafio01-calculadora/"><h3>&gt; Link do deploy &lt;</h3></NavLink>
                        <NavLink to="https://github.com/dniemeryers/trilha-react-desafio01-calculadora"><h3>&gt; Link do repositório &lt;</h3></NavLink>
                        <h4>Tecnologias Utilizadas</h4>
                        <div className='tecnologia'>
                            <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg'} alt="React" />
                            <img className='tec' src={'https://avatars.githubusercontent.com/u/20658825?s=200&v=4'} alt="Styled-Component" />
                        </div>                          
                    </div>                   
                    <div className='trabalho'>                        
                            <h4>Lista de Tearefas</h4>
                            <div>
                                <img className='imgpc' src={'https://github.com/dniemeryers/lista-de-tarefa/blob/main/img/pc.gif?raw=true'} alt="" />
                            </div>
                            <NavLink to="https://dniemeryers.github.io/lista-de-tarefa/"><h3>&gt; Link do deploy &lt;</h3></NavLink>
                        <NavLink to="https://github.com/dniemeryers/lista-de-tarefa"><h3>&gt; Link do repositório &lt;</h3></NavLink>
                        <h4>Tecnologias Utilizadas</h4>
                            <div className='tecnologia'>
                                <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'} alt="React" />
                                <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg'} alt="Styled-Component" />
                                <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'} alt="React" />
                                
                            </div>                          
                    </div>
                    
                    
        
        </Container1>
        <Container2>
        <div className='trabalho'>                        
                            <h4>Fala Cebolinha</h4>
                            <div>
                                <img className='imgcalc' src={'https://github.com/dniemeryers/fala-cebolinha/blob/main/img/cebolinha.gif?raw=true'} alt="" />
                            </div>
                            <NavLink to="https://dniemeryers.github.io/fala-cebolinha/"><h3>&gt; Link do deploy &lt;</h3></NavLink>
                        <NavLink to="https://github.com/dniemeryers/fala-cebolinha"><h3>&gt; Link do repositório &lt;</h3></NavLink>
                        <h4>Tecnologias Utilizadas</h4>
                            <div className='tecnologia'>
                            <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'} alt="React" />
                                <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg'} alt="Styled-Component" />
                                <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'} alt="React" />
                                </div>                          
                    </div>
                    <div className='trabalho'>                        
                            <h4>Jogo da Velha</h4>
                            <div>
                                <img className='imgcalc' src={'https://github.com/dniemeryers/jogo-velha/raw/main/assets/video_to_readme.gif'} alt="" />
                            </div>
                            <NavLink to="https://dniemeryers.github.io/jogo-velha/"><h3>&gt; Link do deploy &lt;</h3></NavLink>
                        <NavLink to="https://github.com/dniemeryers/jogo-velha"><h3>&gt; Link do repositório &lt;</h3></NavLink>
                        <h4>Tecnologias Utilizadas</h4>
                            <div className='tecnologia'>
                            <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'} alt="React" />
                                <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg'} alt="Styled-Component" />
                                <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'} alt="React" />
                                 </div>                          
                    </div>
        <div className='trabalho'>                        
                            <h4>Clone Net-Flix</h4>
                            <div>
                                <img className='imgpc' src={'https://github.com/dniemeryers/nt-clone/raw/main/img/pc.gif'} alt="" />
                            </div>
                            <NavLink to="https://dniemeryers.github.io/nt-clone/"><h3>&gt; Link do deploy &lt;</h3></NavLink>
                        <NavLink to="https://github.com/dniemeryers/nt-clone"><h3>&gt; Link do repositório &lt;</h3></NavLink>
                        <h4>Tecnologias Utilizadas</h4>
                            <div className='tecnologia'>
                            <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'} alt="React" />
                                <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg'} alt="Styled-Component" />
                                <img className='tec' src={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'} alt="React" />
                                  </div>                          
                    </div>
          

        </Container2>
   </> )
}