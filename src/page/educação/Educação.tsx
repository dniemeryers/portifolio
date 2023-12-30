import React, { useState } from 'react';
import { Container, TabContainer, Tab, Content} from "../educação/style"
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
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
      };



    return(<>
    <Header/>
    <Container>                  
        <h1>Formação Acadêmica</h1>     
        <div className='educacao'>                   
            <div className='escola'>                        
                <img src={Anhanguera} alt="" />
                <h3>Anhanguera</h3>                        
                <h4>CST- Análise e Dev. de Sistemas</h4>
                <p>Cursando 4º Período 2022 - 2024</p>
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
        <TabContainer>
        <Tab className="icnv" active={activeTab === 0} onClick={() => handleTabClick(0)}>
          SCRUM
        </Tab>
        <Tab className="icnv" active={activeTab === 1} onClick={() => handleTabClick(1)}>
          TypeScript
        </Tab>
        <Tab className="icnv" active={activeTab === 2} onClick={() => handleTabClick(2)}>
          BootCamp Inter
        </Tab>
        <Tab className="icnv" active={activeTab === 3} onClick={() => handleTabClick(3)}>
          Dio Campus Expet_
        </Tab>
        <Tab className="icnv" active={activeTab === 4} onClick={() => handleTabClick(4)}>
          React com TypeScript
        </Tab>
        <Tab className="icnv" active={activeTab === 5} onClick={() => handleTabClick(5)}>
          Scrum Master
        </Tab>
        <Tab className="icnv" active={activeTab === 6} onClick={() => handleTabClick(6)}>
          JavaScript
        </Tab>
        <Tab className="icnv" active={activeTab === 7} onClick={() => handleTabClick(7)}>
          BootCamp Órbi
        </Tab>
        <Tab className="icnv" active={activeTab === 8} onClick={() => handleTabClick(8)}>
          CodeCamp
        </Tab>
    </TabContainer>
    <Content active={activeTab === 0}>
    <img className="certlinha" src={Scrum} alt="" />              
    
    </Content>
    <Content active={activeTab === 1}>
    <img className="certlinha" src={Type} alt="" /> 
    
    </Content>
    <Content active={activeTab === 2}>
    <img className="certlinha" src={Orange} alt="" />
    
    </Content>
    <Content active={activeTab === 3}>
    <img className="certlinha" src={DioCampus} alt="" /> 
    
    </Content>
    <Content active={activeTab === 4}>
    <img className="certlinha" src={ReacType} alt="" /> 
    
    </Content>
    <Content active={activeTab === 5}>
    <img className="certlinha" src={ScrumMaster} alt="" />    
    
    </Content>
    <Content active={activeTab === 6}>
    <img className="certlinha" src={JsWorkover} alt="" />  
    
    </Content>
    <Content active={activeTab === 7}>
    <img className="certlinha" src={Orbi} alt="" />
    
    </Content>
    <Content active={activeTab === 8}>
    <img className="certlinha" src={CodeCamp} alt="" />    
    
    </Content>
                
        </div>
            
    </Container>
    </>)

}