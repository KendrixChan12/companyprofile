import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bolu Jadul Bali - Meet Our Team',
  description: 'Meet the team behind Bolu Jadul Bali: Founder, Marketing Manager, and Lead Developer.',
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  { id: 1, name: 'John Doe', role: 'Founder & CEO', image: '/images/team/founder.webp' },
  { id: 2, name: 'Jane Smith', role: 'Marketing Manager', image: '/images/team/marketing.webp' },
  { id: 3, name: 'Samuel Green', role: 'Lead Developer', image: '/images/team/developer.webp' },
];


const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <div className="pt-48 pb-24 text-center"> 
        <h1 className="text-5xl font-bold mb-12">Meet Our Team</h1> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-12"> 
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-800 rounded-lg shadow-lg p-8"> 
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-6" 
              />
              <div className="text-xl font-bold mb-4">{member.name}</div>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
