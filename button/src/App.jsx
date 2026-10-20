import Header from './Header';
import Footer from './Footer';
import Button from './Button';

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>Welcome to my React project!</p>
        <Button label="Click Me 1" />
        <Button label="Click Me 2" />
        <Button label="Click Me 3" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
