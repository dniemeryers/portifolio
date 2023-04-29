import {Experiencia} from './style'
import {Header} from '../../assets/components/header/header'
import { SocialIcon } from "react-social-icons"



export function Experiencias() {


    return(<>
<Header/>
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
            <SocialIcon className='ic' url="https://www.iecbrasil.org.br"
                fgColor='#BFBFBF'
                bgColor='transparent'
                target={"_blank"}/>          
        </div>
        </div>
    </div>
    
</Experiencia>

</>)
}