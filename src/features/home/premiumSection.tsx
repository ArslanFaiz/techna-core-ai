import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { FiPhone, FiCheck } from "react-icons/fi";
import { createContact } from "../../Api/contact";
import toast, { Toaster } from "react-hot-toast";
type PremiumSectionProps = {
  bgClass?: string; // optional background class
};

const services = ["UI/UX Design", "Web Development", "Mobile App", "Product Strategy"];

function App({bgClass='bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950'}:PremiumSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    service: "",
    projectDetail: "",
  });
  const [loading, setLoading] = useState(false);

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


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Basic Field Validation
  if (!formData.name || !formData.email || !formData.contact || !formData.projectDetail) {
    toast.error("Please fill all required fields!");
    return;
  }

  // Phone must contain country code
  if (!formData.contact.startsWith("")) {
    toast.error("Please enter a valid phone number with country code. Example: +92306646084");
    return;
  }

  setLoading(true);

  try {
    const response = await createContact({
      name: formData.name,
      email: formData.email,
      contact: formData.contact, // Already in string format
      service: formData.service || "",
      projectDetail: formData.projectDetail,
    });

    console.log("Contact Created:", response);
    toast.success("Form submitted successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      contact: "",
      service: "",
      projectDetail: "",
    });
  } catch (error: any) {
    console.error("Submit Error:", error.response?.data || error.message);
    toast.error("Failed to submit form. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    
    <section
      className={`relative min-h-screen py-16 md:py-24 px-6 ${bgClass}  overflow-hidden`}
    >
      <Toaster position="top-center"/>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-950/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-100/30 via-transparent to-transparent dark:from-cyan-950/20"></div>

      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 dark:from-cyan-900/15 dark:to-blue-900/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">

        <div className="lg:col-span-4 space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-400/10 dark:to-cyan-400/10 border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide">
              TRANSFORM YOUR VISION
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Let's Build Something
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
            Whether you're launching something new or scaling an existing platform, we'll help you design, build, and optimize it for success.
          </p>

          <div className="pt-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FiCheck className="text-white" size={16} />
              </div>
              <p className="text-slate-700 dark:text-slate-300">Expert consultation tailored to your needs</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FiCheck className="text-white" size={16} />
              </div>
              <p className="text-slate-700 dark:text-slate-300">Fast turnaround with premium quality</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FiCheck className="text-white" size={16} />
              </div>
              <p className="text-slate-700 dark:text-slate-300">Ongoing support and optimization</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

<div className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200/50 dark:border-slate-800/50">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Start Your Project</h2>
                <p className="text-slate-600 dark:text-slate-400">Fill out the form and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700
                               bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100
                               px-5 py-3.5 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400
                               focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10
                               transition-all duration-200 placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Contact Number
                  </label>
                  <PhoneInput
                    value={formData.contact}
                    onChange={(phone) => setFormData({ ...formData, contact: phone })}
                    placeholder="+1"
                    inputClass="w-full text-left rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400"
                    buttonClass={`absolute left-0 top-0 h-full flex items-center justify-center rounded-l-xl border-none bg-transparent text-slate-500 ${!formData.contact ? "invisible" : "visible"}`}
                    inputStyle={{
                      width: "100%",
                      background: "transparent",
                      paddingLeft: "50px",
                      paddingTop: "14px",
                      paddingBottom: "14px",
                      border: "2px solid rgb(226 232 240)",
                      borderRadius: "0.75rem",
                      fontSize: "1rem",
                      transition: "all 0.2s"
                    }}
                    containerClass="relative"
                    country={undefined}
                  />
                  {!formData.contact && (
    <div className="absolute left-3 top-12 -translate-y-1/2 text-gray-500">
      <FiPhone size={20} />
    </div>
  )}
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700
                               bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100
                               px-5 py-3.5 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400
                               focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10
                               transition-all duration-200 placeholder:text-slate-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service || services[0]}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700
                               bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100
                               px-5 py-3.5 pr-12 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400
                               focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10
                               transition-all duration-200 appearance-none cursor-pointer"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-[46px]">
                    <svg
                      className="w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="projectDetail"
                    value={formData.projectDetail}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700
                               bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100
                               px-5 py-3.5 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400
                               focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10
                               transition-all duration-200 resize-none placeholder:text-slate-400"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <div className="flex flex-col space-y-3 pt-2">
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="terms"
                      onChange={handleChange}
                      required
                      className="mt-1 w-5 h-5 rounded-md border-2 border-slate-300 dark:border-slate-600
                                 text-blue-600 focus:ring-2 focus:ring-blue-500/50 cursor-pointer
                                 transition-all duration-200"
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                      I understand and agree to the Terms & Conditions.
                    </span>
                  </label>

                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="marketing"
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 rounded-md border-2 border-slate-300 dark:border-slate-600
                                 text-blue-600 focus:ring-2 focus:ring-blue-500/50 cursor-pointer
                                 transition-all duration-200"
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                      I agree to receive marketing and promotional emails.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600
                             hover:from-blue-700 hover:to-cyan-700 text-white font-semibold text-lg
                             shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40
                             hover:scale-[1.02] active:scale-[0.98]
                             transform transition-all duration-200
                             focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                >
                  {loading ? 'Submitting...' : 'Book A Consultation'}
                </button>

                <p className="text-center text-sm text-slate-500 dark:text-slate-400 pt-2">
                  Response time: Within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
