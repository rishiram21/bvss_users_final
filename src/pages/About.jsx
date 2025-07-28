import React, { useEffect } from 'react';
import InquiryForm from '../components/InquiryForm';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Our College</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Empowering students through education, innovation, and community since 1965.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-12">Our Mission</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 lg:p-12">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-center">
                We are committed to providing accessible, high-quality education that inspires intellectual curiosity and critical thinking. Our goal is to prepare students not only for successful careers but for meaningful lives as engaged citizens who contribute positively to society.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                Through rigorous academics, research opportunities, and community engagement, we foster an environment where knowledge serves humanity and students develop the skills needed for tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto p-8">
            {[
              {
                title: "Academic Excellence",
                description: "We uphold rigorous standards and pursue innovation in teaching and learning."
              },
              {
                title: "Diversity & Inclusion",
                description: "We celebrate differences and create an environment where all perspectives are valued."
              },
              {
                title: "Integrity",
                description: "We promote ethical behavior, honesty, and accountability in all our endeavors."
              },
              {
                title: "Community Engagement",
                description: "We believe in the power of education to transform communities through service and partnership."
              },
              {
                title: "Student Success",
                description: "We are dedicated to supporting every student in achieving their academic and personal goals."
              },
              {
                title: "Innovation",
                description: "We embrace creative approaches to teaching, learning, and addressing societal challenges."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">{value.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8">Academic Excellence</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 lg:p-12 max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-center">
              Our institution offers a diverse range of undergraduate and graduate programs across the arts, sciences, business, and professional studies. Led by distinguished faculty who are leaders in their fields, our academic departments combine traditional scholarship with innovative teaching methods.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Small class sizes ensure personalized attention and meaningful mentorship opportunities. We pride ourselves on creating an environment where students can pursue their intellectual passions while developing practical skills for their future careers.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8">Campus Life</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Student Organizations</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                With over 50 student clubs and organizations, there are countless opportunities to explore interests, develop leadership skills, and build community on campus.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Athletics</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our competitive athletic programs promote teamwork, discipline, and school spirit while providing students with opportunities to excel both on and off the field.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibent text-blue-800 mb-4">Arts & Culture</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                From gallery exhibitions to theatrical performances, our campus celebrates creativity and artistic expression in all its forms.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Community Service</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe in giving back, with numerous service-learning opportunities that allow students to make a difference while gaining valuable real-world experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-12">Our History</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 lg:p-12">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Founded in 1965, our college began with a vision to provide accessible higher education to our community. From our humble beginnings with just three buildings and 200 students, we have grown into a respected institution serving thousands of students each year.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Throughout our history, we have remained committed to our founding principles while adapting to meet the changing needs of students and society. Today, we stand as a testament to the power of education to transform lives and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Ready to begin your journey? Explore our programs, schedule a campus visit, or apply today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-blue-900 font-bold py-4 px-8 text-lg rounded-lg hover:bg-blue-100 transition duration-300 shadow-lg">
                Explore Programs
              </button>
              <button className="bg-yellow-500 text-blue-900 font-bold py-4 px-8 text-lg rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Inquiry Form Section */}
      <div className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}

export default About;