import { ChevronDown } from "lucide-react";

const DetailsForm = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-slate-800 px-4 py-2">
        <h3 className="text-white text-sm font-semibold">Sub Details</h3>
      </div>

      <div className="p-4 space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Name */}
          <div>
            <label className="text-xs font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="mt-1 w-full rounded-full border border-gray-700   px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          {/* Type */}
          <div>
            <label className="text-xs font-medium text-gray-700">
              Type <span className="text-red-500">*</span>
            </label>

            <div className="relative mt-1">
              <select className="w-full rounded-full border border-gray-700 px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-slate-500">
                <option>Select type</option>
              </select>

              <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Total Value */}
          <div>
            <label className="text-xs font-medium text-gray-700">
              Total Value
            </label>
            <input
              type="text"
              placeholder="Enter total value"
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              placeholder="Enter description"
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Quantity */}
            <div>
              <label className="text-xs font-medium text-gray-700">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter quantity"
                className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            {/* Number */}
            <div>
              <label className="text-xs font-medium text-gray-700">
                Number
              </label>
              <input
                type="text"
                placeholder="Enter number"
                className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            {/* Weight */}
            <div>
              <label className="text-xs font-medium text-gray-700">
                Weight (Kg)
              </label>
              <input
                type="text"
                placeholder="Enter weight"
                className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            {/* Height */}
            <div>
              <label className="text-xs font-medium text-gray-700">
                Height (m<sup>3</sup>)
              </label>
              <input
                type="text"
                placeholder="Enter height"
                className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            {/* Length & Width */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Length (m)
                </label>
                <input
                  type="text"
                  placeholder="Enter length"
                  className="mt-1 w-full  rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-700">
                  Width
                </label>
                <input
                  type="text"
                  placeholder="Enter width"
                  className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsForm;
