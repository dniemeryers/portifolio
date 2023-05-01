import styled from "styled-components"; 


export const H1 = styled.h1`
color: #BFBFBF;
text-align:center;
margin-top:100px;
`
export const Container = styled.div`
display:flex;
flex-direction:column;
margin:auto;
margin-top:-1px;

.educacao{   
   
    display:flex;
    justify-content:space-around;
    flex-direction:column;   
    @media(min-width: 800px){
        margin-top:10px;
        flex-direction:row;
    }
    
}
.escola{       
    padding:20px;    
    height:150px;   
    background-color:rgba(179,179,179,0.4);
    border-radius:10px;
    margin:5px;    
    &:hover{
       

    }
    
}
img{
    width:60px;
    top:10px;
    
}
h1{
    font-size:26px;
    color: #BFBFBF;
    text-align:center;  
}
h2{  
    color: #BFBFBF;
    text-align:center;
    margin-top:-15px;
}
h3{
    font-size:24px;
    color:white;
    text-align:end;
    margin-left:60px;
    margin-top:-30px;
}
h4{
    font-size:17px;
    margin-top:-10px;
    color: #BFBFBF;
    text-align:end;
}
p{
    margin-top:-15px;
    padding-left:5px;
    color: #BFBFBF;
    font-weight:bold;
    text-align:end;
}  
}
.certificados{
    display:flex;
    flex-direction:column;
    @media(min-width:800px){
        flex-direction:row; 
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
    padding:20px;
    color: black;
    height:200px;   
    background-color:rgba(179,179,179,0.4);
    border-radius:10px;
    margin:10px;
    
    @media(max-width:800px){
    &:hover{
       
                  
    }
}
}
.certlinha1{
    display:flex;
    margin:auto;
    width:200px;
    box-shadow:0px 0px 6px 2px black;
    border-radius:8px;
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
            top: 450px;
            left: 0;
            right: 0;
            bottom: 0;        

        }
    }
}
.certlinha2{
    display:flex;
    margin:auto;
    width:200px;
    box-shadow:0px 0px 6px 2px black;
    border-radius:8px;
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
            top: 650px;
            left: 0;
            right: 0;
            bottom: 0;        

        }
    }
}

`