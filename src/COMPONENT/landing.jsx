 import Navbar from "./navbar";
import { FaUniversity, FaPassport, FaMoneyCheckAlt, FaPlane, FaChalkboardTeacher } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star } from "lucide-react";

// Import required styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
  {
    icon: <FaUniversity size={50} className="text-blue-500" />,
    title: "University Application Assistance",
    description: "Expert guidance for applying to top universities, ensuring all requirements are met.",
  },
  {
    icon: <FaPassport size={50} className="text-green-500" />,
    title: "Visa Processing Support",
    description: "Comprehensive support for student visa applications and legal documentation.",
  },
  {
    icon: <FaMoneyCheckAlt size={50} className="text-purple-500" />,
    title: "Scholarship & Financial Aid",
    description: "Helping students find and apply for scholarships to fund their education abroad.",
  },
  {
    icon: <FaChalkboardTeacher size={50} className="text-red-500" />,
    title: "Pre Departure Briefing",
    description: "Preparing students for life abroad with essential information and guidance.",
  },
  {
    icon: <FaPlane size={50} className="text-orange-500" />,
    title: "Travel & Accommodation",
    description: "Assisting students with travel bookings and finding suitable accommodation options.",
  },
  {
    icon: <FaChalkboardTeacher size={50} className="text-red-500" />,
    title: "Cultural Adaptation Training",
    description: "Preparing students for life abroad with cultural training and support programs.",
  }
];

const schools = [
  { id: 1, name: "Harvard University", logo: "/api/placeholder/150/150" },
  { id: 2, name: "Stanford University", logo: "/api/placeholder/150/150" },
  { id: 3, name: "Oxford University", logo: "/api/placeholder/150/150" },
  { id: 4, name: "MIT", logo: "/api/placeholder/150/150" },
  { id: 5, name: "Cambridge University", logo: "/api/placeholder/150/150" },
  { id: 6, name: "Yale University", logo: "/api/placeholder/150/150" },
];

const testimonials = [
  {
    name: "Alex Johnson",
    title: "International Student",
    feedback: "CGSN made my dream of studying abroad a reality. Their guidance was invaluable throughout the process.",
    image: "/api/placeholder/80/80",
  },
  {
    name: "Sophia Lee",
    title: "Graduate Student",
    feedback: "The cultural adaptation training really helped me adjust to life in a new country. Highly recommended!",
    image: "/api/placeholder/80/80",
  },
  {
    name: "David Kim",
    title: "Undergraduate Student",
    feedback: "Their scholarship assistance helped me secure funding for my studies. I'm grateful for their support.",
    image: "/api/placeholder/80/80",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-blue-50 ">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container h-screen mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-bg-gray-400 animate-fade-in-up">
              Study Abroad with CGSN
            </h1>
            <p className="text-xl md:text-2xl mt-6 text-bg-gray-400 animate-fade-in-up delay-200">
              Get help from certified academic advisors to join the university of your dreams
            </p>
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-500 animate-fade-in-up delay-300">
              About Us
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
              <img
                src="https://img.freepik.com/premium-vector/flat-design-study-abroad-illustration_23-2150287943.jpg?semt=ais_hybrid"
                alt="Students studying abroad"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in-up">
            Partner Universities
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="university-swiper"
          >
            {schools.map((school) => (
              <SwiperSlide key={school.id}>
                <div className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
                  <img
                    src={school.logo}
                    alt={school.name}
                    className="w-32 h-32 mx-auto object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white text-center">{school.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in-up">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="flex justify-center mb-6 transform transition-all duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in-up">
            Student Testimonials
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-8 transform transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-4 border-purple-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">{testimonial.title}</p>
                  <p className="text-gray-700 text-center italic mb-6">{testimonial.feedback}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-500" size={20} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .university-swiper,
        .testimonial-swiper {
          padding: 20px 0;
        }

        .swiper-pagination-bullet {
          background: white;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white;
        }
      `}</style>
    </div>
  );
}