import { useContext } from "react";
import { DiamondContext } from "./GrandFather";

const NextGeneration = () => {
  const gift = useContext(DiamondContext);
  return (
    <div>
      <h2>Next Generation</h2>
      <p>Got {gift}</p>
    </div>
  );
};

export default NextGeneration;
