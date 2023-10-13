import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Login from "./routes/User/Login";
import Admin from "./routes/Admin";
import SignUp from "./routes/User/SignUp";
import SignUpAd from "./routes/User/SignUpAd";
import FindPw from "./routes/User/FindPw";
import ChangePw from "./routes/User/ChangePw";
import InstanceDetail from "./routes/Instance/InstanceDetail";
import CreateInstance from "./routes/Instance/CreateInstance";
import InboundRules from "./routes/Instance/InboundRules";
import ServerResources from "./routes/Server/ServerResources";
import CreateServer from "./routes/Server/CreateServer";
import Lecture from "./routes/Lecture/Lecture";
import CreateLecture from "./routes/Lecture/CreateLecture";
import StudentAdministration from "./routes/Lecture/StudentAdministration";
import LecturesHome from "./routes/Lecture/LecturesHome";
import Notices from "./routes/Lecture/Notices";
import Instances from "./routes/Lecture/Instances";
import NoticeDetail from "./routes/Lecture/NoticeDetail";
import CreateNotice from "./routes/Lecture/CreateNotice";
import Enrolment from "./routes/Lecture/Enrolment";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/login/signUp" exact element={<SignUp />} />
        <Route path="/login/signUpAd" exact element={<SignUpAd />} />
        <Route path="/login/findPw" exact element={<FindPw />} />
        <Route path="/login/findPw/changePw" exact element={<ChangePw />} />

        <Route path="/studentAdministration" exact element={<StudentAdministration />} />
        <Route path="/serverResources" exact element={<ServerResources />} />
        <Route path="/createServer" exact element={<CreateServer />} />
        <Route path="/createLecture" exact element={<CreateLecture />} />
        <Route path="/lecturesHome" exact element={<LecturesHome />} />
        <Route path="/enrolment" exact element={<Enrolment />} />
        <Route path="/:lectureId" exact element={<Lecture />} />
        <Route path="/:lectureId/notice" exact element={<Notices />} />
        <Route path="/:lectureId/notice/createNotice" exact element={<CreateNotice />} />
        <Route path="/:lectureId/notice/:noticeId" exact element={<NoticeDetail />} />
        <Route path="/:lectureId/instances" exact element={<Instances />} />
        <Route path="/:lectureId/instanceDetail" exact element={<InstanceDetail />} />
        <Route path="/:lectureId/instanceDetail/inboundRules" exact element={<InboundRules />} />
        <Route path="/:lectureId/instanceDetail/createInstance" exact element={<CreateInstance />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
