import Image from 'next/image';

const data = {
    name: 'Tabay',
    role: 'UI/UX Designer',
    joined: '01 Juni 2022',
    location: 'Kantor Sahid'
}

const UserInfo = (props) => {
    return (
        <div className={`p-6 shadow-md rounded-2xl bg-gradient-to-r from-red-600 to-pink-700 mb-6 text-white ${props.className}`}>
            <div className="flex items-start justify-between pb-8">
                <div className="flex items-start justify-start">
                    <div className="w-16 h-16 rounded-full mr-4 relative overflow-hidden">
                        <Image
                            src="https://i.pravatar.cc/300"
                            alt="User Avatar"
                            fill
                        />
                    </div>
                    <div>
                        <div className="font-bold text-lg">{data.name}</div>
                        <div className="text-xs italic">{data.role}</div>
                    </div>
                </div>
                <div className="text-right mt-2">
                    <div className="text-xs italic">Member Since</div>
                    <div className="text-md font-bold">{data.joined}</div>
                </div>
            </div>
            <div className="flex items-end justify-between">
                <div>
                    <div className="text-sm">Location</div>
                    <div className="font-bold">{data.location}</div>
                </div>
                <div className="text-right mt-2">
                    <span className="italic font-light text-sm">ICO</span>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;