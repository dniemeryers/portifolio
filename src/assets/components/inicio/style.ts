import styled from "styled-components"; 





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
    @media (min-width: 800px) {
        margin-left:20px;

    }
    
`


export const Container = styled.div`
color: #BFBFBF;
heigth:100%vh;
margin-top:150px;
margin-bottom:-100px;

@media (min-width: 800px) {
    margin-botton:50px;
}

.button {  
    display:flex;
    width: 200px;
    height: 50px;    
    margin:auto;
    margin-top:80px;
    text-align:center;
    color: white;
    background-color:rgba(179,179,179,0.4);  
    font-size:18px;
    box-shadow: 0px 0px 10px 5px #00d7ff;
    
    @media (min-width: 800px) {
        display:none;
    }
  }
img{   
    margin:auto;
}

  a{
    text-decoration:none; 
    text-align:center;
    color:white;
}
.curriculo{
   margin:auto;
   font-weight:bold;
}

.seta{
    width:60px;
    position:absolute;    
    right:0;
    top:500px;
    @media (max-width: 500px) {
        display:none;
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
}
    
.imgs{
   padding-top:10px;
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
    box-shadow: 0px 0px 10px 5px #00d7ff;
    background-color: rgb(24,24,24);
    margin:7px;
    width:250px;
}

.sobre{
    text-indent: 10%;
    text-align:justify;
    margin:10px;
}


`