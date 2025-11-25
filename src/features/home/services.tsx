import { Brain, Cog, Users, TrendingUp} from 'lucide-react';
import { IndusSection } from '..';
import ToolsTechSection from './toolsTechnology';

function App() {
  const features = [
    {
      icon: Brain,
      title: 'Smarter Decision-Making',
      description: 'Turn data into actionable insights with AI models that help you make informed decisions, quickly adapting to market changes and customer needs.'
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Reduce human error and free up your team\'s time by automating repetitive tasks, increasing operational efficiency.'
    },
    {
      icon: Users,
      title: 'Personalized User Experiences',
      description: 'Deliver custom, AI-driven experiences for your customers, offering personalized recommendations and improving engagement.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable and Adaptable',
      description: 'As your business grows, our AI solutions grow with you, allowing for easy updates and scalability to handle increased demands.'
    }
  ];

  const services = [
    {
      title: 'AI Model Development',
      description: 'Build custom AI models tailored to your specific business needs, from predictive analytics to computer vision solutions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Natural Language Processing (NLP)',
      description: 'Utilize NLP for tasks like sentiment analysis, chatbots, and text-based insights to enhance customer interactions.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Machine Learning',
      description: 'Implement advanced machine learning algorithms to uncover patterns, make predictions, and automate decision-making processes.',
      image: 'https://hytgenx.com/background/servicesPage/subservice-3.jpg'
    },
    {
      title: 'Process Automation with AI',
      description: 'Streamline workflows and reduce manual tasks with intelligent automation powered by artificial intelligence.',
      image: 'https://hytgenx.com/background/servicesPage/subservice-4.jpg'
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and applications for enhanced functionality.',
      image: '	https://hytgenx.com/background/servicesPage/subservice-5.jpg'
    },
    {
      title: 'AI-Driven Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics powered by machine learning algorithms.',
      image: 'https://hytgenx.com/background/servicesPage/subservice-6.jpg'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <section className="container mx-auto px-8 py-12 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 border border-blue-400 rounded-full text-sm font-medium">
                  AI-Powered Development Solutions
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Unlock the Potential of <span className="text-blue-400">AI</span> to Revolutionize Your <span className="text-blue-400">Business</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Leverage the power of artificial intelligence to drive smarter decisions, streamline processes, and elevate user experiences.
              </p>

              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
                Contact Us
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="AI Technology"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-8 py-12 md:py-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
            Key Features of Our <span className="text-blue-400"></span> Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2"
              >
                <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-8 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="text-blue-400">Subservices</span> We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-500">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <IndusSection/>
        <ToolsTechSection/>
      </div>
    </div>
    </>
  );
}

export default App;
