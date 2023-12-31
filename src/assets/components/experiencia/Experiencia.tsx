import React, { useState } from 'react';
import {Experiencia, TabContainer, Tab, Content} from './style'
import { SocialIcon } from "react-social-icons"

import Iec from '../../img/IEC.png'
import Owl from '../../img/owlseg2.webp'



export function Experiencias1() { 
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
      };

    return(<>
<Experiencia>
    <h1>Experiências</h1>   
    <div className='boxshadow'> 
    <TabContainer>
        <Tab className="icnv" active={activeTab === 0} onClick={() => handleTabClick(0)}>
          IEC BRASIL
        </Tab>
        <Tab className="icnv" active={activeTab === 1} onClick={() => handleTabClick(1)}>
          OWLSEG TREINAMENTOS
        </Tab>
    </TabContainer>

    <Content active={activeTab === 0}>
    <div className='container'>        
        <div className='container1'>
            <img src={Iec} width="190px;" alt="" />
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
            <SocialIcon className='ic' url="https://www.iecbrasil.org.br"
                fgColor='#BFBFBF'
                bgColor='transparent'
                target={"_blank"}/>          
        </div>
        </div>
    </div>
    </Content>
    
    <Content active={activeTab === 1}>
    <div className='container'>        
        <div className='container1'>
            <img src={Owl} width="190px;" alt="" />
        </div>
        <div className='container2'>
            <h2>Desenvolvedor e Gerenciador</h2>
            <h3>OwlSeg Treinamentos</h3>
            <h4>Outubro de 2023 - o momento</h4>
            <p>- Criação do site, aplicando novas tecnologias de desenvolvimento e Atualizando conforme demanda do cliente.</p>
            <p>- React + TypeScript</p>
            <p>- Responsividade</p>
            <p>- TypeScript · Styled-components · react-router-dom · HTML · CSS · React.js · JavaScript</p>
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
            <SocialIcon className='ic' url="https://www.iecbrasil.org.br"
                fgColor='#BFBFBF'
                bgColor='transparent'
                target={"_blank"}/>          
        </div>
        </div>
    </div>
    </Content>
    </div>
</Experiencia>

</>)
}