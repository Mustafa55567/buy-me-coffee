import { Footer, Navbar, Transactions, Welcome } from "./Components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Transactions/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
