import Head from "next/head";
import Link from "next/link";
import Lottie from "react-lottie";
import * as giftLottie from "../animations/gift.json";

export default function Home() {
    return (
        <>
            <Head>
                <title>Happy birthday mamiii</title>
                <meta name="description" content="Mami's 56 birthday" />
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎉</text></svg>"
                />
            </Head>
            <div className="absolute h-screen w-screen overflow-hidden">
                <video
                    className="absolute h-full left-2/4 transform -translate-x-2/4"
                    autoPlay
                    muted
                    loop
                    id="myVideo"
                >
                    <source src="/coach-bg.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div className="relative flex flex-col justify-center items-center h-screen">
                <div className="fixed top-0">
                    <Lottie
                        options={{
                            autoplay: true,
                            hover: true,
                            background: "transparent",
                            speed: 1,
                            loop: false,
                            animationData: giftLottie,
                        }}
                    />
                </div>

                <h1 className="text-5xl leading-snug text-black uppercase text-center font-bold">
                    Mami got a message
                </h1>
                <Link href="/card" passHref>
                    <a className="animate-bounce fixed bottom-0 py-2 my-10 uppercase bg-pink-200 border-2 rounded-none border-solid border-black text-2xl text-center w-48 mx-auto">
                        Open
                    </a>
                </Link>
            </div>
        </>
    );
}
