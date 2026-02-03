import { Users, Zap, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MilegaJob is a revolutionary platform designed to bridge the gap between ambitious job seekers and India's leading job portals. We believe in making job searching simpler, smarter, and more efficient for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-6 mb-4">
              <Users className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Our Mission</h3>
            <p className="text-gray-700 font-semibold">
              To empower job seekers with access to the best job portals, eliminating confusion and saving time in the job search process.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-6 mb-4">
              <Zap className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-orange-700 mb-2">Our Vision</h3>
            <p className="text-gray-700 font-semibold">
              To become the most trusted and comprehensive job portal aggregator in India, trusted by millions of job seekers.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-6 mb-4">
              <Shield className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">Our Values</h3>
            <p className="text-gray-700 font-semibold">
              Transparency, innovation, and user-centric design drive every decision we make for your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
