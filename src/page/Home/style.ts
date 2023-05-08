import styled from "styled-components"; 


export const H1 = styled.h1`
color: #BFBFBF;
text-align:center;
padding-top:250px;
padding-bottom:-30px;

`

export const Social = styled.div`

    display:flex;
    flex-direction: column;
    position:fixed;
    top:40%;
    left:-10px;
    .social-icon{
        &:hover{
            color:#6d6d6d;
        }
    }
    
`


export const Container = styled.div`
color: #BFBFBF;
heigth:100%vh;
margin-top:70px;

.seta{
    width:100px;
    position:absolute;
    top:730px;
    right:0;
    @media (min-width: 800px) {
        top:500px;
    }
}
h1{
    
    font-size:2.8em;
    text-align:center;
    padding:0px;
    margin-top:30px;
}
h2{
    font-size:1.8em;
   
    color: #BFBFBF;
    text-align:center;
}
.bio{
    width:100%;
    display:flex;
    
.imgs{
   padding-top:130px;
   margin:auto;
   
}
.icons{
    margin:7px;
    display:flex;
    
}
p{
    margin:0px;
    margin-left:4px;
}
.perfil{
    margin:7px;
    border-radius:50%;
}
.sobre{
    text-indent: 10%;
    text-align:justify;
    margin:10px;
}


`
export const Sobre = styled.div`

margin-top:10px;
padding-bottom:50px;
margin:0px;

h1{
    margin-top:10px;
    color:white;
    text-align:center;
    @media (min-width: 800px) {
        font-size:25px;
    }
    
}
h3{
    color:#BFBFBF;
    margin-top:-18px;
    text-align:center;
    color:white;
    @media (min-width: 800px) {
        font-size:18px;
    }
    
}
.sobre{
    display:flex;
    margin-top:30px; 
      
    margin:auto;
    margin:35px; 
    @media (min-width: 800px) {
        display: flex;
        flex-direction:column;
        text-align:justify;
        padding:20px;
        margin:auto;       
       
    margin-top:50px;

    }
}
.emprego{
   
    display:flex;
    background-color:rgba(179,179,179,0.4);       
    box-shadow: 0px 0px 10px 5px #00d7ff;
    margin:auto;      
    flex-direction:column;
    
    @media (min-width: 800px) {
        display:flex;
        flex-direction:row;
        margin-left:118px;    
        margin-right:118px;
           
        }
    
    
    
}
.info{
    text-align:justify;
    width:310px;
    margin:30px;
    border-radius:10px;
    margin:auto;
    
    @media (min-width: 800px) {
        padding:20px;
        
    }
}
    .texto{        
        color: white; 
        text-align:justify;      
        
        @media (min-width: 800px) {
            
            m
            
        }   
}
img{
   
    display:flex;
    border-radius:50%;
    margin:auto;
    margin-top:20px;
    

    }
p{
    color:white;
    margin:0;
    text-indent:20%;
   margin:20px;
   font-size:20px;
   @media (min-width: 800px) {
    font-size:22px;
   }
}

`
export const Formacao = styled.div`

.container{
display:flex;
margin-top:100px;
flex-direction:column;
@media (min-width: 800px) {
    
}

}


.educacao{      
    
    display:flex;
    flex-direction:column;
    margin:0 35px 0 35px;
    background-color:rgba(179,179,179,0.4);
    box-shadow: 0px 0px 10px 5px #00d7ff;
        
    
    @media(min-width: 800px){
        width:1100px;
        display:flex;
        flex-direction:row;
        padding:20px;
        margin:auto;
        margin-top:10px;
        justify-content:space-around; 
        
        
    }
    
}
.escola{       
    margin:auto;
    height:170px;   
    padding:10px;
        
     
}
     
}
h1{
    font-size:26px;
    color: #BFBFBF;
    text-align:center;  
}
h2{  
    color: #BFBFBF;
    text-align:center;
    margin-top:-15px;
}
h3{
    font-size:16px;
    color:white;    
    
    margin-top:5px;
    @media(min-width: 800px){
        font-size:22px;
        margin-top:0;
    }
}
h4{
    font-size:16px;
    margin-top:-10px;
    color: #BFBFBF;
   
}
p{
    margin-top:-15px;
    
    color: #BFBFBF;
    font-weight:bold;
    
} 
.cert{
    text-align:center;
}
    img{
        width:70px;
        top:10px;
    }
.habilidade{    
    margin:auto;
    margin-top:40px;
    
    
}
.skills{
    background-color:rgba(179,179,179,0.4);
    box-shadow: 0px 0px 10px 5px #00d7ff;
    padding:20px;
    display:flex;
    margin:10px;    
    
    @media(min-width: 800px){
        width:1100px;
        justify-content:space-around;
    }
    
    
    
    
}
.skill{
    display:flex; 
    margin:5px;  
    width:40px;
    height:40px;
}
.curso{
   width:90%;
   padding-top:10px;
    display:flex;
    margin:35px;
    overflow-x: scroll;
    
    @media(min-width: 800px){
        padding-top:15px;
        flex-direction:row;
        width:100%;
        margin:40px;
    }

}


.certificados{
    display:flex;
    fledirection:column;
   
}

    .certlinha1{
        display:flex;
        flex-direction:column;
        margin:auto;       
        padding:5px;
        width:125px;
        box-shadow:0px 0px 6px 2px black;
        border-radius:8px;
        
        @media(max-width:800px){
            &:active{
            opacity:1;
            scale:2.9;
            
            position: absolute;
            top: 2350px;
            left: 0;
            right: 0;
            bottom: 0;     
        }
    }
        @media(min-width:800px){
            width:175px;
            opacity:0.5;
           
            &:hover{
                cursor:pointer;
                margin-top:-20px;
                opacity:0.9;
            }
            &:active{
                opacity:2;
                z-index:1;
                scale:3.5;
                position: absolute;
                top: 2500px;
                left: 0;
                right: 0;
                bottom: 0;        
    
            }
        }
    }

`

