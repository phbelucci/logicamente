import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from './styles'

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit( event: any ) {
    event.preventDefault();
    const stage = 1;
    if (handleLogin(email, password)){
      console.log(`Fazendo login do usuário ${email} na fase ${stage}`);
      return history.push({
        pathname: '/home',
        search: `?stage=${stage}`
      });
    }
    return console.log('Erro ao logar')
  }

  function handleLogin(email: string, password: string){
    if (email === 'phbelucci@gmail.com' && password === '1') return true;
    return false;
  }

  return (
    <Container>
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    </Container>
    )
}

export default Login;