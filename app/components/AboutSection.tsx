import { Heart, Lightbulb, HandHeart } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About MilegaJob</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Born from the frustration of navigating countless job portals, MilegaJob was created to simplify your job search. We aggregate and organize opportunities from all major job portals into one easy-to-navigate platform – saving you time and helping you find the perfect match faster.
          </p>
          <p className="text-lg text-gray-500 font-medium">
            Your One-Stop Destination for Every Job Opportunity in India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-6 mb-4">
              <Heart className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Our Passion</h3>
            <p className="text-gray-700 font-semibold">
              We care deeply about your career journey. Every feature we build is designed with your success in mind, because we've been in your shoes.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-6 mb-4">
              <Lightbulb className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-orange-700 mb-2">Our Creativity</h3>
            <p className="text-gray-700 font-semibold">
              We've reimagined job search with intelligent categorization. Whether you're looking for internships, fresher roles, or senior positions, our platform organizes thousands of listings by role, location, and category – making your search effortless.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-6 mb-4">
              <HandHeart className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">Our Commitment</h3>
            <p className="text-gray-700 font-semibold">
              We're committed to keeping job search accessible for everyone. Our platform is completely free, with fresh listings updated daily from all major portals. Your success is our success, and we're here to support you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
