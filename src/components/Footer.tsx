import React from 'react';

export const Footer = () => {
  return (
    <div className="bg-white w-full">
      <div className="p-4 text-center items-center">
        <div className="m-5">
          <div className="flex justify-center">
            <div className="p-2">
              <a href="https://github.com/slinkardbrandon/runestudy/issues/new/choose">
                Report an issue
              </a>
            </div>
            <span className="inline-flex items-center">&bull;</span>
            <div className="p-2">
              <a href="mailto:slinkardbrandon@gmail.com?subject=RuneStudy Contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
