import Header from './Header';
import Footer from './Footer';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <Header />
      <main style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <ProfileCard name="Alice" role="Project Manager" />
        <ProfileCard name="Bob" role="Lead Developer" />
        <ProfileCard name="Charlie" role="UI/UX Designer" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
