"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { mockUsers } from "@/data/mockUsers";

export default function ProfilePage({ params }) {
  const { id } = use(params);
  const user = mockUsers.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            User not found
          </h1>
          <Link
            href="/discover"
            className="text-blue-600 hover:underline"
          >
            Back to Discovery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/discover"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Discovery
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-700 relative">
            <div className="absolute -bottom-16 left-8">
              <div className="rounded-full border-4 border-white overflow-hidden bg-white shadow-md">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={128}
                  height={128}
                />
              </div>
            </div>
          </div>

          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {user.name}
                </h1>
                <p className="text-lg text-gray-600">{user.role}</p>
              </div>

              <div className="mt-4 md:mt-0 flex gap-3">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                  Request Swap
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Message
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main */}
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    About Me
                  </h2>
                  <p className="text-gray-600">{user.bio}</p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <section>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">
                      🎓 I Can Teach
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {user.teaching.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium border border-green-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-blue-700 mb-3">
                      🚀 I Want to Learn
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {user.learning.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium border border-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <h3 className="font-semibold mb-2 text-orange-900">⏰ Availability</h3>
                  <p className="text-orange-800">{user.availability}</p>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                  <h3 className="font-semibold mb-3 text-yellow-900">⭐ Community Trust</h3>
                  <p className="text-3xl font-bold text-yellow-700">{user.rating}</p>
                  <p className="text-sm text-yellow-700 mt-1">
                    {user.reviews} verified reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
