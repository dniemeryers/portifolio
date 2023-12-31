import React, { useState } from 'react';
import { Container, TabContainer, Tab, Content} from "../educação/style"
import { Header } from "../../assets/components/header/header"
import {Educacao1} from "../../assets/components/educação/Educação"
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
    <Educacao1/>
   
    </>)

}