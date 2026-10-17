import Hero from './components/Hero';
import Gallery from './components/Gallery';
import LocationCard from './components/LocationCard';
import RsvpForm from './components/RsvpForm';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <div className="page__inner">
        <Hero />
        <Gallery />
        <LocationCard />
        <RsvpForm />
        <footer className="footer">Vă așteptăm cu drag ♥</footer>
      </div>
    </div>
  );
}
