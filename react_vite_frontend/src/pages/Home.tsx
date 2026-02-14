import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

type HomeProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = ({ isDark, setIsDark }: HomeProps) => {
    return (
        <div className='Navigation'>
            <Navbar onToggle={() => setIsDark(v => !v)} />
        </div>
    );
};

export default Home;