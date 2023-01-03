import { AnimatePresence, motion, Variants } from 'framer-motion';
import { WithChildrenProps } from '../types';
import {
    FaArrowLeft,
    FaArrowRight,
    FaCog,
    FaCross,
    FaDesktop,
    FaHome,
    FaUsers,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

type IconLinkProps = WithChildrenProps;

const iconBackgroundVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

type AnimatedIconLinkProps = IconLinkProps & {
    currentIndex: number | null;
    index: number;
    onEnter: (index: number | null) => void;
};

export function AnimatedIconLink({
    children,
    currentIndex,
    index,
    onEnter,
}: AnimatedIconLinkProps) {
    return (
        <li
            onMouseEnter={() => onEnter(index)}
            key={index}
            className="relative flex items-center justify-center overflow-visible rounded p-2 text-xl transition-all">
            <AnimatePresence>
                {index === currentIndex && (
                    <motion.div
                        className="absolute mx-auto h-full w-full rounded bg-primary"
                        layoutId="social"
                        key="social"
                        variants={iconBackgroundVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    />
                )}
            </AnimatePresence>
            <div className="relative z-10">{children}</div>
        </li>
    );
}

export function Menu() {
    const [social, setSocial] = useState<number | null>(null);
    const [open, setOpen] = useState(true);
    const icons = [FaHome, FaUsers, FaCog];

    useEffect(() => {
        console.log(open);
    }, [open]);

    return (
        <motion.nav
            className="flex h-full w-fit flex-col items-center justify-between gap-4 bg-stone-900 py-10 px-5 text-3xl text-white"
            layout>
            {open ? (
                <div className="flex h-full w-full flex-col items-center justify-between">
                    <FaDesktop className="text-xl" />
                    <menu
                        className="flex flex-col items-center justify-center gap-4 text-3xl text-white"
                        onMouseLeave={() => setSocial(null)}>
                        {icons.map((Icon, i) => (
                            <AnimatedIconLink
                                index={i}
                                key={i}
                                currentIndex={social}
                                onEnter={setSocial}>
                                <Icon />
                            </AnimatedIconLink>
                        ))}
                    </menu>
                    <button
                        className="p-4 text-xl"
                        onClick={() => setOpen(false)}>
                        <FaArrowLeft />
                    </button>
                </div>
            ) : (
                <div className="flex h-full items-center justify-center">
                    <button className="text-xl" onClick={() => setOpen(true)}>
                        <FaArrowRight />
                    </button>
                </div>
            )}
        </motion.nav>
    );
}
