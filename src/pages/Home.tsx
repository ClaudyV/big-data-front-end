import HomeLeftSection from "../components/Home/HomeLeftSection/HomeLeftSection";
import HomeRightSection from "../components/Home/HomeRightSection/HomeRightSection";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <HomeLeftSection />
      <HomeRightSection />
    </div>
  );
};

export default Home;
