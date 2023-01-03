import Head from 'next/head';

export default function Home() {
    return (
        <div className="dark flex min-h-screen w-full items-center justify-center">
            <Head>
                <title>Hello World!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>hi!</main>
        </div>
    );
}
