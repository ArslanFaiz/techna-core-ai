import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { FiPhone } from "react-icons/fi";

const services = ["UI/UX Design", "Web Development", "Mobile App", "Product Strategy"];

export default function PremiumSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    service: "",
    message: "",
    terms: false,
    marketing: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
<section className="relative py-12 md:py-24 px-6 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
<div className="w-full">
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#131F46"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* Background Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-12 items-center">

        {/* Left Side */}
        <div className="md:col-span-4 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Let’s Build Something Great — Together
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-md">
            Whether you’re launching something new or scaling an existing platform, we’ll help you design, build, and optimize it for success.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="md:col-span-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-3 md:p-10 shadow-xl ">
          <form onSubmit={handleSubmit} className="space-y-6">
           {/* Full Name */}
<div className="relative">
  <input
    type="text"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-gray-300 dark:border-gray-700 
               bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
               px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
    placeholder="Full Name"
  />
</div>

{/* Contact Number */}
<div className="relative">
  <PhoneInput
    value={formData.contactNumber}
    onChange={(phone) => setFormData({ ...formData, contactNumber: phone })}
    placeholder="+1"
    inputClass="w-full text-left rounded-xl bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
    buttonClass={`absolute left-0 top-0 h-full flex items-center justify-center rounded-l-xl border-none bg-transparent text-gray-500 ${!formData.contactNumber ? "invisible" : "visible"}`}
    inputStyle={{
      width: "100%",
      background:"#111827",
      paddingLeft: "50px",
      color: "#ffff",
      border: "1px solid #374151"
    }}
    country={undefined}
  />
  {!formData.contactNumber && (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
      <FiPhone size={20} />
    </div>
  )}
</div>

{/* Email */}
<div className="relative">
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-gray-300 dark:border-gray-700 
               bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
               px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
    placeholder="Email Address"
  />
</div>

<div className="relative">
  <select
    name="service"
    value={formData.service || services[0]}  // default first option
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-gray-300 dark:border-gray-700 
               bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
               px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 appearance-none"
  >
    {services.map((s) => (
      <option key={s} value={s}>
        {s}
      </option>
    ))}
  </select>

  {/* Custom dropdown arrow */}
  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
    <svg
      className="w-5 h-5 text-gray-500 dark:text-gray-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>


{/* Message */}
<div className="relative">
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    required
    rows={4}
    className="w-full rounded-xl border border-gray-300 dark:border-gray-700 
               bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
               px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 resize-none"
    placeholder="Tell Us About Yourself"
  />
</div>

            {/* Checkboxes */}
            <div className="flex flex-col space-y-2 text-gray-700 dark:text-gray-300">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                  className="rounded border-gray-300 dark:border-gray-600 accent-purple-500"
                />
                <span>I understand and agree to the Terms & Conditions.</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="marketing"
                  checked={formData.marketing}
                  onChange={handleChange}
                  className="rounded border-gray-300 dark:border-gray-600 accent-purple-500"
                />
                <span>I agree to receive marketing and promotional emails.</span>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Book A Consultation
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
