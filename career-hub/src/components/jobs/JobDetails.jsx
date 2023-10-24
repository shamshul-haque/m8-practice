import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveApplication } from "../utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const handleApplyJob = () => {
    saveApplication(idInt);
    toast.success("Applied Successful!", {
      theme: "colored",
    });
  };
  return (
    <div>
      <h2>Job Details: {job.job_title}</h2>
      <div className="grid md:grid-cols-4 gap-10">
        <div className="border md:col-span-3 border-red-800">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </div>
        <div className="border border-red-800">
          <h2>Lorem, ipsum dolor</h2>
          <button onClick={handleApplyJob} className="bg-green-400">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
