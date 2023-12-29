import styled from "styled-components"; 




export const Container = styled.div`

background-color:rgba(179,179,179,0.1);   

padding-top:50px;
padding-bottom:50px;
height:750px;
width:100%;

@media (min-width: 800px) {
    height:530px;
}

h1{
    margin-top:50px;
    color:white;
    text-align:center;
    @media (min-width: 800px) {
        font-size:25px;
    }
    
}


.sobremim{
    font-size:60px;
    color: rgba(179,179,179,0.1);
}

.nome{
    color: rgb(255,0,0);
    text-align:center;
    margin-top:-85px;
    font-size:22px;
    font-weight:bold;
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
.decoracao1{
    width:215px;
    height:215px;
    background-color:white;
    border-radius:50%;
    margin:auto;
    margin-top:-220px;
    margin-left:35px;
    background-color:rgba(255,0,0,0.6);
}
.decoracao2{
    width:215px;
    height:215px;
    background-color:white;
    border-radius:50%;
    margin:auto;
    margin-top:-220px;
    margin-left:20px;
    background-color:rgba(255,0,0,0.4);
}
.decoracao3{
    width:215px;
    height:215px;
    background-color:white;
    border-radius:50%;
    margin:auto;
    margin-top:-220px;
    margin-left:5px;
    background-color:rgba(255,0,0,0.2);
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
        text-align:center;     
        margin: 20px 30px 0 30px; 
        font-size:18px;
        
        @media (min-width: 800px) {
            text-align:justify; 
            font-size:22px;
            
        }   
}
img{
   
    display:flex;
    border-radius:50%;
    margin:auto;
    margin-top:20px;
    
    
    

    }


`