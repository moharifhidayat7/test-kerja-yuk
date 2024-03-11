import { PiClock, PiClockClockwise, PiClockAfternoon } from 'react-icons/pi';
const data = {
    checkIn: '08:30',
    workingHours: '03:00:00',
    checkOut: '16:30',
}

const TodayActivity = (props) => {
    return (
        <div className="mb-6">
            <div className="font-bold text-lg mb-4 ml-4">
            Today's activity
            </div>
            <div className="grid grid-cols-3 items-end">
                <div className="flex flex-col gap-2 items-center">
                    <div>
                    <PiClock className="text-red-600" size={35}/>
                    </div>
                    <div className="font-bold leading-8">{data.checkIn}</div>
                    <div className="text-sm">Check In</div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <div>
                    <PiClockClockwise className="text-red-600" size={35} /> 
                    </div>
                    <div className="font-bold leading-8 text-2xl text-red-600">{data.workingHours}</div>
                    <div className="text-sm">Working Hours</div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <div>
                    <PiClockAfternoon className="text-red-600" size={35}/>
                    </div>
                    <div className="font-bold leading-8">{data.checkOut}</div>
                    <div className="text-sm">Check Out</div>
                </div>
            </div>
        </div>
    )
}

export default TodayActivity;