import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        name: 'Ana Riswati',
        created: '30 Mei 2022',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
    },
    {
        name: 'Arya',
        created: '30 Mei 2022',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
    },
    {
        name: 'Dian',
        created: '30 Mei 2022',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
    },
]

const News = (props) => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        arrows: false,
      };
    
    return (
        <div className={props.className}>
            <div className="font-bold text-xl">
            PCS News
            </div>
            <Slider {...settings} className="news-slider">
                {data.map((item, index) => (
                    <div key={index} className="p-6 shadow-lg rounded-2xl bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full mr-4 relative overflow-hidden">
                                    <Image
                                        src="https://i.pravatar.cc/300"
                                        alt="User Avatar"
                                        fill
                                    />
                                </div>
                                <div className="font-bold text-red-500">{item.name}</div>
                            </div>
                            <div className="text-sm">
                                <div>Senin</div>
                                <div>{item.created}</div>
                            </div>
                        </div>
                        <div className="h-24 overflow-hidden text-sm">
                            {item.content}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default News;