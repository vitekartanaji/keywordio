import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAdd = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const navigate = useNavigate();

  const handleCheckboxClick = (checkboxId) => {
    setSelectedCheckbox(checkboxId);
  };

  const handleNextClick = () => {
    if (selectedCheckbox === "text") {
      navigate("/text-add");
    } else if (selectedCheckbox === "media") {
      navigate("/media-add");
    }
  };

  return (
    <>
      <div className="m-3 rounded-lg bg-white p-2">
        <div className="font-bold">Create Ads</div>

        <div className="flex justify-center">
          <label
            className={`border-2 m-4 p-2 h-96 w-80 rounded-lg shadow-md bg-gray-50 ${
              selectedCheckbox === "text" ? "selected" : ""
            }`}
            onClick={() => handleCheckboxClick("text")}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCheckbox === "text"}
              />
              <label className="form-check-label mt-5">
                <div className="rounded-lg border-1 w-64 h-64 bg-white"></div>
              </label>
              <div className="flex flex-col items-center">
                <p className="">Create</p>
                <p className="font-bold justify-center">Text-Ad</p>
              </div>
            </div>
          </label>

          <label
            className={`border-2 m-4 p-2 h-96 w-80 rounded-lg shadow-md bg-gray-50 ${
              selectedCheckbox === "media" ? "selected" : ""
            }`}
            onClick={() => handleCheckboxClick("media")}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCheckbox === "media"}
              />
              <label className="form-check-label mt-5">
                <div className="rounded-lg border-1 w-64 h-64 bg-white"></div>
              </label>
              <div className="flex flex-col items-center">
                <p className="">Create</p>
                <p className="font-bold justify-center">Media-Ad</p>
              </div>
            </div>
          </label>
        </div>

        <div className=" mt-5 flex justify-end">
          <button
            className="btn btn-primary mr-3 px-5"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateAdd;
