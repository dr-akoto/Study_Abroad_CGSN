 
const LandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-5 px-8 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-extrabold">Research Hub</h1>
        <ul className="flex space-x-8 text-lg">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
          <li><a href="#signup" className="hover:underline">Sign Up</a></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 text-center">
        <h1 className="text-6xl font-extrabold">Manage Your Research & Thesis Seamlessly</h1>
        <p className="mt-5 text-xl max-w-3xl mx-auto">Track research progress, collaborate with peers, and integrate your GPA effortlessly.</p>
        <a href="#signup" className="mt-8 inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition shadow-lg">Get Started</a>
      </header>
      
      {/* Features Section */}
      <section id="features" className="py-20 text-center bg-white">
        <h2 className="text-5xl font-bold">Key Features</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          {[
            { title: "Research Submission", description: "Easily submit and track your research papers online." },
            { title: "GPA Integration", description: "Your GPA is displayed on your profile for credibility." },
            { title: "Collaboration Tools", description: "Work with peers and get real-time feedback from mentors." },
            { title: "Plagiarism Detection", description: "Built-in plagiarism checks to ensure originality." },
            { title: "Digital Library", description: "Access a repository of past research papers." },
            { title: "Citation Management", description: "Automatic citation formatting for your references." },
          ].map((feature, index) => (
            <div key={index} className="p-8 bg-gray-50 shadow-lg rounded-xl hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="font-semibold text-2xl">{feature.title}</h3>
              <p className="mt-3 text-lg text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* FAQ and Newsletter Section */}
      <section className="bg-gray-100 py-20 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-10">
              {[
                { question: "Is this platform free to use?", answer: "Yes! Research Hub offers a free plan with essential features, and premium options for advanced users." },
                { question: "How do I track my research progress?", answer: "Your dashboard provides real-time tracking of submissions, feedback, and deadlines." },
                { question: "Can I collaborate with others?", answer: "Absolutely! Invite peers and mentors to review your work and provide insights." },
                { question: "Does it support plagiarism detection?", answer: "Yes, our built-in tool helps ensure your research is original." }
              ].map((faq, index) => (
                <div key={index} className="mb-8 p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition">
                  <h3 className="font-semibold text-2xl text-blue-700">{faq.question}</h3>
                  <p className="mt-3 text-lg text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-white p-10 shadow-xl rounded-xl text-center">
            <h2 className="text-4xl font-bold">Stay Updated</h2>
            <p className="mt-6 text-lg text-gray-700">Subscribe to our newsletter to get the latest updates on research management and academic tools.</p>
            <form className="mt-8">
              <input type="email" placeholder="Enter your email" className="w-full px-5 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition shadow-lg">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-8 mt-20">
        <p className="text-lg">&copy; {new Date().getFullYear()} Research Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
