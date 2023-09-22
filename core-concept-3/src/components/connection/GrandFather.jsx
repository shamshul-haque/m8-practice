import React, { createContext, useState } from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import "./style.css";

export const DiamondContext = createContext();
// export const GoldContext = createContext();
export const MoneyContext = createContext();

const GrandFather = () => {
  const [money, setMoney] = useState(1000);
  return (
    <div className="grandpa">
      <h2>Grand Father</h2>
      <p>Net Money:{money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <DiamondContext.Provider value="diamond ring">
          <section className="flex">
            <Father />
            <Uncle />
          </section>
        </DiamondContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandFather;
