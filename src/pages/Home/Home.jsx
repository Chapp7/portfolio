import { Footer, Navbar } from "../../containers";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
};

export default Home;
