import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("../jobs.json");
      const data = await res.json();
      setJobs(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <div>
        <h1>Featured Job</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <button onClick={() => setDataLength(jobs.length)}>
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
