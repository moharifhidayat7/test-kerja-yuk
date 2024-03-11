import { PiArrowLeftBold } from 'react-icons/pi'
import Link from 'next/link';

export default function NotificationLayout({ children }) {
  return (
    <div>
        <div className="sticky top-0 left-0 flex justify-start items-center p-6 bg-white shadow-md w-full">
            <Link href ="/">
                <div className='mr-8'>
                    <PiArrowLeftBold size={24}/>
                </div>
            </Link>
            <div className="font-bold text-2xl text-red-600">
                Notificaton!
            </div>
        </div>
        {children}
    </div>
  );
}
