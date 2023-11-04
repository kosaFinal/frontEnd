import Footer from "../Footer";
import Header from "../Header";
import UserNav from "./UserNav";
import "./User.css";

const User = () => {
  return (
    <user>
      <Header />
      <UserNav />
      <div className="user_index"></div>
      <Footer />
    </user>
  );
};
export default User;
