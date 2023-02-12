import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <section>
      {/* <button onClick={logoutUser} href="/login">
        Logout
      </button> */}

      {user && <UserInfo user={user} />}
      <h1>You are on home page!</h1>
    </section>
  );
};

export default Home;
