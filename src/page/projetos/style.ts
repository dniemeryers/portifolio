import styled from "styled-components"; 

export const H1 = styled.h1`
color: #BFBFBF;
text-align:center;
`

export const Container1 = styled.div`
display:flex;
flex-direction:column;
margin:20px;
@media(min-width:800px){
    flex-direction:row;
    justify-content:space-around;
}  

h2{
    margin-top:-1px;
    padding-top:20px;
    color: #BFBFBF;
    text-align:center;
}

.trabalho{
    display:flex;
    flex-direction:column;
    padding:5px;
    margin:5px;
    margin-bottom:5px;
    color: #BFBFBF;
    text-align:center;
    border-radius:10px;
    background-color:rgba(179,179,179,0.4);  
    @media(min-width:800px){
        width:300px;
        height:450px;
    } 
       
}
.imgcalc{
    height:160px;
}
.imgpc{
    height:200px;
}
h3{
    margin-top:10px;
    margin-bottom:5px;
    text-align:start;
}
h4{
    margin-top:10px;
}
.tec{
    margin-top:-10px;
    width:40px;
}

`
export const Container2 = styled.div`
display:flex;
flex-direction:column;
margin:20px;
@media(min-width:800px){
    flex-direction:row;
    justify-content:space-around;
}  

h2{
    margin-top:-1px;
    padding-top:20px;
    color: #BFBFBF;
    text-align:center;
}

.trabalho{
    display:flex;
    flex-direction:column;
    padding:5px;
    margin-bottom:20px;
    color: #BFBFBF;
    text-align:center;
    border-radius:10px;
    background-color:rgba(179,179,179,0.4);  
    @media(min-width:800px){
        width:300px;
        height:450px;
    } 
       
}
.imgcalc{
    height:160px;
}
.imgpc{
    height:200px;
    width:280px;
}
h3{
    margin-top:10px;
    margin-bottom:5px;
    text-align:start;
}
h4{
    margin-top:10px;
}
.tec{
    margin-top:-10px;
    width:40px;
}

`