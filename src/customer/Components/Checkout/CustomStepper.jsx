import React from 'react';

// const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

const CustomStepper = ({ steps, activeStep }) => {
  return (
    <div className="flex justify-center items-center w-[80%] m-auto">
      {steps.map((label, index) => (
        <React.Fragment key={label}>
          <div className="flex flex-col items-center">
            {index < activeStep ? (
              <div className="text-wwwbootscom-congress-blue">
                <svg
                  className="w-8 h-8 mt-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <div className="text-wwwbootscom-congress-blue">
                <svg
                  className="w-8 h-8 mt-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-3a5 5 0 110-10 5 5 0 010 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
            <span className="mt-2">{label}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-grow h-[2px] bg-gray-400"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CustomStepper;
