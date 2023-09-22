import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./GrandFather";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin />
        <Cousin />
      </section>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add 1000</button>
    </div>
  );
};

export default Uncle;
