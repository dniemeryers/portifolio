import {Habilidade} from './style';

import {Inicio} from '../../assets/components/inicio/inicio'
import {Experiencias} from '../../page/experiencia/Experiencia'
import {Educacao} from '../../page/educação/Educação'
import {Sobre} from '../sobre/Sobre'


export function Home() {
    
    
return( <>        
            <Inicio/>
            <Sobre/>  
            <Experiencias/> 
            <Educacao/>     
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
        </>)


};
 
