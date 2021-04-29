import Head from "next/head";
import Image from "next/image";
import Lottie from "react-lottie";
import * as nextLottie from "../../animations/next.json";

export default function Message() {
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
            <div className="relative flex flex-col justify-center items-center h-screen bg-gray-900">
                <section className='w-full px-3 opacity-95'>
                    <blockquote className='text-white'><p className='inline text-2xl leading-normal'>"Barakallahu fii umrik, selamat ulang tahun mamiii. Smoga slalu diberikan kesehatan, rizki, ridho oleh Allah. Selalu dalam lindungannya dan dipanjangkan umurnya. Smoga tambah cayang sm k amam sama de ares dan keluarga, Aamin ya rabbal aalamiin 😘💗💗🎂"</p></blockquote>
                </section>
            </div>
        </>
    );
}
