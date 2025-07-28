import React, { useState } from 'react';
import { useEffect } from 'react';
import InquiryForm from '../components/InquiryForm';

const Courses = () => {

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample course data - replace with your actual courses
  const courses = [
    {
      id: 1,
      code: "BUS101",
      title: "Introduction to Business",
      department: "business",
      credits: 3,
      description: "An overview of business principles, concepts, and practices in contemporary society.",
      prerequisites: "None",
      schedule: "Mon/Wed 10:00 AM - 11:30 AM"
    },
    {
      id: 2,
      code: "CS150",
      title: "Computer Science Fundamentals",
      department: "technology",
      credits: 4,
      description: "Introduction to programming concepts, algorithms, and problem-solving using Python.",
      prerequisites: "None",
      schedule: "Tue/Thu 1:00 PM - 2:45 PM"
    },
    {
      id: 3,
      code: "ENG201",
      title: "Academic Writing",
      department: "humanities",
      credits: 3,
      description: "Development of writing skills for academic research and communication.",
      prerequisites: "ENG101",
      schedule: "Mon/Wed/Fri 9:00 AM - 10:00 AM"
    },
    {
      id: 4,
      code: "BIO220",
      title: "Human Anatomy",
      department: "science",
      credits: 4,
      description: "Structure and function of the human body with emphasis on organ systems.",
      prerequisites: "BIO101",
      schedule: "Tue/Thu 9:00 AM - 10:30 AM, Fri 1:00 PM - 3:00 PM (Lab)"
    },
    {
      id: 5,
      code: "MATH230",
      title: "Calculus I",
      department: "mathematics",
      credits: 4,
      description: "Limits, derivatives, and integrals of algebraic and transcendental functions.",
      prerequisites: "MATH120 or equivalent",
      schedule: "Mon/Wed/Fri 11:00 AM - 12:15 PM"
    },
    {
      id: 6,
      code: "PSYC101",
      title: "Introduction to Psychology",
      department: "socialscience",
      credits: 3,
      description: "Survey of major topics in psychology including perception, learning, and personality.",
      prerequisites: "None",
      schedule: "Tue/Thu 3:00 PM - 4:30 PM"
    },
    {
      id: 7,
      code: "ART150",
      title: "Drawing Fundamentals",
      department: "arts",
      credits: 3,
      description: "Introduction to principles of drawing with emphasis on visual perception and technique.",
      prerequisites: "None",
      schedule: "Mon/Wed 1:00 PM - 3:45 PM"
    },
    {
      id: 8,
      code: "CS250",
      title: "Data Structures",
      department: "technology",
      credits: 4,
      description: "Implementation and application of common data structures including lists, stacks, queues, and trees.",
      prerequisites: "CS150",
      schedule: "Mon/Wed 3:00 PM - 4:30 PM, Fri 3:00 PM - 4:00 PM (Lab)"
    },
    {
      id: 9,
      code: "HIST210",
      title: "World History",
      department: "humanities",
      credits: 3,
      description: "Survey of major historical events and developments across global civilizations.",
      prerequisites: "None",
      schedule: "Tue/Thu 11:00 AM - 12:30 PM"
    },
    {
      id: 10,
      code: "CHEM101",
      title: "General Chemistry",
      department: "science",
      credits: 4,
      description: "Fundamental principles of chemistry including atomic structure, periodicity, and chemical reactions.",
      prerequisites: "High school chemistry recommended",
      schedule: "Mon/Wed 10:00 AM - 11:30 AM, Thu 1:00 PM - 4:00 PM"
    },
    {
      id: 11,
      code: "MKT300",
      title: "Marketing Principles",
      department: "business",
      credits: 3,
      description: "Introduction to marketing concepts, strategies, and applications in various contexts.",
      prerequisites: "BUS101",
      schedule: "Tue/Thu 9:00 AM - 10:30 AM"
    },
    {
      id: 12,
      code: "SOC101",
      title: "Introduction to Sociology",
      department: "socialscience",
      credits: 3,
      description: "Study of human society, social institutions, and group behaviors.",
      prerequisites: "None",
      schedule: "Mon/Wed/Fri 1:00 PM - 2:00 PM"
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'arts', name: 'Arts & Design' },
    { id: 'business', name: 'Business' },
    { id: 'humanities', name: 'Humanities' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'science', name: 'Natural Sciences' },
    { id: 'socialscience', name: 'Social Sciences' },
    { id: 'technology', name: 'Technology & Computing' }
  ];

  // Filter courses based on department and search query
  const filteredCourses = courses.filter(course => {
    const matchesDepartment = selectedDepartment === 'all' || course.department === selectedDepartment;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Course Catalog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of programs designed to prepare you for success.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <section className="py-12 md:py-16 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Find Your Perfect Course</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="w-full md:w-80">
                <label className="block text-sm font-medium text-gray-700 mb-2 text-center">Filter by Department</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-80">
                <label className="block text-sm font-medium text-gray-700 mb-2 text-center">Search Courses</label>
                <input
                  type="text"
                  placeholder="Search by title, code, or description..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Available
            </h2>
          </div>
          
          {filteredCourses.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">No courses match your criteria. Please try a different search or filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 max-w-7xl mx-auto">
              {filteredCourses.map(course => (
                <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-blue-800 text-white py-3 px-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg">{course.code}</h3>
                      <span className="text-sm bg-blue-700 px-3 py-1 rounded-full">{course.credits} {course.credits === 1 ? 'Credit' : 'Credits'}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 text-center">{course.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-center">{course.description}</p>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p className="text-center"><span className="font-semibold">Prerequisites:</span> {course.prerequisites}</p>
                      <p className="text-center"><span className="font-semibold">Schedule:</span> {course.schedule}</p>
                    </div>
                    <div className="text-center mt-6">
                      <button className="bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300 w-full md:w-auto">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Program Information */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8">Academic Information</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Credit System</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Most courses carry 3-4 credits. A typical full-time student takes 15-18 credits per semester. 
                To graduate, students must complete 120 credits for a bachelor's degree or 60 credits for an associate degree.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Registration</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Registration for the upcoming semester opens six weeks before the end of the current term. 
                Students should meet with academic advisors to plan their course schedules and register through the student portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Begin Your Academic Journey?</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Speak with an academic advisor today to create your personalized degree plan.
            </p>
            <button className="bg-yellow-500 text-blue-900 font-bold py-4 px-8 text-lg rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg">
              Schedule Advising Appointment
            </button>
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

export default Courses;