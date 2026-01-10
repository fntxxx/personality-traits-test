// pages/Home/index.jsx
import { useNavigate } from "react-router-dom";
import HomeView from "../../components/HomeView";

export default function Home({ meta }) {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/test");
    };

    return <HomeView meta={meta} onStart={handleStart} />;
}