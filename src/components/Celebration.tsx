import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface CelebrationProps {
    totalPacks: number;
    onClose: () => void;
}

const MESSAGES = ['Nice', 'Great', 'Good job'];

export const Celebration: React.FC<CelebrationProps> = ({ totalPacks, onClose }) => {
    const message = React.useMemo(() => {
        const randomIndex = Math.floor(Math.random() * MESSAGES.length);
        return MESSAGES[randomIndex];
    }, []);

    useEffect(() => {
        // Fire confetti
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#D4AF37', '#ffffff', '#000000'] // Gold, White, Black
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#D4AF37', '#ffffff', '#000000']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }, []);

    return (
        <div className="celebration-overlay" onClick={onClose}>
            <div className="celebration-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="celebration-title">{message}</h2>
                <p className="celebration-text">
                    You supported Szazs with <strong>{totalPacks}</strong> packs of snus
                </p>
                <button className="celebration-close-btn" onClick={onClose}>
                    Awesome
                </button>
            </div>
        </div>
    );
};