export const Projetos = styled.div`
margin:20px;
.trabalho{
    display:flex;
    flex-direction:column;
    padding:5px;
    margin:20px;
    margin-bottom:5px;
    color: #BFBFBF;
    text-align:center;
    border-radius:10px;
    
    background-color:rgba(179,179,179,0.4);  
    @media(min-width:800px){
        width:300px;
        height:450px;
        &:hover{
            opacity:0.5;
            background-image:url('https://cdn-icons-png.flaticon.com/512/65/65000.png')
        }
    } 
       
}
.imgcalc{
    height:160px;
}
.imgpc{
    height:200px;
}
.tec{
    margin-top:-10px;
    width:40px;
}

`
export const Experiencia = styled.div`
display:flex;
margin:auto;
flex-direction:column;
color: #BFBFBF;

margin:35px;
.social{
    padding-top:30px;
    display:flex;
    margin:auto;
    @media(min-width: 800px){
        margin-left:20%;
    }
}
h1{
    color:white;
    text-align:center;
}
h2{
    color:white;
    text-align:center;
    margin-bottom:-10px;
    @media(min-width: 800px){
        text-align:start;
    }
}
h3{
   
    margin-bottom:-10px;
}
h4{
    
   
    margin-bottom:-10px;
}
p{
    
    margin-bottom:-10px;
   
    padding-top:0;
}
.container{
    display:flex;
    flex-direction:column;
    padding-top:20px;
    background-color:rgba(179,179,179,0.4);  
    border-radius: 50px 0 50px 0;

    @media(min-width: 800px){
        display:flex;
        margin:auto;
        padding:20px;
        flex-direction:row;
        width:80%;
    }

}
.container1{
    display:flex;
    
    flex-direction:column;
    margin:auto;
    
   
   
}
.container2{
    display:flex;
    margin:20px;
    flex-direction:column;
    
   
   
   
    
   
}

img{
    
    margin:auto;
    border-radius:12px;
    @media(min-width: 800px){
        width:250px;
    }
    
}
`
