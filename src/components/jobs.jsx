import axios from 'axios';
import { useEffect, useState } from 'react';

const Jobs = () => {
  const [jobDetails, setJobDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        // Use CORS Anywhere Proxy
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //corrected
        const targetUrl =
          'https://x.com/i/api/graphql/JyATh-zc07YHeyDDl3rDgg/JobSearchQueryScreenJobsQuery';
        const url = `${proxyUrl}${targetUrl}`;

        const headers = {
          Authorization:
            'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
        };

        const variables = {
          count: 25,
          cursor: null,
          searchParams: {
            keyword: 'sde',
            job_location_id: null,
            job_location: null,
            job_location_type: [],
            seniority_level: [],
            company_name: null,
            employment_type: [],
            industry: null,
          },
        };

        const response = await axios.post(url, { variables }, { headers });

        const jobs = response.data.data?.result || [];
        const jobDetails = jobs.map((job) => ({
          normal_url: job.result?.company_profile_results?.result?.logo?.normal_url,
          location: job.result?.core?.location,
          redirect_url: job.result?.core?.redirect_url,
          title: job.result?.core?.title,
          name: job.result?.company_profile_results?.result?.core?.name,
        }));

        setJobDetails(jobDetails);
      } catch (err) {
        setError(err.response?.data || err.message);
        console.error('Error fetching job details:', err.response?.data || err.message);
      }
    };

    fetchJobDetails();
  }, []);

  return (
    <>
      {/* Search menu */}
      <div className="max-w-2xl mx-auto">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
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
      </div>

      {/* Job Cards */}
      <h1>Job Details</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {jobDetails.map((job, index) => (
        <div
          key={index}
          className="flex relative"
          style={{ marginTop: '50px' }}
        >
          <div className="relative grid grid-cols-1 gap-1 p-4 mb-2 border rounded-lg bg-white shadow-lg">
            <div className="relative flex gap-4">
              <img
                src={job.normal_url}
                className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt="Company Logo"
                loading="lazy"
              />
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                    {job.title}
                  </p>
                  <a
                    className="text-gray-500 text-xl"
                    href={job.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.name}
                  </a>
                </div>
                <p className="text-gray-400 text-sm">{job.location}</p>
              </div>
            </div>
            <div className="w-full pt-5 px-4 mb-8 mx-auto">
              <button
                className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={() => window.open(job.redirect_url)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Jobs;










