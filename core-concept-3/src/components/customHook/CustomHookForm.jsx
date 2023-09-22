import useInputState from "../hooks/useInputState";

const CustomHookForm = () => {
  //   const [name, handleNameChange] = useInputState("sojoni");
  const emailState = useInputState("sojoni@gmail.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    console.log(emailState.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {/* <input
          onChange={handleNameChange}
          type="text"
          name="name"
          value={name}
        /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default CustomHookForm;
