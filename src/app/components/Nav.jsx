import Link from "next/link";
import { PiHouseDuotone, PiCalendarCheckDuotone, PiSignOutBold, PiFileTextDuotone, PiGearDuotone } from "react-icons/pi";

const Nav = (props) => {
    return (
        <div className="sticky bottom-0 left-0 w-full h-20 bg-white z-50">
          <nav className="flex justify-between items-center h-full px-4 relative">
            <Link href="/" className="text-gray-500 hover:text-gray-900 p-4">
              <div className="flex flex-col items-center">
                <PiHouseDuotone className="h-8 w-8" />
                <span className="text-xs">Home</span>
              </div>
            </Link>
            <Link href="/attendace" className="text-gray-500 hover:text-gray-900 p-4">
              <div className="flex flex-col items-center">
                <PiCalendarCheckDuotone className="h-8 w-8" />
                <span className="text-xs">Attendance</span>
              </div>
            </Link>
            <Link href="/checkout" className="text-white relative">
              <div className="relative">
                <div className="w-16 h-16 rounded-full m-auto bg-red-600 flex items-center absolute shadow-lg" style={{top: '-4rem'}}>
                  <div className="flex flex-col items-center mx-auto">
                    <PiSignOutBold className="h-8 w-8 mx-auto" />
                  </div>
                </div>
                <span className="text-xs text-red-600 font-bold">Check Out</span>
              </div>
            </Link>
            <Link href="/form" className="text-gray-500 hover:text-gray-900 p-4">
              <div className="flex flex-col items-center">
                <PiFileTextDuotone className="h-8 w-8" />
                <span className="text-xs">Form</span>
              </div>
            </Link>
            <Link href="/setting" className="text-gray-500 hover:text-gray-900 p-4">
              <div className="flex flex-col items-center">
                <PiGearDuotone className="h-8 w-8" />
                <span className="text-xs">Setting</span>
              </div>
            </Link>
          </nav>
        </div>
    )
}

export default Nav;