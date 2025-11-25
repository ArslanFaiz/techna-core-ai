
import { Leaf, Lightbulb, Users2, Zap } from 'lucide-react';
import { PremiumSection } from '..';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-900/10 pointer-events-none" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="relative z-10">
          <section className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 flex items-center">
            <div className="max-w-7xl mx-auto w-full">
              <button className="px-6 py-2 border border-blue-500 text-blue-400 rounded-lg mb-8 hover:bg-blue-500/10 transition-colors">
                About Us
              </button>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Redefining the Future<br />
                    with <span className="text-blue-400">AI-Driven</span> Excellence
                  </h1>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Transform your business with hytGenX's innovative AI solutions. We design smart tools to simplify complexities, drive growth, and keep you ahead in a rapidly evolving world.
                  </p>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                  <svg className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" viewBox="0 0 400 300" fill="none">
                    <path d="M50 150 L200 50 L350 150 L200 250 Z" stroke="#0ea5e9" strokeWidth="3" fill="none" className="animate-pulse" />
                    <path d="M100 150 L200 90 L300 150 L200 210 Z" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.6" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-12 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Team collaboration"
                    className="rounded-2xl shadow-2xl border border-blue-900/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl" />
                </div>

                <div>
                  <p className="text-blue-400 text-sm font-semibold mb-4 tracking-wider uppercase">Our Vision</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Shaping the <span className="text-white">Future</span> with<br />
                    <span className="text-blue-400">Cutting-Edge AI</span> Research
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    At hytGenX, innovation is at the core of everything we do. Born from a passion for pushing technological boundaries, we combine AI-powered solutions with cutting-edge research to deliver transformative results.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <p className="text-blue-400 text-sm font-semibold mb-4 tracking-wider uppercase">Our Vision</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    <span className="text-white">Redefining</span> Possibilities<br />
                    with <span className="text-blue-400">AI</span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    Our vision is to lead the global transformation of technology by delivering AI-powered, data-driven solutions that empower businesses to innovate, scale, and achieve sustainable growth. We envision a world where technology is not just a tool, but a catalyst for unlocking human potential and driving societal progress. At hytGenX, we're not just shaping the future of technology, we're empowering a smarter, more connected world.
                  </p>
                </div>

                <div className="relative order-1 lg:order-2">
                  <img
                    src="https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="AI Technology"
                    className="rounded-2xl shadow-2xl border border-blue-900/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-12 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Team working"
                    className="rounded-2xl shadow-2xl border border-blue-900/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl" />
                </div>

                <div>
                  <p className="text-blue-400 text-sm font-semibold mb-4 tracking-wider uppercase">Our Mission</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Empowering Progress<br />
                    Through <span className="text-blue-400">Innovation</span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Our mission is to empower organizations worldwide through AI-driven software solutions, advanced cloud infrastructure, and cutting-edge development practices. By focusing on customer success, innovation, and collaboration, we strive to deliver scalable, tailor-made solutions that meet the evolving needs of businesses in every industry. At hytGenX, we believe that technology should always be pushing boundaries, and we are dedicated to helping our clients stay ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </section>
           <section className="px-4 sm:px-6 lg:px-12 py-20 relative">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)',
              backgroundSize: '60px 60px'
            }} />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="mb-20">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Our Core Values: The <span className="text-blue-400">Heart of hytGenX</span>
                </h2>
                <p className="text-gray-400 max-w-3xl text-lg">
                  At hytGenX, our values aren't just principles—they're the foundation of how we innovate, collaborate, and create value for our clients. Here's what drives us every day:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

                  <div className="relative p-8 rounded-3xl border border-blue-900/30
                                  bg-gradient-to-br from-blue-950/20 to-black/40
                                  hover:border-blue-500/50 transition-all duration-300
                                  group-hover:shadow-lg group-hover:shadow-blue-500/20
                                  h-full flex flex-col">

                    <div className="mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20
                                      flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-blue-600/30
                                      transition-all duration-300 border border-blue-500/30">
                        <Lightbulb className="w-10 h-10 text-blue-300" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                      Diverse Perspectives, Stronger Ideas
                    </h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">
                      Great ideas come from different perspectives. We embrace inclusivity to create an environment where creativity and innovation thrive.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

                  <div className="relative p-8 rounded-3xl border border-blue-900/30
                                  bg-gradient-to-br from-blue-950/20 to-black/40
                                  hover:border-blue-500/50 transition-all duration-300
                                  group-hover:shadow-lg group-hover:shadow-blue-500/20
                                  h-full flex flex-col">

                    <div className="mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20
                                      flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-blue-600/30
                                      transition-all duration-300 border border-blue-500/30">
                        <Users2 className="w-10 h-10 text-blue-300" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                      Working Together, Achieving More
                    </h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">
                      Success is a team effort. We build strong partnerships with our clients, collaborating to reach meaningful goals.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

                  <div className="relative p-8 rounded-3xl border border-blue-900/30
                                  bg-gradient-to-br from-blue-950/20 to-black/40
                                  hover:border-blue-500/50 transition-all duration-300
                                  group-hover:shadow-lg group-hover:shadow-blue-500/20
                                  h-full flex flex-col">

                    <div className="mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20
                                      flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-blue-600/30
                                      transition-all duration-300 border border-blue-500/30">
                        <Zap className="w-10 h-10 text-blue-300" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                      Adapting to Change, Moving Forward
                    </h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">
                      The digital world moves fast, and so do we. Our solutions evolve with your business to help you stay ahead in a dynamic landscape.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

                  <div className="relative p-8 rounded-3xl border border-blue-900/30
                                  bg-gradient-to-br from-blue-950/20 to-black/40
                                  hover:border-blue-500/50 transition-all duration-300
                                  group-hover:shadow-lg group-hover:shadow-blue-500/20
                                  h-full flex flex-col">

                    <div className="mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20
                                      flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-blue-600/30
                                      transition-all duration-300 border border-blue-500/30">
                        <Leaf className="w-10 h-10 text-blue-300" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                      Sustainability and Responsibility
                    </h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">
                      We are committed to ethical, responsible, and sustainable growth, using technology as a force for good to positively impact our clients and communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PremiumSection bgClass='bg-transparent'/>
        </div>
      </div>
    </div>
  );
}

export default App;
