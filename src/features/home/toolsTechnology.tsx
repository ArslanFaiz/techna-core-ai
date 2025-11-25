import { Code2, Server, Database } from 'lucide-react';
import {
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiFlask,
  SiNestjs,
  SiPython,
  SiRubyonrails,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiGraphql,
  SiMysql,
  SiSupabase
} from "react-icons/si";


const ToolsTechSection = () => {
const frontendTech = [
{ name: 'React JS', icon: <SiReact className="w-10 h-10 text-blue-500" /> },
{ name: 'Vue JS', icon: <SiVuedotjs className="w-10 h-10 text-green-500" /> },
{ name: 'Next JS', icon: <SiNextdotjs className="w-10 h-10 text-gray-900" /> },
{ name: 'TypeScript', icon: <SiTypescript className="w-10 h-10 text-blue-700" /> },
{ name: 'JavaScript', icon: <SiJavascript className="w-10 h-10 text-yellow-400" /> },
{ name: 'HTML 5', icon: <SiHtml5 className="w-10 h-10 text-orange-500" /> },
{ name: 'CSS 3', icon: <SiCss3 className="w-10 h-10 text-blue-600" /> },
{ name: 'Tailwind', icon: <SiTailwindcss className="w-10 h-10 text-teal-400" /> },
];

const backendTech = [
{ name: 'Node JS', icon: <SiNodedotjs className="w-10 h-10 text-green-600" /> },
{ name: 'Django', icon: <SiDjango className="w-10 h-10 text-green-700" /> },
{ name: 'Flask', icon: <SiFlask className="w-10 h-10 text-gray-600" /> },
{ name: 'Nest JS', icon: <SiNestjs className="w-10 h-10 text-red-600" /> },
{ name: 'Python', icon: <SiPython className="w-10 h-10 text-yellow-500" /> },
{ name: 'Ruby on Rails', icon: <SiRubyonrails className="w-10 h-10 text-red-500" /> },
{ name: 'Express', icon: <SiExpress className="w-10 h-10 text-gray-700" /> },
{ name: 'FastAPI', icon: <SiFastapi className="w-10 h-10 text-blue-400" /> },
];

const dbTech = [
{ name: 'PostgreSQL', icon: <SiPostgresql className="w-10 h-10 text-blue-600" /> },
{ name: 'MongoDB', icon: <SiMongodb className="w-10 h-10 text-green-600" /> },
{ name: 'Firebase', icon: <SiFirebase className="w-10 h-10 text-yellow-400" /> },
{ name: 'Redis', icon: <SiRedis className="w-10 h-10 text-red-500" /> },
{ name: 'GraphQL', icon: <SiGraphql className="w-10 h-10 text-pink-500" /> },
{ name: 'REST API', icon: <Code2 className="w-10 h-10 text-gray-500" /> },
{ name: 'Supabase', icon: <SiSupabase className="w-10 h-10 text-blue-400" /> },
{ name: 'MySQL', icon: <SiMysql className="w-10 h-10 text-blue-500" /> },
];

const renderTechGrid = (techArray: {name: string, icon: React.ReactNode }[]) => ( <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{techArray.map((tech, idx) => ( <div
       key={idx}
       className="group relative p-6 rounded-2xl border border-gray-200 bg-white
                  hover:border-blue-500 transition-all duration-300
                  hover:shadow-lg hover:shadow-blue-200"
     > <div className="relative z-10 flex flex-col items-center text-center"> <span className="mb-3 transform group-hover:scale-125 transition-transform duration-300">
{tech.icon} </span> <p className="font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">
{tech.name} </p> </div> </div>
))} </div>
);

return ( <section className="px-4 sm:px-6 lg:px-12 py-20 relative">
<div className="absolute inset-0 opacity-20" style={{
backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.1) 1px, transparent 0)',
backgroundSize: '50px 50px'
}} />

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Tools &<span className="text-blue-400"> Technologies</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        We use top-notch modern technologies to deliver high-performance, scalable, and future-ready digital solutions.
      </p>
    </div>

    <div className="mb-20">
      <div className="flex items-center justify-center mb-12">
        <Code2 className="w-6 h-6 text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold">Frontend Technologies</h3>
      </div>
      {renderTechGrid(frontendTech)}
    </div>

    <div className="mb-20">
      <div className="flex items-center justify-center mb-12">
        <Server className="w-6 h-6 text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold">Backend Technologies</h3>
      </div>
      {renderTechGrid(backendTech)}
    </div>

    <div>
      <div className="flex items-center justify-center mb-12">
        <Database className="w-6 h-6 text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold">Databases & Tools</h3>
      </div>
      {renderTechGrid(dbTech)}
    </div>
  </div>
</section>


);
};

export default ToolsTechSection;
