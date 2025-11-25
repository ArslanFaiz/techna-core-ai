import { Stethoscope, DollarSign, ShoppingBag, Settings } from 'lucide-react';

function Industries() {
  const industries = [
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Leverage AI to improve patient outcomes, streamline administrative tasks, and personalize treatment plans.'
    },
    {
      icon: DollarSign,
      title: 'Finance',
      description: 'Implement AI to detect fraud, enhance risk management, and improve financial forecasting.'
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Use AI to optimize inventory, personalize shopping experiences, and predict consumer trends.'
    },
    {
      icon: Settings,
      title: 'Manufacturing',
      description: 'Apply AI for predictive maintenance, production optimization, and quality control.'
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="border border-gray-700 rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-gray-900/50 to-blue-900/20 backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-blue-400">Industries</span> We Serve
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <industry.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{industry.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
