import styled from "styled-components"; 
export const H1 = styled.h1`
color:#BFBFBF;
margin-top:100px;
text-align:center;
`
export const Container = styled.div`


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
    box-shadow: 0px 0px 20px #00d7ff;
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