import styles from './App.module.css';
import './components/card-tarif';
import Card from './components/card-tarif';

const cards = [
  { id: "1", 
    price: "300", 
    speed: "10" },
  
  { id: "2", 
    price: "450", 
    speed: "50" },
  
  { id: "3", 
    price: "500", 
    speed: "100"},
    
  { id: "4", 
    price: "1000", 
    speed: "200" },
  ];



function App() {
  return (
    <div className={styles.App}>
      {
      cards.map((card, i) => (
        <Card
          price={card.price}
          key={card.id}
          speed={card.speed}
          isSelected={i === 2}
          pressed={card.price > 400}
        />
      ))}
    </div>
  );
}

export default App;
