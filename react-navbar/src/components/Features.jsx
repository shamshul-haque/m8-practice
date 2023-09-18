import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";

const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-2">
        <AiOutlineCheck /> {feature}
      </p>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};

export default Features;
