import React from 'react';
import styled from "styled-components"; 

export const Container = styled.div`
position:fixed;
top:0;
background-color:white;
box-shadow: 0px 0px 10px 5px #454546 ;
z-index:1;
color:black;
justify-content:space-betweem;
width:100%;

.logo {
  display:flex;
  flex-direction: row;
  margin-left: 15px;
  margin-top: 10px;
}


.button {  
  margin-top:12px;
  padding:0;
  display:flex;
  width: 120px;
  height: 30px;    
 
  text-align:center;
  color:black;
  font-size:12px;
  background-color: #272727;
  box-shadow: 0px 0px 10px 5px #454546 ;

  &:hover {
    scale:1.2;
    transform: scale(1.01);
  }
  .curriculo{
    display:flex;
    margin:auto;
    font-weight:bold;
 }
 
}
}
h1{
  margin-left:15px;
  margin-top:11px;
  font-size:1.5rem;
  
}

.icons{
   display:flex;   
   justify-content:space-between;
   margin:0 40px 0px 0;     
}

.links-desktop{
  display:flex;
  margin:0px 0 0 20px;

  @media (max-width: 800px) {
    display:none;
    }
}

.navlink{
  color:black;
  font-weight:bold;
  margin:20px 20px 10px 0;
  font-size:1rem;
  &:hover{
    color:white;
  }
}

a{
   text-decoration:none; 
   color:white;
   @media (max-width: 800px) {
    margin-left:20px;
    }
}
.menu{
  margin-top: 8px;
     margin-right: 10px;
     width:0px;
    @media (min-width: 800px) {
      display:none;
      }    
}

.container{
    width:100%;
    height: 100%;
    display: flex;    
  }

#checkbox-menu{
  display:flex;
    padding:0;
    margin:auto;
    display:flex;
    justify-content:center;
    opacity: 0;
  }
  
  label{
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 30px;
  }
  
  label span{
    position: absolute;
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 30px;
    background: black;
    transition: 0.25s ease-in-out;
  }
  
  label span:nth-child(1){
    top: 0;
  }
  
  label span:nth-child(2){
    top: 8px;
  }
  
  label span:nth-child(3){
    top: 16px;
  }
  
  #checkbox-menu:checked + label span:nth-child(1){
    transform: rotate(-45deg);
    top: 8px;
  }
  
  #checkbox-menu:checked + label span:nth-child(2){
    opacity: 0;
  }
  
  #checkbox-menu:checked + label span:nth-child(3){
    transform: rotate(45deg);
    top:8px;
  }

.list{
    background-color: #5fd3f4;
    width:40%;
    display:flex;
    justify-content: flex-end;
   


}
.itemList{
    color:black;
}
`
export const Container2 = styled.div`
color:black;
heigth:500px;

.perfil{
  margin-top:100px;
  margin-bottom:20px;
}
h3{
  margin-top:10px;
  text-align:center;
}
a{
  color:black;
  text-decoration:none;
  font-weight:bold;
  font-size: 28px;
  display:flex;
  justify-content:left;
  padding:10px 0 10px 0;
  zIndex:100;
  border-top: 1px solid #4a4a4a;
 
}

.nav{
  height:450px;
  width:95%;  
  margin-top:-425px;
  
  display:flex;
  flex-direction:colunm;
  font-size:1rem;   
  padding:10px; 
  background-color: white;
  transition: transform 2s ease-in-out;    
}
.nav .child{
  padding-left: 30px;
  color: #454546;
  font-size: 22px;
}
img{
  display:flex;
  margin-top:200px;
  border-radius:50%;
  margin:auto;
}

`
export const Social = styled.div`
display:flex;
width:100%;
margin-left:-10px;
position:absolute;

justify-content:space-around;

.ic{
  border:none;
}

`

