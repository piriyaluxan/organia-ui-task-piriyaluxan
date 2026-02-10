import React from "react";

const DetailsForm = ({ title }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <form>
        <input
          type="text"
          placeholder="First Name *"
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Contact Person Name *"
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Contact Number *"
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Latitude *"
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Longitude *"
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="District *"
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Street / Lane"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Province *"
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="City *"
          required
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Address Note *"
          required
          className="border p-2 mb-2 w-full"
        ></textarea>
      </form>
    </div>
  );
};

export default DetailsForm;
