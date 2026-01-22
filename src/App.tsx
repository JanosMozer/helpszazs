import { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { Celebration } from './components/Celebration';

const PRODUCTS = [
  { id: 1, imageSrc: '/images/snus.jpeg' },
  { id: 2, imageSrc: '/images/snus2.jpeg' },
  { id: 3, imageSrc: '/images/snus3.webp' },
];

function App() {
  const [counts, setCounts] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0,
  });
  const [showCelebration, setShowCelebration] = useState(false);
  const [purchasedAmount, setPurchasedAmount] = useState(0);

  const handleIncrement = (id: number) => {
    setCounts(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrement = (id: number) => {
    setCounts(prev => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
  };

  const handleBuy = () => {
    const total = Object.values(counts).reduce((sum, current) => sum + current, 0);

    if (total > 0) {
      setPurchasedAmount(total);
      setShowCelebration(true);
      // Reset counters "zeros the amount"
      setCounts({ 1: 0, 2: 0, 3: 0 });
    }
  };

  const closeCelebration = () => {
    setShowCelebration(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Help Szazs Fund</h1>
      </header>

      <main>
        <div className="products-grid">
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              count={counts[product.id]}
              onIncrement={() => handleIncrement(product.id)}
              onDecrement={() => handleDecrement(product.id)}
            />
          ))}
        </div>

        <div className="buy-section">
          <button className="buy-button" onClick={handleBuy}>
            Buy
          </button>
        </div>
      </main>

      {showCelebration && (
        <Celebration
          totalPacks={purchasedAmount}
          onClose={closeCelebration}
        />
      )}
    </div>
  );
}

export default App;
