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
    
`


export const Container = styled.div`
color: #BFBFBF;
heigth:100%vh;
margin-top:150px;

.seta{
    width:40px;
    position:absolute;
    top:27rem;
    right:0;
    @media (min-width: 800px) {
        top:500px;
        width:60px;
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
   
    box-shadow:0px 0px 15px white;
    background-color:transparent;
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