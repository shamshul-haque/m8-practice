import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Website {website}</p>
    </div>
  );
};

export default UserDetails;
