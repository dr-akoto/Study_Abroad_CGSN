import Navbar from "./navbar"; // Importing the Navbar component
import { FaUniversity, FaPassport, FaMoneyCheckAlt, FaPlane, FaChalkboardTeacher } from 'react-icons/fa'; // Importing icons from react-icons library
import { Swiper, SwiperSlide } from "swiper/react"; // Importing Swiper components
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Importing Swiper modules
import "swiper/css"; // Importing Swiper CSS
import "swiper/css/pagination"; // Importing Swiper Pagination CSS
import "swiper/css/navigation"; // Importing Swiper Navigation CSS

// Services data
const services = [
  {
    icon: <FaUniversity size={50} className="text-blue-500" />, // University icon
    title: "University Application Assistance",
    description: "Expert guidance for applying to top universities, ensuring all requirements are met."
  },
  {
    icon: <FaPassport size={50} className="text-green-500" />, // Passport icon
    title: "Visa Processing Support",
    description: "Comprehensive support for student visa applications and legal documentation."
  },
  {
    icon: <FaMoneyCheckAlt size={50} className="text-purple-500" />, // Money icon
    title: "Scholarship & Financial Aid",
    description: "Helping students find and apply for scholarships to fund their education abroad."
  },
  {
    icon: <FaPlane size={50} className="text-orange-500" />, // Plane icon
    title: "Travel & Accommodation",
    description: "Assisting students with travel bookings and finding suitable accommodation options."
  },
  {
    icon: <FaChalkboardTeacher size={50} className="text-red-500" />, // Chalkboard Teacher icon
    title: "Cultural Adaptation Training",
    description: "Preparing students for life abroad with cultural training and support programs."
  }
];

// Schools data
const schools = [
  { id: 1, name: "Harvard University", logo: "/images/harvard.png" },
  { id: 2, name: "Stanford University", logo: "/images/stanford.png" },
  { id: 3, name: "Oxford University", logo: "/images/oxford.png" },
  { id: 4, name: "MIT", logo: "/images/mit.png" },
];

export default function Landing() {
  return (
    <>
       <section className="flex h-screen justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <Navbar />  
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex w-full md:w-1/2 justify-center items-center">  
            <div className="relative text-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold">Study Abroad with CGSN</h1>  
              <p className="text-white text-xl md:text-3xl mt-4">  
                Get help from a certified academic advisor to join the university of your dreams
              </p>
              <button className="bg-blue-700 w-40 h-10 p-4 mt-5 text-white rounded">About Us</button> 
            </div>
          </div>
          <div className="flex w-full md:w-1/2 justify-center items-center">  
            <div className="relative w-full h-full">
              <img className="object-cover h-full w-full" src="../CGSN/image/landing.jpg" alt="Landing image" />  
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Partner Universities</h2>  
          <Swiper
            slidesPerView={1}
            md:slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
          >
            {schools.map((school) => (
              <SwiperSlide key={school.id} className="flex justify-center">  
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <img src={school.logo} alt={school.name} className="w-40 mx-auto" />  
                  <h3 className="mt-4 text-xl font-semibold">{school.name}</h3>  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-blue-50 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-black">Our Services</h2>  
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="p-8 border rounded-xl bg-gray-50 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">  
                <div className="flex justify-center mb-5">{service.icon}</div>  
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>  
                <p className="text-gray-400">{service.description}</p>  
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
