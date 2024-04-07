/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { login } from "../apiFeatures.js";
import {useHistory} from 'react-router-dom';

export default function SignInform() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("login");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>sign in</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <Form>
          <FormHeader type={type} />
          <EntryForm type={type} onType={setType} />
        </Form>
      </Dialog>
    </div>
  );
}

function Form({ children }) {
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      {children}
    </div>
  );
}

function FormHeader({ type }) {
  return (
    <div className='mx-auto max-w-lg text-center'>
      <h1 className='text-2xl font-bold sm:text-3xl'>
        {type === "login" ? "Welcom Back!" : "Get Started Today!"}
      </h1>

      <p className='mt-4 text-gray-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
        eaque error neque ipsa culpa autem, at itaque nostrum!
      </p>
    </div>
  );
}

function EntryForm({ type, onType }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

    async function signin(e) {
      e.preventDefault();
      const res = await login(email, password);
      if(res.status === 'success') {
      }
    };

  return (
    <>
      <form action='#' className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
        {type === "signup" && (
          <FormInput
          name='Name'
          type='text'
          icon='🧑'
          value={name}
          onValue={setName}
          />
          )}
        <FormInput
          name='Email'
          type='email'
          icon='📧'
          value={email}
          onValue={setEmail}
        />
        <FormInput
          name='Password'
          type='password'
          icon='👁️'
          value={password}
          onValue={setPassword}
          />

        {type === "signup" && (
          <FormInput
          name='Password Confirm'
          type='password'
          icon='👁️'
          value={passwordConfirm}
          onValue={setPasswordConfirm}
          />
          )}

        <FormFooter type={type} onType={onType} onLogin={signin} />
      </form>
    </>
  );
}

function FormInput({ name, type, icon, value, onValue }) {
  return (
    <div>
      <label htmlFor={type} className='sr-only capitalize'>
        {name}
      </label>

      <div className='relative'>
        <input
          required
          value={value}
          onChange={(e) => onValue(e.target.value)}
          type={type}
          className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
          placeholder={`Enter ${name}`}
        />

        <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
          {icon}
        </span>
      </div>
    </div>
  );
}

function FormFooter({ type, onType, onLogin }) {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-sm text-gray-500'>
        {type === "login" ? "No account?" : "Already have an account?"}
        <button
          className='underline'
          value={type}
          onClick={() =>
            onType((curr) => (curr === "login" ? "signup" : "login"))
          }>
          {type === "signup" ? "log in" : "sign up"}
        </button>
      </p>

      <button
        onClick={onLogin}
        type='submit'
        className='inline-block rounded-lg capitalize bg-blue-500 px-5 py-3 text-sm font-medium text-white'>
        {type === "login" ? "Log in" : "sign up"}
      </button>
    </div>
  );
}
