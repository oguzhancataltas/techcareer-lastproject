import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, ModalHeader } from "reactstrap";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { MOVIES_USER } from '../../constants/routes';

const User = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
      
    }).catch((error) => {
      alert("Kullanıcı Kayıtlı!!!");
    });
  }

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
      const { user } = response;
      Cookie.set('token', user.accessToken);
      navigate(MOVIES_USER);
    }).catch((error) => {
      alert("Kullanıcı Bulunamadı!!!");
    });
  }

  return (
    <div
      style={{
        width: "100%",
        height: "61.2vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        style={{
          width: "50%",
          
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 0",
        }}
        className="border border-secondary rounded-5"
      >
        <ModalHeader className="my-3">Giriş Yap</ModalHeader>
        <FormGroup style={{ width: "50%" }}>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </FormGroup>{" "}
        <FormGroup style={{ width: "50%" }}>
          <Label for="examplePassword" hidden>
            Şifre
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Button className="me-2 bg-primary" onClick={signIn}>Giriş Yap</Button>
          <Button className="bg-success" onClick={signUp}>Kayıt Ol</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default User;
