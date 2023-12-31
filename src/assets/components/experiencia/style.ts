import styled from "styled-components"; 

export const Experiencia = styled.div`
display:flex;
flex-direction:column;
color: #BFBFBF;
padding-bottom:20px;
margin-bottom: 70px;

.boxshadow{
    box-shadow: 0px 0px 10px 5px #FF0000;
    margin:auto;
    padding:0;
    height:610px;
    width:90%;
    
    @media(min-width: 800px){
       width:70%;
       height:440px;
    }
}


.social{
    padding-top:30px;
    display:flex;
    margin:auto;
    @media(min-width: 800px){
        margin-left:20%;
    }
}
h1{
    margin-top:70px;
    text-align:center;
}
h2{
    color:white;
    text-align:center;
    margin-bottom:-10px;
    font-size:20px;
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
   
   
    

    @media(min-width: 800px){   
        margin-top:20px;   
        width:790px;  
        display:flex;
        margin:auto;
        padding:20px;               
        flex-direction:row;
       
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
export interface TabProps {
    active: boolean;
  }
  
  export interface ContentProps {
      active: boolean;
    }
  
    export const H1 = styled.div`
      
    display:flex;
    flex-direction:row;
    padding-top:30px;
   
    margin:auto;
    margin:20px; 
  
    @media (min-width: 800px) {
      width:60%;
      margin:auto;
  
    }
    
    h1{
      display:flex;
      margin:auto;
      font-size:18px;
      font-family:  'Dela Gothic One', cursive;
      text-align:;
      margin-left:10%;
    }
    .imgCurso{
    display:flex;
    margin:auto;
    }
  
      
  `
  export const TabContainer = styled.div`
     
   
    display: flex;
    width:100%;
    
    
   @media (min-width: 800px) {
        width:100%;
   }
    
  
    .icnv{
     
      
    }
  `;
  
  export const Tab = styled.div<TabProps>` // Use o tipo TabProps aqui
   
    flex: 1;
    
    font-size:12px;
    font-weight:bolder;
    text-align:center;
    
   
    
    border: ${(props) => (props.active ? 'none':'1px solid white' )};
   
   
    padding: 10px;
    padding-bottom:12px;
    background-color: ${(props) => (props.active ? 'rgba(179,179,179,0.1)' : ' #FF0000')};
    color:${(props) => (props.active ? ' #FF0000' : 'white')};
    cursor: pointer;
  `;
  export const Content = styled.div<ContentProps>`
 display:flex;
 flex-direction:colunm;
 margin:0;
  
 height:573px;
  
 background-color:rgba(179,179,179,0.1);

 @media (min-width: 800px) {
  width:100%;
  height:410px;
 }
 
  display: ${(props) => (props.active ? 'block' : 'none')};

  .conteudo{
    display:flex;
    flex-direction:row;
    margin:auto;
  }

  .curso{
    display:flex;
    width:70%;
    flex-direction:row;
    margin: auto;
    padding:10px;
    justify-content:space-around;
  }
  img{
    margin:0;
  }
  
  .text_curso_desktop{
    font-size:20px;
    margin-right:20px;
    text-align:start;

    @media (max-width: 800px) {
      display:none;
    }
    
  }

  .text_curso_mobile{

    font-size:20px;
    margin-right:20px;
    text-align:center;
    
    @media (min-width: 800px) {
      display:none;
    }
    
  }
  
  h1{
    font-family:  'Dela Gothic One', cursive;
    text-align:center;
    margin-bottom:10px;
    

  }
 
  .carga_horaria{
    font-size:14px;
    text-align:start;
    font-weight:bold;
  }
`;