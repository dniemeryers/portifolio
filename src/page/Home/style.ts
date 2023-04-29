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


heigth:100%;
margin:20px;
margin-top:10px;
border-radius:20px 0 20px 0 ;

padding-bottom:50px;

h1{
    margin-top:10px;
    color:white;
    text-align:center;
    @media (min-width: 800px) {
        font-size:30px;
    }
    
}
h3{
    color:#BFBFBF;
    margin-top:-18px;
    text-align:center;
    color:white;
    
}
.sobre{
    display:flex;
    margin-top:30px; 
    margin:40px;   
    margin:auto;
    @media (min-width: 800px) {
    margin-top:50px;

    }
}
.emprego{
        
    display:flex;
    
    margin:auto;
   
    flex-direction:column;
    
    @media (min-width: 800px) {
        display:flex;
        flex-direction:row;
           
        }
    
    
    
}
.info{
    text-align:justify;
    width:350px;
    margin:10px;
    border-radius:10px;
    margin:auto;
    @media (min-width: 800px) {
        width:50%;
    }
}
    .texto{
        
        color: white; 
        text-align:justify;
        margin:20px;
        background-color:rgba(179,179,179,0.4);       
        border-radius:30px 0 30px 0 ;
        
        
        @media (min-width: 800px) {
            width:50%;
            margin-left:-100px;
            margin-top:-10px;
            
        }
        


   
}
img{
    display:flex;
    border-radius:50%;
    margin:auto;
    

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
margin:10px;
margin-top:100px;
flex-direction:column;
@media (min-width: 800px) {
    flex-direction:row;
}
}


.educacao{      
    display:flex;
    flex-direction:column;
    justify-content:space-around;     
    
    @media(min-width: 800px){
        margin-top:10px;
        justify-content:space-around; 
        
        
    }
    
}
.escola{       
    padding:20px;    
    height:100px;   
    width:250px;
    background-color:rgba(179,179,179,0.4);
    border-radius: 25px 0 25px 0;
    margin:5px;    
}
.cont{
    display:flex;
    margin:auto;
    flex-direction:column;
     
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
    text-align:end;
    margin-left:0px;
    margin-top:-30px;
}
h4{
    font-size:16px;
    margin-top:-10px;
    color: #BFBFBF;
    text-align:end;
}
p{
    margin-top:-15px;
    padding-left:5px;
    color: #BFBFBF;
    font-weight:bold;
    text-align:end;
} 
.cert{
    text-align:center;
}
    img{
        width:60px;
        top:10px;
    }
.habilidade{    
   margin:auto;
    margin-top:10px;
    
}
.skills{
    display:flex;
    flex-direction:row; 
    justify-content:space-around;
    
    
    
}
.skill{
    display:flex;   
    width:60px;
    height:60px;
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
        &:hover{
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
                opacity:1;
                scale:5.0;
                position: absolute;
                top: 1300px;
                left: 0;
                right: 0;
                bottom: 0;        
    
            }
        }
    }

`

export const Projetos = styled.div`
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
