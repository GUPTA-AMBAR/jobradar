import axios from "axios";
import { useEffect, useState } from "react";

const Jobs = () => {
  const [jobDetails, setJobDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchJobDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/jobs?search=" + searchQuery , {
          params: { keyword: searchQuery },
        });

        const jobs = response.data || [];
        const jobResults = jobs.data.job_search.items_results.map((item) => {
          const job = item.result;
          const company = job.company_profile_results.result;
      
          return {
            jobTitle: job.core.title,
            location: job.core.location,
            companyName: company.core.name,
            jobLink: job.core.redirect_url,
            companyLogo: company.logo?.normal_url || "No Logo Available",
          };
        });

        setJobDetails(jobResults);
        setError(null);
      } catch (err) {
        setError(err.response?.data || err.message || "An error occurred");
        console.error("Error fetching job details:", err);
      } finally {
        setLoading(false);
      }
    };

    console.log(jobDetails)
    fetchJobDetails();
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) setSearchQuery(query);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-5">
        <label htmlFor="search" className="sr-only">
          Search Jobs
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            name="search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search jobs (e.g., SDE, Data Scientist)"
            defaultValue={searchQuery}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      {/* Job Details */}
      <h1 className="text-xl font-bold mb-4">Job Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {jobDetails.length === 0 && !loading && !error && (
        <p>No jobs found for the given query.</p>
      )}
      {console.log(jobDetails)}
      {jobDetails.map((job, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg shadow-lg bg-white">
          <div className="flex items-center gap-4">
            <img
              src={job.companyLogo}
              alt="Company Logo"
              className="w-16 h-16 rounded-lg border"
              loading="lazy"
            />
            <div>
              <h2 className="text-lg font-bold">{job.jobTitle}</h2>
              <p className="text-sm text-gray-500">{job.location}</p>
              <a
                href={job.jobLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {job.companyName}
              </a>
            </div>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600"
            onClick={() => window.open(job.jobLink, "_blank")}
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
