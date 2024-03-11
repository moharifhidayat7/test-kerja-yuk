'use client'

import { PiBellBold } from 'react-icons/pi';
import UserInfo from './components/UserInfo';
import TodayActivity from './components/TodayActivity';
import News from './components/News';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="font-bold text-2xl text-red-600">
          KerjaYuk!
        </div>
        <div>
          <Link href="/notifications">
                <PiBellBold className="text-2xl hover:text-red-600"/>
          </Link>
        </div>
      </div>
      <div className="mb-4">
        Hi, Good Morning!
      </div>
      <UserInfo />
      <TodayActivity />
      <News className="mb-4"/>
      <div className="p-6 shadow-md rounded-2xl bg-white" style={{marginBottom: '4rem'}}>
        <div className="grid grid-cols-9">
          {Array.from({length: 9}).map((_, index) => (
            <div key={index} className="w-12">
              <div className="w-12 h-12 rounded-full mr-4 relative overflow-hidden border-solid border-2">
                <Image
                  src="https://i.pravatar.cc/300"
                  alt="User Avatar"
                  fill
                />
              </div>
              <div className="font-bold text-xs text-center">
                Name
              </div>
              <div className="text-xs text-center">
                Role
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
