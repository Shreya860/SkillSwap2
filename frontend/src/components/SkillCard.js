import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SkillCard({ user }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-24 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute -bottom-10 left-4">
          <div className="rounded-full border-4 border-white overflow-hidden bg-white">
            <Image 
              src={user.avatar} 
              alt={user.name} 
              width={80} 
              height={80} 
            />
          </div>
        </div>
      </div>
      
      <div className="pt-12 pb-6 px-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded text-xs font-semibold text-yellow-700">
            <span>★ {user.rating}</span>
            <span className="ml-1 text-gray-400">({user.reviews})</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{user.bio}</p>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Teaching</p>
            <div className="flex flex-wrap gap-2">
              {user.teaching.slice(0, 3).map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Learning</p>
            <div className="flex flex-wrap gap-2">
              {user.learning.slice(0, 3).map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Link 
          href={`/profile/${user.id}`}
          className="block w-full mt-6 py-2 bg-gray-900 text-white text-center rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
}
