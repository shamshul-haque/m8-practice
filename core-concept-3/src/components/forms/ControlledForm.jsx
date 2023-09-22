import { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("Sujat");
  const [email, setEmail] = useState("sujat@gmail.com");
  const [password, setPassword] = useState("abc");
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password Should be greater than 6 character");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          value={name}
        />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          value={email}
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          value={password}
          required
        />
        {error && <p>{error}</p>}
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ControlledForm;
