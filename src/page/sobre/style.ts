import styled from "styled-components"; 
export const H1 = styled.h1`
color:#BFBFBF;
margin-top:100px;
text-align:center;
`
export const Container = styled.div`


heigth:100%;
margin:20px;


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
    margin-top:30px;

    @media (min-width: 800px) {
    margin-top:50px;

    }
}
.emprego{
    
    display:flex;
    flex-direction:column;
    background-color:rgba(179,179,179,0.4);  
        box-shadow: 0px 2px 10px white;     
    
    @media (min-width: 800px) {
        display:flex;
        flex-direction:row;
           
        }
    
    
    
}
.info{
    text-align:justify;
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
        margin:10px;
        
       
        margin:auto;
        
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