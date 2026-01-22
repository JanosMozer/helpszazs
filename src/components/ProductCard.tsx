import React from 'react';

interface ProductCardProps {
    imageSrc: string;
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    imageSrc,
    count,
    onIncrement,
    onDecrement,
}) => {
    return (
        <div className="product-card">
            <div className="image-container">
                <img src={imageSrc} alt="Snus for Szazs" />
            </div>
            <div className="controls">
                <button
                    onClick={onDecrement}
                    className="control-btn"
                    disabled={count <= 0}
                    aria-label="Decrease quantity"
                >
                    -
                </button>
                <span className="count-display">{count}</span>
                <button
                    onClick={onIncrement}
                    className="control-btn"
                    aria-label="Increase quantity"
                >
                    +
                </button>
            </div>
        </div>
    );
};
