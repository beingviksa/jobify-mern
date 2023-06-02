import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ipsa
              aspernatur. Repellat error sequi reiciendis non quo quidem
              voluptatem ut laborum, natus praesentium laudantium ipsa ducimus
              at! Adipisci necessitatibus aperiam harum eum nisi quidem,
              voluptatum totam nam vitae corrupti molestiae illo esse laboriosam
              dolorum cupiditate consequuntur. Molestias voluptas at provident.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
