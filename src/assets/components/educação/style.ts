import styled from "styled-components"; 


export interface TabProps {
    active: boolean;
  }
  
  export interface ContentProps {
      active: boolean;
    } 


export const Container = styled.div`

padding-bottom:40px;
display:flex;
flex-direction:column;
margin:auto;
background-color:rgba(179,179,179,0.1); 

@media(min-width:1024px){
    
}


.educacao{      
    display:flex;
    flex-direction:row;
    width:95%;
    
    margin:auto;
    
    box-shadow: 0px 0px 10px 5px #ff0000;
        
    @media(min-width: 800px){
        width:790px;
        display:flex;
        flex-direction:row;
        padding:20px;
        margin:auto;
        margin-top:10px;
        justify-content:space-around;           
    }

    @media(min-width:1024px){
        width:720px;
    }
    
}
.escola{       
    margin:auto;
    height:170px;   
    padding:10px;
        
     
}
h1{
    margin-top:80px;
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
    display:flex;
    margin:auto;
    width:70px;
    top:10px;
}

.certificados{
    
   
    margin:0 15px 0 0px;   
    display:flex;
    flex-direction:row;

    @media(min-width:800px){       
        margin-top: 35px;
        width:100%;
    }

    @media(min-width:1024px){
        width:100%;
    }
}
.certificados2{
    display:flex;
    flex-direction:column;
    @media(min-width:800px){
        flex-direction:row; 
        justify-content:space-around;
    }
}
.curso{
    display:flex;
    flex-direction:column;

    @media(min-width:800px){
        width:1100px;
        flex-direction:row; 
        justify-content:space-around;
        
    }

    @media(min-width:1024px){
        width:900px;
    }
    
       
                  
    
}
}
.certlinha1{
    display:flex;      
    margin:auto;
    margin-top:20px;
    width:300px;
    box-shadow:0px 0px 10px 5px black;
   
    @media(max-width:800px){        
    &:hover{
        scale:1.9;
    }
    } 

    @media(min-width:800px){
        
        &:hover{
            cursor:pointer;
        }
        &:active{
            scale:3.0;
            position: absolute;
            top: 550px;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    @media(min-width:1024px){
        width:150px;
    }
}
    
.certlinha{
    display:flex;
    margin:auto;
    margin-top:20px;
    width:250px;
    box-shadow:0px 0px 10px 5px black;    
    
    @media(min-width:1024px){
        
        margin:auto;
        width:600px;
    }
}

`

export const TabContainer = styled.div`
     
   
    display: flex;
    flex-direction:column;
    width:100%;
    
    
   @media (min-width: 800px) {
        width:30%;
   }
    
  
    .icnv{
     
     width:100%;   
     margin:6px 15px 0 0 ;
     
     
      
    }
  `;
  
  export const Tab = styled.div<TabProps>` // Use o tipo TabProps aqui
   
    flex: 1;
    
    font-size:12px;
    font-weight:bolder;
    text-align:center;

    @media (min-width: 800px) {
        font-size:22px;
    }
    
   border-radius: ${(props) =>(props.active ? '0 30px 30px 0': 'none')};
    
    box-shadow: ${(props) => (props.active ?'0px 0px 10px 5px #ff0000':'none')};
   
   
    padding: 5px;
    
    background-color: ${(props) => (props.active ?  ' #3c3c3c':'none')};
    color:${(props) => (props.active ? ' #FF0000' : 'white')};
    cursor: pointer;
  `;
  export const Content = styled.div<ContentProps>`
 display:flex;
 flex-direction:colunm;
 margin:0;
  
 height:280px;
  
 width:1000px;

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