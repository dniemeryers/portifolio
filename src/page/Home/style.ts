import styled from "styled-components"; 




export const Habilidade = styled.div`
margin:35px;

h1{
    font-size:32px;
    color: #BFBFBF;
    text-align:center;  
    margin-bottom:25px;
}

    img{
        width:70px;
        
        
       
    }
      

.skills{
    
    
    padding:20px 0 20px 0;
    display:flex;   
    justify-content:space-around;
    margin:auto;
       
    
    @media(min-width: 800px){
        width:850px;
        justify-content:space-evenly;
    }
}

.skill{    
    display:flex;    
    width:40px;
    height:40px;
    @media(min-width: 800px){
    width:60px;
    height:60px;

    }
}
`
