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
   
    box-shadow:0px 0px 15px #00d7ff;
    background-color: rgb(24,24,24);
    border-radius: 50%;
    margin:7px;
    width:250px;
}
.sobre{
    text-indent: 10%;
    text-align:justify;
    margin:10px;
}


`