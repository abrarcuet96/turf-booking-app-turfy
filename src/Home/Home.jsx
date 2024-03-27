import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-300 to-purple-400 min-h-screen">
            <NavBar></NavBar>
            <Banner></Banner>
        </div>
    );
};

export default Home;