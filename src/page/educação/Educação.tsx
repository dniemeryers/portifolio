import { Container, H1 } from "../educação/style"
import { Header } from "../../assets/components/header/header"
import Anhanguera from "../../assets/img/Anhanguera_Educacional_logo-e1589831484851.png"
import Betel from "../../assets/img/logo_betel_2023novo.fw_.png"
import JsWorkover from '../../assets/img/Certificado JS Worked.jpeg'
import Scrum from '../../assets/img/certiprof scrum.jpeg'
import Orange from '../../assets/img/BootCamp Orange tech.jpeg'
import Type from '../../assets/img/type script.jpeg'
import DioCampus from '../../assets/img/dio campus expert.jpeg'
import Orbi from '../../assets/img/orbi.jpeg'
import ReacType from '../../assets/img/react type.jpeg'
import ScrumMaster from '../../assets/img/scrum Master.jpeg'
import CodeCamp from '../../assets/img/code camp.jpeg'



export function Educacao(){


    return(<>
    <Header/>
    <H1>Formação Acadêmica</H1>
    <Container>                       
        <div className='educacao'>                   
            <div className='escola'>                        
                <img src={Anhanguera} alt="" />
                <h3>Anhanguera Educacional</h3>                        
                <h4>CST- Análise e Dev. de Sistemas</h4>
                <p>Cursando 2º Período 2022 - 2024</p>
            </div>
            <div className='escola'>
                <img src={Betel} alt="" />
                <h3>Centro Educacional Betel</h3>
                <h4>Ensino médio - Téc. em Informática</h4>
                <p>Concluído 2004 - 2006</p>
            </div>
        </div>
        <h1>Cursos e Certificados</h1>
        <div className='certificados'>
            <div className="curso">          
                    <img className="certlinha1" src={Scrum} alt="" />               
                    <img className="certlinha1" src={Type} alt="" />               
                    <img className="certlinha1" src={Orange} alt="" />               
                    <img className="certlinha1" src={DioCampus} alt="" />               
                    <img className="certlinha1" src={ReacType} alt="" />                
            </div>
            <div className="curso">
                    <img className="certlinha2" src={ScrumMaster} alt="" />               
                    <img className="certlinha2" src={JsWorkover} alt="" />               
                    <img className="certlinha2" src={Orbi} alt="" />
                    <img className="certlinha2" src={CodeCamp} alt="" />       
            </div>        
        </div>
            
    </Container>
    </>)

}