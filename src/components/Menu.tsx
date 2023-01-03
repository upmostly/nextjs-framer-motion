import { AnimatePresence, motion, Variants } from 'framer-motion';
import { WithChildrenProps } from '../types';
import { FaCog, FaHome, FaUsers } from 'react-icons/fa';
import { useState } from 'react';

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
    const icons = [FaHome, FaUsers, FaCog];
    return (
        <nav className="flex h-full w-24 flex-col items-center justify-center gap-4 bg-stone-900 text-3xl text-white">
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
        </nav>
    );
}
