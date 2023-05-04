import { Container, H1 } from "../educação/style"
import { Header } from "../../assets/components/header/header"
import Anhanguera from "../../assets/img/Anhanguera_Educacional_logo-e1589831484851.png"
import Betel from "../../assets/img/logo_betel_2023novo.fw_.png"


export function Educacao(){


    return(<>
    <Header/>
    <H1>Formação Acadêmica</H1>
    <Container>                       
        <div className='educacao'>                   
            <div className='escola'>                        
                <img src={Anhanguera} alt="" />
                <h3>Anhanguera Educacional</h3>                        
                <h4>CST- Análise e Desenvolvimento de Sistemas</h4>
                <p>Cursando 2º Período 2022 - 2024</p>
            </div>
            <div className='escola'>
                <img src={Betel} alt="" />
                <h3>Centro Educacional Betel</h3>
                <h4>Ensino médio - Téc. em Informática</h4>
                <p>Concluído 2004 - 2006</p>
            </div>
        </div>
            <h1>Cursos e BootCamp</h1>
            <div className="certificados2">
                <div className="curso" >
                    <img className="certlinha1" src={ScrumMaster} alt="" />
                    <h1>Scrum Master</h1>
                    <h2>Dio</h2>                                      
                </div>     
                <div className="curso" >
                    <img className="certlinha1" src={Scrum} alt="" />
                    <h1>Certificação Scrum</h1>
                    <h2>CertiProf</h2>                                      
                </div>                          
                <div className="curso" >
                    <img className="certlinha1" src={Reactype} alt="" />
                    <h1>React - TypeScript</h1>
                    <h2>Workover</h2>                          
                </div>  
                <div className="curso" >
                    <img className="certlinha1" src={JsWorkover} alt="" />
                    <h1>JavaScripit </h1>
                    <h2>Workover</h2>                         
                </div>        
                <div className="curso" >
                    <img className="certlinha1" src={TypeScript} alt="" />
                    <h1>TypeScript</h1>
                    <h2>Workover</h2>                          
                </div>  
               
                                                            
            </div>
            <div className="certificados2">
                <div className="curso" >
                        <img className="certlinha2" src={Code} alt="" />
                        <h1>Desafios em JS</h1>
                        <h2>Dio</h2>                          
                </div>
                <div className="curso" >
                        <img className="certlinha2" src={Campus} alt="" />
                        <h1>Campus Expert</h1>
                        <h2>Dio</h2>                                      
                </div>                          
                <div className="curso" >
                        <img className="certlinha2" src={Orbi} alt="" />
                        <h1>Orbi Games</h1>
                        <h2>Dio</h2>                          
                </div>  
                <div className="curso" >
                        <img className="certlinha2" src={Orange} alt="" />
                        <h1>Orange Tech</h1>
                        <h2>Dio</h2>                         
                </div>                                                          
            </div>                   
    </Container>
    </>)

}