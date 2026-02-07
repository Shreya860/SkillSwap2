"use client";

import { mockUsers } from '@/data/mockUsers';
import SkillCard from '@/components/SkillCard';
import Navbar from '@/components/Navbar';

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Discover Mentors & Peers</h1>
            <p className="mt-2 text-gray-600">Find the perfect match for your skill exchange journey.</p>
          </div>
          
          <div className="flex gap-4">
            <select className="bg-white border border-gray-300 rounded-md py-2 px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Skills</option>
              <option>Tech</option>
              <option>Music</option>
              <option>Language</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockUsers.map((user) => (
            <SkillCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
}
