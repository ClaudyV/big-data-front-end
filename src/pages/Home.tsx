import HomeLeftSection from "../components/Home/HomeLeftSection/HomeLeftSection";
import HomeRightSection from "../components/Home/HomeRightSection/HomeRightSection";
import "./../styles/Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <HomeLeftSection />
      <HomeRightSection />
    </div>
  );
};

export default Home;
