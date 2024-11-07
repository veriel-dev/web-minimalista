export const configAnimate = {
    animateHeroSecion: {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
    },
    animateStatsSection: {
        animate: {
            opacity: 0,
            y: 20,
        },
        whileInView: {
            opacity: 1,
            y: 0,
        },
        viewport: {
            once: true,
        },
    },
};