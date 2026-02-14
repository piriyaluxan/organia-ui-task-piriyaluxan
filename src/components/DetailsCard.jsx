import { useState, forwardRef, useImperativeHandle } from "react";
import { ChevronDown } from "lucide-react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const DetailsCard = forwardRef(({ title }, ref) => {
  const [position, setPosition] = useState({
    lat: 9.665248645886242,
    lng: 80.02071385752006,
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactPerson: "",
    contactNumber: "",
    latitude: 9.665248645886242,
    longitude: 80.02071385752006,
    province: "",
    district: "",
    city: "",
    street: "",
    addressNote: "",
  });
  const [errors, setErrors] = useState({});

  // Expose handleSubmit to parent
  useImperativeHandle(ref, () => ({
    submit: handleSubmit,
  }));

  // Handle input changes
  const handleChange = (field, value) => {
    let updatedFormData = { ...formData, [field]: value };

    // Update position if latitude or longitude changes
    if (field === "latitude") {
      const lat = parseFloat(value) || 0;
      setPosition((prev) => ({ ...prev, lat }));
      updatedFormData.latitude = lat;
    }
    if (field === "longitude") {
      const lng = parseFloat(value) || 0;
      setPosition((prev) => ({ ...prev, lng }));
      updatedFormData.longitude = lng;
    }

    setFormData(updatedFormData);
    // Clear error for this field
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.contactPerson.trim())
      newErrors.contactPerson = "Contact Person Name is required";
    if (!formData.contactNumber.trim())
      newErrors.contactNumber = "Contact Number is required";
    else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\D/g, "")))
      newErrors.contactNumber = "Contact Number must be 10 digits";
    if (!formData.province.trim()) newErrors.province = "Province is required";
    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.street.trim()) newErrors.street = "Street is required";
    if (!formData.addressNote.trim())
      newErrors.addressNote = "Address Note is required";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit the data here
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  // Marker that updates on map click + reverse geocoding
  const LocationMarker = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition({ lat, lng });

        let updatedData = { ...formData, latitude: lat, longitude: lng };

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
          );
          const data = await response.json();

          if (data.address) {
            updatedData.province = data.address.state || "";
            updatedData.district = data.address.county || "";
            updatedData.city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              "";
            updatedData.street =
              data.address.road ||
              data.address.pedestrian ||
              data.address.neighbourhood ||
              "";
            updatedData.addressNote = data.display_name || "";
          } else {
            alert(
              "Address not found for this location. Please enter manually.",
            );
          }
        } catch (error) {
          console.error(error);
          alert("Failed to fetch address. Please enter manually.");
        }

        setFormData(updatedData);
      },
    });
    return <Marker position={position} />;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white  border-2 rounded-2xl border-black overflow-hidden flex-1 shadow-sm"
    >
      {/* Header */}
      <div className="bg-slate-800 px-4 py-2">
        <h3 className="text-white text-sm font-semibold">{title}</h3>
      </div>

      <div className="p-4 space-y-6">
        {/* Name Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
        </div>

        {/* Contact Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700">
              Contact Person Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter contact person name"
              value={formData.contactPerson}
              onChange={(e) => handleChange("contactPerson", e.target.value)}
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            {errors.contactPerson && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contactPerson}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 flex items-center rounded-full border border-gray-700 overflow-hidden">
              <select
                value={formData.countryCode || "+94"}
                onChange={(e) => handleChange("countryCode", e.target.value)}
                className="pl-2 py-1.5 text-sm text-gray-700 border-r bg-white focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                <option value="+94">+94 (Sri Lanka)</option>
                {/* Add more country codes as needed */}
              </select>

              <input
                type="text"
                placeholder="Enter number"
                value={formData.contactNumber}
                onChange={(e) => handleChange("contactNumber", e.target.value)}
                className="flex-1 px-2 py-1.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
              />
            </div>
            {errors.contactNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contactNumber}
              </p>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="h-72 rounded-3xl overflow-hidden">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
        </div>

        {/* Latitude / Longitude */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700">
              Latitude
            </label>
            <input
              type="number"
              value={formData.latitude}
              onChange={(e) => handleChange("latitude", e.target.value)}
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">
              Longitude
            </label>
            <input
              type="number"
              value={formData.longitude}
              onChange={(e) => handleChange("longitude", e.target.value)}
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
        </div>

        {/* Province / District / City */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700">
              Province <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.province}
              onChange={(e) => handleChange("province", e.target.value)}
              placeholder="Province"
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            {errors.province && (
              <p className="text-red-500 text-xs mt-1">{errors.province}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">
              District <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.district}
              onChange={(e) => handleChange("district", e.target.value)}
              placeholder="District"
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            {errors.district && (
              <p className="text-red-500 text-xs mt-1">{errors.district}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="City"
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>
        </div>

        {/* Street / Address Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700">
              Street / Lane <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => handleChange("street", e.target.value)}
              placeholder="Street"
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            {errors.street && (
              <p className="text-red-500 text-xs mt-1">{errors.street}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">
              Address Note <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.addressNote}
              onChange={(e) => handleChange("addressNote", e.target.value)}
              placeholder="Address Note"
              className="mt-1 w-full rounded-full border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            {errors.addressNote && (
              <p className="text-red-500 text-xs mt-1">{errors.addressNote}</p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
});

export default DetailsCard;
