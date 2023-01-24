import { WithChildrenProps } from '../types';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export function Dashboard() {
    return (
        <div className="z-10 grid h-full w-full grid-cols-3 grid-rows-3 shadow">
            <UsageCard />
        </div>
    );
}

const ProgressBarVariants = {
    hide: { width: 0 },
    show: (w: string) => {
        return {
            width: w,
        };
    },
};

function InnerProgressBar({
    className,
    value,
}: {
    className: string;
    value: number;
}) {
    return (

    );
}

function ModeCard() {}

function UsageCard() {
    return (
        <Card className="flex flex-col items-center justify-between">
            <h2 className="flex grow items-center justify-center text-3xl font-bold">
                RAM Usage
            </h2>
            <motion.div
                className="my-12 flex h-6 w-full flex-row"
                initial="hide"
                animate="show"
                transition={{ staggerChildren: 0.2 }}>
                <InnerProgressBar className="bg-stone-900" value={0.61} />
                <InnerProgressBar className="bg-stone-600" value={0.31} />
                <InnerProgressBar
                    className="bg-stone-300"
                    value={1 - 0.61 - 0.31}
                />
            </motion.div>
        </Card>
    );
}

function Card({
    className,
    children,
}: { className?: string } & WithChildrenProps) {
    return (
        <motion.div
            className={clsx(className, 'rounded-2xl bg-white p-5 shadow')}>
            {children}
        </motion.div>
    );
}
