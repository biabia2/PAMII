import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';

const TelaLogin = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const EmailInput = styled.TextInput`
  width: 80%;
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;
const PasswordInput = styled.TextInput`
  width: 80%;
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;
const LoginButton = styled.Button;
function TelaLogin() {
  return (
    <LoginScreen>
      <EmailInput placeholder="Email" />
      <PasswordInput placeholder="Senha" secureTextEntry={true} />
      <LoginButton title="Entrar" onPress={() => { } } />
    </LoginScreen>
  );
}
export default TelaLogin;

