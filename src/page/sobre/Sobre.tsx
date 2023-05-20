import{Header} from '../../assets/components/header/header'
import Foto from '../../assets/img/perfil-diego.png'
import {Container,H1} from './style'




export function Sobre() {


    return(<>
<Header/>
<H1>Sobre</H1>
<Container>      
<div className='sobre'>

<div className='emprego'>
    <div className='info'>
       <img src={Foto} width='200px' alt="" />
       <h1>Diego Niemeyer</h1>
       <h3>Desenvolvedor Front-End</h3>

    </div>
    <div className='texto'>
        <p>Olá meu nome é Diego Niemeyer e estou estudando desenvolvimento front-end,<strong> minha meta é ajudar empresas a alcançar seus objetivos através do desenvolvimento tecnológico, fornecendo soluções personalizadas e de alta qualidade para seus problemas.</strong></p>
        <p>Por meio do uso de tecnologias inovadoras, metodologias ágeis e boas práticas de desenvolvimento, garanto que meu trabalho será de alta qualidade. Além disso, acredito que a transparência, comunicação e a colaboração são fundamentais para o sucesso de qualquer projeto, mantendo sempre uma comunicação clara e efetiva com todos no processo de desenvolvimento.</p>
    </div>
</div>
</div>
</Container>
</>)
}