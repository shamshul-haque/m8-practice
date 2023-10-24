const getStoredApplication = () => {
  const storedApplication = localStorage.getItem("job-application");
  if (storedApplication) {
    return JSON.parse(storedApplication);
  } else {
    return [];
  }
};

const saveApplication = (id) => {
  const storedApplications = getStoredApplication();
  const exist = storedApplications.find((jobId) => jobId === id);
  if (!exist) {
    storedApplications.push(id);
    localStorage.setItem("job-application", JSON.stringify(storedApplications));
  }
};

export { getStoredApplication, saveApplication };
