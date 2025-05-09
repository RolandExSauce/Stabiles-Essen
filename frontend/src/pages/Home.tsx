import ComingSoon from "./layout/ComingSoon";
import "./styles/Home.css";

//Home view, not sure what should come here yet
const Home = () => {

  const featureIsComing = true;

  return (
    <div>
      {featureIsComing ? (
        <ComingSoon comingSoonDate="20.07.2025" />
      ) : (
        <div>home</div>
      )}
    </div>
  );
};

export default Home;
