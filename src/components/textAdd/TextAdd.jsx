import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TextAdd = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      navigate("/create-ads");
    }, 600);
  };

  return (
    <div className="m-3 bg-white rounded-lg h-screen">
      <div>
        <p className="font-bold m-2 mb-3">Create Text & Media</p>
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-3 px-3">
                <label className="form-label font-semibold">Heading 01</label>
                <input
                  type="text"
                  placeholder="Add a heading that would make users interested"
                  className="form-control text-sm"
                />
              </div>

              <div className="mb-3 px-3">
                <label className="form-label font-semibold">Heading 02</label>
                <input
                  type="text"
                  placeholder="Add a heading that would make users interested"
                  className="form-control text-sm"
                />
              </div>

              <div className="mb-3 px-3">
                <label className="form-label font-semibold">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Add your business name"
                  className="form-control text-sm"
                />
              </div>
            </div>

            <div>
              <div className="mb-3 px-3 mt-1">
                <label className="form-label font-semibold">
                  Description 01
                </label>
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Add primary text to help users understand more about your products, services or offers"
                  className="form-control text-sm"
                />
              </div>

              <div className="mb-3 px-3">
                <label className="form-label font-semibold">Button Label</label>
                <input
                  type="text"
                  placeholder="Select a label that best suits your ad"
                  className="form-control text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mb-3 px-3">
            <label className="form-label font-semibold">Website URL</label>
            <input
              type="text"
              placeholder="Add the URL of the landing page you want to redirect users to"
              className="form-control text-sm"
            />
          </div>

          <div className="flex justify-end pt-5">
            <button type="submit" class="btn  px-3 mx-3 bg-gray-300">
              <Link to="/create-ads">Back</Link>
            </button>
            <button type="submit" class="btn btn-primary mr-3 bg-blue-700 px-3">
              Submit
            </button>
          </div>
        </form>
      </div>
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-5 px-5 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">Submitted</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextAdd;
