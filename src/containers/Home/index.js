import React, {useState,useRef,} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom'




import People from '../../assents/people.svg';
import Arrow from '../../assents/arrow.svg';

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'


import {
    Container, 
    Image,
     ImputLabel, 
     Input,
   
     
} from "./styles";

function App() {


    const [ users,setUsers ] = useState([]);
    const history = useHistory()
    const inputName = useRef()
    const inputAge = useRef()

    
 async function addNewUser(){

    const {data} = await axios.post("http://localhost:3001/users",
     {name:inputName.current.value,
        age:inputAge.current.value});
        
      

    setUsers([ ... users,data]); 

    history.push('/usuarios');

   
  
} 

 


    return (<Container>
        <Image alt = "logo-imagem" src={People} />
        <ContainerItens>

            <H1>Ola!</H1>

            <ImputLabel>Nome</ImputLabel>
            <Input ref={inputName} placeholder="Nome" />

            <ImputLabel>Idade</ImputLabel>
            <Input ref={inputAge} placeholder="Idade" />

            <Button  onClick={addNewUser}>Cadastrar 
                <img alt="seta" src={Arrow}/> </Button>

           

       
       </ContainerItens>


    </Container>);

}

export default App;