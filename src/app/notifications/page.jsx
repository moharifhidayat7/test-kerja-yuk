
import { PiCoinsDuotone  } from 'react-icons/pi';

const data = [
    {
        title: "Notification 1",
        status: 'read',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Notification 2",
        status: 'unread',
        description: "Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
    {
        title: "Notification 3",
        status: 'unread',
        description: "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    },
    {
        title: "Notification 4",
        status: 'read',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Notification 5",
        status: 'unread',
        description: "Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
    {
        title: "Notification 6",
        status: 'unread',
        description: "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    },
    {
        title: "Notification 7",
        status: 'read',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Notification 8",
        status: 'unread',
        description: "Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
];

export default function Notification() {
    return (
        <>
            {data.map((item, index) => (
                <div className={`${item.status == 'read' ? 'bg-white' : 'bg-blue-300'} px-6 pt-4 flex gap-4 justify-start items-start`}>
                    <div className="rounded-lg bg-gradient-to-r from-red-600 to-pink-700 p-8">
                        <PiCoinsDuotone size={30} color="white" />
                    </div>
                    <div>
                        <div className="font-bold">
                            {item.title}
                        </div>
                        <div className='text-sm h-20 overflow-hidden'>
                            {item.description}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}