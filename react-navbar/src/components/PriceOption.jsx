import PropTypes from "prop-types";
import Features from "./Features";

const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="bg-green-200 rounded-md p-5 flex flex-col">
      <h1 className="font-bold text-center">
        <span className="text-4xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h1>
      <h2 className="text-3xl my-5 text-center">{name}</h2>
      <div className="pl-5 flex-grow">
        {features.map((feature, index) => (
          <Features key={index} feature={feature} />
        ))}
      </div>
      <button className="w-full bg-green-400 rounded-lg p-3 text-white font-bold hover:bg-green-600 mt-10">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
