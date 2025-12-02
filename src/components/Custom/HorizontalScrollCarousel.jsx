import { motion, useTransform, useScroll } from "framer-motion";
import { Dot } from "lucide-react";
import { useRef } from "react";
import Wrapper from "../Global/Wrapper";
import aboutPicOne from "../../../asset/Business Handshake.png"
import aboutPicTwo from "../../../asset/Futuristic VR Explorer.png"
import aboutPicThree from "../../../asset/Delivery Team at Work.png"

const Example = () => {
    return (
        <div className="">


            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["50%", "-40%"]);

    return (
        <section ref={targetRef} className="relative h-[700vh] ">
            <Wrapper className={` pt-24`}>

                <div className="flex flex-col items-start justify-between h-[20vh] w-1/2 ">
                    <span className="flex">
                        <Dot />
                        <p>About Us</p>
                    </span>
                    <span className="font-semibold text-5xl">
                        Virtual Armies - Experience Delivers Solution
                    </span>
                </div>
            </Wrapper>
            <div className="sticky top-0 flex flex-col gap-24 justify-center h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-24">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    const bgStyles =
        card.bgType === "image"
            ? {
                backgroundImage: `url(${card.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }
            : {
                backgroundColor: card.color ?? "#1f2937",
            };

    return (
        <div
            className="group relative h-[60vh] min-w-[50vw] overflow-hidden rounded-lg shadow-lg"
        >
            <div
                style={bgStyles}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                <h2 className="text-5xl font-bold text-white">{card.title}</h2>
                <p className="mt-4 text-lg text-white/80 max-w-xl leading-relaxed">
                    {card.description}
                </p>
            </div>
        </div>
    );
};


export default Example;

const cards = [
    {
        id: 1,
        title: "Excellence",
        bgType: "image",
        url: aboutPicOne,
        description:
            "We deliver superior solutions with precision and quality, ensuring our clients consistently receive results that exceed expectations.",
    },
    {
        id: 2,
        title: "Integrity",
        bgType: "color",
        color: "#1E293B", // slate-800
        description:
            "We operate with honesty, transparency, and accountability—building long-lasting trust with every client partnership.",
    },
    {
        id: 3,
        title: "Innovation",
        bgType: "image",
        url: aboutPicTwo,
        description:
            "We embrace creativity and forward thinking, constantly improving processes and driving greater efficiency for our clients.",
    },
    {
        id: 4,
        title: "Government Contracting Services",
        bgType: "color",
        color: "#0F172A", // slate-900
        description:
            "Our experienced team provides tailored solutions to meet government requirements and deliver measurable operational results.",
    },
    {
        id: 5,
        title: "Business Development Services",
        bgType: "image",
        url: aboutPicThree,
        description:
            "We empower clients with strategy, communication, and execution—helping them seize opportunities and achieve sustainable growth.",
    },
];