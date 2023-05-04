import styled from "styled-components"; 

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
    margin-top:70px;
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