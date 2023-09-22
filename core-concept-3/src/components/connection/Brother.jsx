import { useContext } from "react";
import { MoneyContext } from "./GrandFather";

const Brother = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Brother</h2>
      <p>{money}</p>
    </div>
  );
};

export default Brother;
