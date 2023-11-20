import { useEffect, useState } from "react";
import Footer from "../Footer";
import { reservationCancle } from "../apis/UserReservation";
import UserNav from "./UserNav";
import "./UserReservationStatusCancle.css";
import { addAuthHeader } from "../apis/axiosConfig";

const UserReservationStatusCancle = () => {
  const [cancleReason, setCancleReason] = useState({});
  useEffect(() => {
    const cancleReservationCancle = async () => {
      try {
        addAuthHeader();
        const response = await reservationCancle();
        setCancleReason(response.data.data);
        console.log("성공 : ", response.data);
      } catch (error) {
        console.error("실패", error);
      }
    };
    cancleReservationCancle();
  }, []);
  return (
    <userreservationstatuscancle>
      <UserNav />
      <div className="status_cancle_form">
        <div className="status_cancle_img">
          <img src="/assets/sorry.png" />
        </div>
        <div className="status_cancle_text">
          <h1>
            죄송합니다.
            <br />
            <br />
            {cancleReason.cancleContent}
          </h1>
          <h5>{cancleReason.cafeTel}</h5>
        </div>
      </div>
      <Footer />
    </userreservationstatuscancle>
  );
};
export default UserReservationStatusCancle;
