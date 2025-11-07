import { useState } from 'react';

export default function JoinSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="join" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F1B40] mb-4">
            Join the Initiative
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Partner with governments, research institutions, and space operators to help define global ethical standards for orbit.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-lg p-12 text-center border-2 border-[#00A7A7]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00A7A7] rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#0F1B40] mb-2">
              Thank you for reaching out
            </h3>
            <p className="text-gray-600">
              We'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-[#0F1B40] mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00A7A7] focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-[#0F1B40] mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00A7A7] focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="organization" className="block text-sm font-medium text-[#0F1B40] mb-2">
                Organization *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00A7A7] focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="role" className="block text-sm font-medium text-[#0F1B40] mb-2">
                Role *
              </label>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00A7A7] focus:outline-none transition-colors"
              >
                <option value="">Select your role</option>
                <option value="government">Government</option>
                <option value="industry">Industry</option>
                <option value="academia">Academia</option>
                <option value="civil-society">Civil Society</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-[#0F1B40] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00A7A7] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#0F1B40] text-white font-medium rounded-lg hover:bg-[#00A7A7] transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
