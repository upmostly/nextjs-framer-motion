import Head from 'next/head';
import { Menu } from '@/components/Menu';
import clsx from 'clsx';
import { title } from '../fonts';
import { Dashboard } from '@/components/Dashboard';
import { WithChildrenProps } from '../types';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div
            className={clsx(
                'dark flex min-h-screen w-full items-center justify-center',
                title.className
            )}>
            <Head>
                <title>Hello World!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex h-screen w-full flex-row">
                <Menu />
                <Dashboard />
            </main>
        </div>
    );
}
