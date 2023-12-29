import{Header} from '../../assets/components/header/header'
import Foto from '../../assets/img/perfilsobre.png'
import {Container} from './style'




export function Sobre() {


    return(<>
<Header/>
<Container>      
<h1 className='sobremim'>SOBRE MIM</h1>
<p className='nome'>Eu sou Diego Niemeyer</p>
<div className='emprego'>
    
    <div className='info'>
       <img src={Foto} width='200px' alt="" />
       <div className='decoracao1'></div>
       <div className='decoracao2'></div>
       <div className='decoracao3'></div>
     
    </div>
    <div className='texto'>
        <p>Sou técnico em informática e estou focado no estudo de análise e desenvolvimento de sistemas, buscando aprimorar minhas habilidades. Atualmente, estou me especializando no desenvolvimento front-end. Tenho como meta colaborar com empresas, utilizando tecnologias inovadoras e metodologias ágeis para ajudá-las a atingir seus objetivos.

        Comprometo-me a oferecer soluções personalizadas e de alta qualidade, utilizando boas práticas de desenvolvimento. Acredito na importância da transparência, comunicação e colaboração para o sucesso de qualquer projeto. Asseguro uma comunicação clara e efetiva, mantendo um ambiente propício à colaboração e produtividade. Estou entusiasmado para aplicar minha expertise e contribuir para o sucesso dos projetos em que estiver envolvido.</p>
    </div>
</div>

</Container>
</>)
}