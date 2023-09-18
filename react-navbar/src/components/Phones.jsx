import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch way to load
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    // axios way to load
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const fakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(fakeData);
        console.log(fakeData);
      });
  }, []);
  return (
    <div>
      <h1>Phones: {phones.length}</h1>
      <BarChart width={1250} height={400} data={phones}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Phones;
