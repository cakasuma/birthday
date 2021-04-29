import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie";
import * as nextLottie from "../../animations/next.json";

export default function Card() {
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
            <Image
                src="/card_photo.jpg"
                alt="Mamiis's picture"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <Link href="/message" passHref>
                <a className="fixed bottom-0 right-0 mr-3 mb-3">
                    <Lottie
                        options={{
                            autoplay: true,
                            hover: true,
                            background: "transparent",
                            speed: 1,
                            loop: true,
                            animationData: nextLottie,
                        }}
                        width="60px"
                        height="60px"
                    />
                </a>
            </Link>
        </>
    );
}
