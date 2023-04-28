import {Container} from './style'
import {Header} from '../../assets/components/header/header'



export function Certificado() {


    return(<>
<Header/>
<Container>      
<div className='experiencia'>
<h2>Experiência</h2>
<div className='emprego'>
    <div className='trabalho'>
        <h3>Ortobom</h3>
        <h4>Bombeiro Civil</h4>

    </div>
    <div className='trabalho'>
        <h3>IEC-Brasil</h3>
        <h4>Dev Front-End</h4>

    </div>
</div>
</div>
</Container>
</>)
}