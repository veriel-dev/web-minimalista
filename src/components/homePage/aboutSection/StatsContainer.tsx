

import { useCountAnimation } from "../../../hooks/useAnimatedCounter";
import { homePage } from "../../../locales/home";
import { Card } from "../../ui"


interface StatItemProps {
    label: string;
    value: number;
    plus: string
}

const StatItem = (({ label, value, plus }:StatItemProps) => {
        const { count, elementRef } = useCountAnimation(value, 4000);

        return (
            <div ref={elementRef}>
                <Card className="rounded-lg p-6 border-2">
                    <div className="text-3xl font-bold mb-2">
                        {count}{plus}
                    </div>
                    <div className="text-zinc-400">{label}</div>
                </Card>
            </div>
        );
    }
);

export const StatsContainer = () => {
    const { aboutSection } = homePage;

    const stats = aboutSection.stats
    return (
        <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
                <StatItem
                    key={index}
                    {...stat}
                />
            ))}
        </div>
    )
}
