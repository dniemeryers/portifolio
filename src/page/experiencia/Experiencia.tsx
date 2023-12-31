import React, { useState } from 'react';
import {TabContainer, Tab, Content} from './style'
import {Header} from '../../assets/components/header/header'
import {Experiencias1} from '../../assets/components/experiencia/Experiencia'
import { SocialIcon } from "react-social-icons"

import Iec from '../../assets/img/IEC.png'
import Owl from '../../assets/img/owlseg2.webp'



export function Experiencias() { 
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
      };

    return(<>
<Header/>
<Experiencias1/>


</>)
}