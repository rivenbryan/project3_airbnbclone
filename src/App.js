import './app.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import CardData from './data'
const App = () => {
  const Cards = CardData.map(card => {
    
    return <Card 
              key={card.id} 
              imagelink={card.coverImg} 
              rating={card.stats.rating} 
              reviewCount= {card.stats.reviewCount} 
              country={card.country}
              title={card.title}
              price={card.price}
              spots={card.openSpots}
            />
  })

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="card--container">
          {Cards}
      </section>
    </div>
  )
}


export default App;
