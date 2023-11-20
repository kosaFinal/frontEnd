import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Main from "./Main";
import Manager from "./Manager/Manager";
import User from "./User/User";
import Login from "./Login";
import Register from "./Register";
import ManagerCafeInfo from "./Manager/ManagerCafeInfo";
import ManagerReservation from "./Manager/ManagerReservation";
import ManagerReservationStatus from "./Manager/ManagerReservationStatus/ManagerReservationStatus";
import ManagerReservationList from "./Manager/ManagerReservationList";
import ManagerRegister from "./Manager/ManagerRegister";
import UserSearch from "./User/UserSearch";
import UserFind from "./User/UserFind";
import UserReservationStatus from "./User/UserReservationStatus";
import UserMyReservation from "./User/UserMyReservation";
import UserMyInfo from "./User/UserMyInfo";
import EmptyRegister from "./Manager/EmptyRegister";
import ManagerUpdateStudySetting from "./Manager/ManagerUpdateStudySetting";
import ManagerUpdateDetail from "./Manager/ManagerUpdateDetail";
import ManagerUpdateBasic from "./Manager/ManagerUpdateBasic";
import ManagerUpdate from "./Manager/ManagerUpdate";
import UserReservation from "./User/UserReservation";
import UserReservationStatusStatusEmpty from "./User/UserReservationStatusEmpty";
import UserReservationStatusCancle from "./User/UserReservationStatusCancle";
import UserInfoUpdate from "./User/UserInfoUpdate";
import CafeRegister from "./Manager/CafeRegister";
import CafeType from "./Manager/CafeRegister/CafeType";
import CafeImage from "./Manager/CafeRegister/CafeImage";
import CafeFeature from "./Manager/CafeRegister/CafeFeature";
import CafeStudySetting from "./Manager/CafeRegister/CafeStudySetting";
import CafeName from "./Manager/CafeRegister/CafeName";
import CafeBasic from "./Manager/CafeRegister/CafeBasic";
import { addAuthHeader } from "./apis/axiosConfig";

function App() {
  const accessToken = localStorage.getItem("accessToken") || "";
  if(accessToken !== ""){
    addAuthHeader(accessToken);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/manager/cafeinfo" element={<ManagerCafeInfo />} />
        <Route path="/manager/reservation" element={<ManagerReservation />} />
        <Route
          path="/manager/reservationstatus"
          element={<ManagerReservationStatus />}
        />
        <Route
          path="/manager/reservationlist"
          element={<ManagerReservationList />}
        />

        <Route path="/manager/emptyregister" element={<EmptyRegister />} />
        <Route path="/manager/register" element={<ManagerRegister />} />
        <Route path="/manager/updatebasic" element={<ManagerUpdateBasic />} />
        <Route path="/manager/updatedetail" element={<ManagerUpdateDetail />} />
        <Route
          path="/manager/updatesetting"
          element={<ManagerUpdateStudySetting />}
        />
        <Route path="/manager/update" element={<ManagerUpdate />}>
          <Route index element={<ManagerUpdateBasic />} />
          <Route path="updatebasic" element={<ManagerUpdateBasic />} />
          <Route path="updatedetail" element={<ManagerUpdateDetail />} />
          <Route path="updatesetting" element={<ManagerUpdateStudySetting />} />
        </Route>

        <Route path="/manager/cafe/initial" element={<CafeRegister />}>
          {/* <Route index element={<CafeRegister/>}/>
          <Route path="cafename" element={<CafeName/>}/>
          <Route path="cafetype" element={<CafeType/>}/>
          <Route path="cafebasic" element={<CafeBasic />} />
          <Route path="cafeimage" element={<CafeImage/>}/>
          <Route path="cafefeature" element={<CafeFeature/>}/>
          <Route path="cafestudysetting" element={<CafeStudySetting/>}/> */}
        </Route>

        <Route path="/user/search" element={<UserSearch />} />
        <Route path="/user/find" element={<UserFind />} />
        <Route
          path="/user/reservationstatus"
          element={<UserReservationStatus />}
        />
        <Route path="/user/myinfo" element={<UserMyInfo />} />
        <Route path="/user/myreservation" element={<UserMyReservation />} />
        <Route path="/user/reservation" element={<UserReservation />} />
        <Route
          path="/user/reservationstatus/empty"
          element={<UserReservationStatusStatusEmpty />}
        />
        <Route
          path="/user/reservationstatus/cancle"
          element={<UserReservationStatusCancle />}
        />
        <Route path="/user/myinfo/update" element={<UserInfoUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
