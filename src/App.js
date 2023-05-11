import './App.css';
import React, { useEffect, useState } from 'react';
import { Div, Input, Radio, Label, Form, Title, Subtitle, TextArea, Submit } from './common/form/index';
import { registerUser } from './actions/user.action';
import { useDispatch, useSelector } from "react-redux";
function App() {

  const dispatch = useDispatch();
    const [registerForm, setRegisterForm] = useState({
        nome: '',
        telephone: '',
        frontend: '',
        backend: '',
        databaseExp:  '',
        camunda:'',
        health: '',
        comment: ''
    });

  useEffect(() => {

  }, [dispatch])

  function register(e) {
    console.log(registerForm)
    dispatch(registerUser(JSON.stringify(registerForm)))
}

    return (
      <Div>
      <Form onSubmit={(e) => register(e)}>
        <Title>Processo Seletivo</Title>
        <Subtitle>Dados Pessoais</Subtitle>
        <Input type="text" id="nome" name="nameContact" onChange={(e) => { setRegisterForm({...registerForm, nome: e.target.value})}} value={registerForm.name} required/>
        <Label> Nome:</Label>
        <br/>
        <Input type="telephone" id="whatsapp" name="contact" onChange={(e) => { setRegisterForm({...registerForm, telephone: e.target.value})}} value={registerForm.whatsapp} required/>
        <Label> WhatsApp:</Label>
        <Subtitle>Frontend</Subtitle>
        <Label>Quando falamos de front-end, meu nível de experiência é:</Label>
        <br/>
        <Radio type="radio" id="frontend1" name="frontend" value="4" onChange={(e) => { setRegisterForm({...registerForm, frontend: e.target.value})}} required/>
        <Label for="frontend1">Muito Experiente</Label>
        <Radio type="radio" id="frontend2" name="frontend" value="3" onChange={(e) => { setRegisterForm({...registerForm, frontend: e.target.value})}}/>
        <Label for="frontend2">Experiente</Label>
        <Radio type="radio" id="frontend3" name="frontend" value="3" onChange={(e) => { setRegisterForm({...registerForm, frontend: e.target.value})}}/>
        <Label for="frontend3">Alguma Experiente</Label>
        <Radio type="radio" id="frontend4" name="frontend" value="1" onChange={(e) => { setRegisterForm({...registerForm, frontend: e.target.value})}}/>
        <Label for="frontend4">Nenhuma Experiência</Label>
        <Subtitle>Backend</Subtitle>
        <Label>Quando falamos de back-end, meu nível de experiência é:</Label>
        <br/>
        <Radio type="radio" id="backend1" name="backend" value="4" onChange={(e) => { setRegisterForm({...registerForm, backend: e.target.value})}} required/>
        <Label for="backend1">Muito Experiente</Label>
        <Radio type="radio" id="backend2" name="backend" value="3" onChange={(e) => { setRegisterForm({...registerForm, backend: e.target.value})}}/>
        <Label for="backend2">Experiente</Label>
        <Radio type="radio" id="backend3" name="backend" value="3" onChange={(e) => { setRegisterForm({...registerForm, backend: e.target.value})}}/>
        <Label for="backend3">Alguma Experiente</Label>
        <Radio type="radio" id="backend4" name="backend" value="1" onChange={(e) => { setRegisterForm({...registerForm, backend: e.target.value})}}/>
        <Label for="backend4">Nenhuma Experiência</Label>
        <Subtitle>Banco de Dados</Subtitle>
        <Label>Quando falamos de banco de dados, meu nível de experiência é:</Label>
        <br/>
        <Radio type="radio" id="database1" name="database" value="4" onChange={(e) => { setRegisterForm({...registerForm, databaseExp:  e.target.value})}} required/>
        <Label for="database1">Muito Experiente</Label>
        <Radio type="radio" id="database2" name="database" value="3" onChange={(e) => { setRegisterForm({...registerForm, databaseExp:  e.target.value})}}/>
        <Label for="database2">Experiente</Label>
        <Radio type="radio" id="database3" name="database" value="3" onChange={(e) => { setRegisterForm({...registerForm, databaseExp:  e.target.value})}}/>
        <Label for="database3">Alguma Experiente</Label>
        <Radio type="radio" id="database4" name="database" value="1" onChange={(e) => { setRegisterForm({...registerForm, databaseExp:  e.target.value})}}/>
        <Label for="database4">Nenhuma Experiência</Label>
        <Subtitle>Outras Experiências</Subtitle>
        <Label>Possuo conhecimento ou experiência em:</Label>
        <br/>
        <Label> - Camunda</Label>
        <br/>
        <Radio type="radio" id="camunda1" name="camunda" value="1" onChange={(e) => { setRegisterForm({...registerForm, camunda: e.target.value})}} required/>
        <Label for="camunda1">Sim</Label>
        <Radio type="radio" id="camunda2" name="camunda" value="2" onChange={(e) => { setRegisterForm({...registerForm, camunda: e.target.value})}}/>
        <Label for="camunda2">Não</Label>
        <br/>
        <Label> - Mercado da saúde</Label>
        <br/>
        <Radio type="radio" id="health1" name="health" value="1" onChange={(e) => { setRegisterForm({...registerForm, health: e.target.value})}} required/>
        <Label for="health1">Sim</Label>
        <Radio type="radio" id="health2" name="health" value="2" onChange={(e) => { setRegisterForm({...registerForm, health: e.target.value})}} />
        <Label for="health2">Não</Label>
        <Subtitle>Comentários</Subtitle>
        <TextArea onChange={(e) => { setRegisterForm({...registerForm, comment: e.target.value})}} required></TextArea>
        <br/>
        <Submit value="Enviar"/>
      </Form>
      </Div>
    );
  }
export default App;
