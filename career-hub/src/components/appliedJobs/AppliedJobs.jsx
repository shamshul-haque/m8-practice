import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utility/LocalStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filterDisplay, setFilterDisplay] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredApplication();
    if (jobs.length) {
      const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobApplied);
      setFilterDisplay(jobApplied);
    }
  }, [jobs]);

  const handleFiltering = (filter) => {
    if (filter === "all") {
      setFilterDisplay(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setFilterDisplay(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setFilterDisplay(onsiteJobs);
    }
  };

  return (
    <div>
      <h2>Applied Jobs {appliedJobs.length}</h2>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleFiltering("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleFiltering("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleFiltering("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {filterDisplay.map((job) => (
          <li key={job.id}>
            <p>{job.job_title}</p>
            <p>{job.company_name}</p>
            <p>{job.remote_or_onsite}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
