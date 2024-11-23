import React from "react";
import 'flowbite/dist/flowbite.css'; // Correct path to Flowbite CSS

const Terms = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-16 rounded">
      <div id="accordion-flush">
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            className="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 rounded-t-xl border-b border-gray-200 dark:border-gray-700 dark:text-white"
          >
            <span><b style={{fontSize:"30px"}}>Terms and Conditions</b></span>
            
          </button>
        </h2>
        <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <span><b style={{fontSize:"20"}}>1. Acceptance of Terms:</b></span>
          <br />
            <p className="text-gray-500 dark:text-gray-400">
              <i>
            Welcome to JOB-RADER. By accessing and using our platform, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
            </i>
            
            </p>
          </div>
        </div>
        {/* Repeat for other accordion items */}

        {/* 2nd */}
        <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <span><b style={{fontSize:"20"}}>2. Services Provided</b></span>
          <br />
            <p className="text-gray-500 dark:text-gray-400">
              <i>
              JOB-RADER provides a centralized platform for users to access information about job openings, company hiring trends, and related career opportunities. While we strive to ensure the accuracy of the information provided, JOB-RADER does not guarantee the completeness, accuracy, or reliability of any job-related data.
            </i>
            
            </p>
          </div>
        </div>
        {/* 3rd */}

        <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <span><b style={{fontSize:"20"}}>3.User Obligations</b></span>
            <p className="text-gray-500 dark:text-gray-400">
              <i>
              <p><b>a.</b> You must use the platform for lawful purposes only.</p>
              <p><b>b.</b> You must use the platform for lawful purposes only.</p>
              <p><b>c.</b>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
            </i>
            
            </p>
          </div>
        </div>
        {/* 4th */}

        <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <span><b style={{fontSize:"20"}}>4. Prohibited Activities</b></span>
            <p className="text-gray-500 dark:text-gray-400">
              <i>
              <p><b>a.</b> Engaging in fraudulent activities.</p>
              <p><b>b.</b> Scraping or harvesting data from the platform.</p>
              <p><b>c.</b>Interfering with the platform’s functionality or security.</p>
            </i>
            
            </p>
          </div>
        </div>
        {/* 5th */}

        <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <span><b style={{fontSize:"20"}}>5. Termination</b></span>
            <p className="text-gray-500 dark:text-gray-400">
              <i>
              We reserve the right to terminate or suspend your access to JOB-RADER at our discretion, without notice, if you violate these Terms and Conditions or engage in unlawful activity.
            </i>
            
            </p>
          </div>
        </div>

        {/* 6th */}

        <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <span><b style={{fontSize:"20"}}>6. Contact Information</b></span>
            <p className="text-gray-500 dark:text-gray-400">
              <i>
              <p> If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
              <p><b>b.</b> Scraping or harvesting data from the platform.</p>
              <p><b>c.</b>Interfering with the platform’s functionality or security.</p>
            </i>
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

