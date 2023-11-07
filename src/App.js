import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import UserMypage from "./User/UserMypage";
import UserMyInfo from "./User/UserMyInfo";
import EmptyRegister from "./Manager/EmptyRegister";
import ManagerUpdateStudySetting from "./Manager/ManagerUpdateStudySetting";
import ManagerUpdateDetail from "./Manager/ManagerUpdateDetail";
import ManagerUpdateBasic from "./Manager/ManagerUpdateBasic";
import ManagerUpdate from "./Manager/ManagerUpdate";
import UserReservation from "./User/UserReservation";

function App() {
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

        {/* <Route path="/manager/update" element={<ManagerUpdate />} />
        <Route path="/manager/updatebasic" element={<ManagerUpdateBasic />} />
        <Route path="/manager/updatedetail" element={<ManagerUpdateDetail />} />
        <Route path="/manager/updatesetting" element={<ManagerUpdateStudySetting />} /> */}

        <Route path="/user/search" element={<UserSearch />} />

        <Route path="/user/find" element={<UserFind />} />
        <Route
          path="/user/reservationstatus"
          element={<UserReservationStatus />}
        />
        <Route path="/user/mypage" element={<UserMypage />} />
        <Route path="/user/myinfo" element={<UserMyInfo />} />
        <Route path="/user/myreservation" element={<UserMyReservation />} />
        <Route path="/user/reservation" element={<UserReservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
