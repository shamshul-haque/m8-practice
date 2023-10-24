import PropTypes from "prop-types";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="border border-red-400">
      <img src={logo} alt={company_name} />
      <h2>{job_title}</h2>
      <p>{company_name}</p>
      <div>
        <button>{remote_or_onsite}</button>
        <button>{job_type}</button>
      </div>
      <div>
        <div className="flex">
          <CiLocationOn />
          <p>{location}</p>
        </div>
        <div className="flex">
          <CiDollar />
          <p>{salary}</p>
        </div>
      </div>
      <button className="bg-green-400">
        <Link to={`/job/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
