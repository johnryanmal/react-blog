import axios from "axios";
//import { useState } from "react";

export function Signup() {
  //let errors, setErrors = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    axios.post("http://localhost:3000/users.json", formProps)
    .then((response) => {
      console.log(response, response.data)
    })
    .catch((error) => {
      console.log(error.response.data.errors)
    })
  }

  // function listener(msg) {
  //   return () => {
  //     console.log(msg)
  //   }
  // }

  return (
    <div>
      <p>Signup</p>
      <form onSubmit={handleSubmit}>
        <p>Name: <input type="text" name="name" /></p>
        <p>Email: <input type="text" name="email" /></p>
        <p>Password: <input type="password" name="password" /></p>
        <p>Password Confirmation:<input type="password" name="password_confirmation" /></p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
