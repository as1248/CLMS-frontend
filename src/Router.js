import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Main from "./routes/Main";
import Login from "./routes/User/Login";
import Admin from "./routes/Admin";
import SignUp from "./routes/User/SignUp";
import SignUpAd from "./routes/User/SignUpAd";
import FindPassword from "./routes/User/FindPassword";
import ChangePassword from "./routes/User/ChangePassword";
import InstanceDetail from "./routes/Instance/InstanceDetail";
import CreateInstance from "./routes/Instance/CreateInstance";
import InboundRules from "./routes/Instance/InboundRules";
import Documents from "./routes/Documents";
import DocsVersions from "./routes/Documents/Info/DocsVersions";
import DocsGithub from "./routes/Documents/Info/DocsGithub";
import DocsContributors from "./routes/Documents/Info/DocsContributors";
import DocsCreateLecture from "./routes/Documents/Role_Manager/DocsCreateLecture";
import DocsCreateServer from "./routes/Documents/Role_Manager/DocsCreateServer";
import DocsConnectDomain from "./routes/Documents/Role_User/DocsConnectDomain";
import DocsConnectInstance from "./routes/Documents/Role_User/DocsConnectInstance";
import DocsCreateInstance from "./routes/Documents/Role_User/DocsCreateInstance";
import DocsEnrolment from "./routes/Documents/Role_User/DocsEnrolment";

const LecturesHome = lazy(()=>import("./routes/Lecture/LecturesHome"));
const Enrolment = lazy(()=>import("./routes/Lecture/Enrolment"));
const CreateServer = lazy(()=>import("./routes/Server/CreateServer"));
const CreateLecture = lazy(()=>import("./routes/Lecture/CreateLecture"));
const Lecture = lazy(()=>import("./routes/Lecture/Lecture"));
const Instances = lazy(()=>import("./routes/Lecture/Instances"));
const Notices = lazy(()=>import("./routes/Lecture/Notices"));
const NoticeDetail = lazy(()=>import("./routes/Lecture/NoticeDetail"));
const CreateNotice = lazy(()=>import("./routes/Lecture/CreateNotice"));
const ApproveEnrolment = lazy(()=>import("./routes/Lecture/ApproveEnrolment"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback ={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/login/signUp" exact element={<SignUp />} />
          <Route path="/login/signUpAd" exact element={<SignUpAd />} />
          <Route path="/login/findPassword" exact element={<FindPassword />} />
          <Route path="/login/findPassword/changePassword" exact element={<ChangePassword />} />

          <Route path="/documents/" exact element={<Documents />} />
          <Route path="/documents/versions" exact element={<DocsVersions />} />
          <Route path="/documents/github" exact element={<DocsGithub />} />
          <Route path="/documents/contributors" exact element={<DocsContributors/>} />
          <Route path="/documents/createLecture" exact element={<DocsCreateLecture />} />
          <Route path="/documents/createServer" exact element={<DocsCreateServer />} />
          <Route path="/documents/connectDomain" exact element={<DocsConnectDomain />} />
          <Route path="/documents/connectInstance" exact element={<DocsConnectInstance />} />
          <Route path="/documents/createInstance" exact element={<DocsCreateInstance/>} />
          <Route path="/documents/enrolment" exact element={<DocsEnrolment />} />

          <Route path="/createServer" exact element={<CreateServer />} />
          <Route path="/createLecture" exact element={<CreateLecture />} />
          <Route path="/lecturesHome" exact element={<LecturesHome />} />
          <Route path="/enrolment" exact element={<Enrolment />} />
          <Route path="/:lectureId" exact element={<Lecture />} />
          <Route path="/:lectureId/approveEnrolment" exact element={<ApproveEnrolment />} />
          <Route path="/:lectureId/notice" exact element={<Notices />} />
          <Route path="/:lectureId/notice/createNotice" exact element={<CreateNotice />} />
          <Route path="/:lectureId/notice/:noticeId" exact element={<NoticeDetail />} />
          <Route path="/:lectureId/instances" exact element={<Instances />} />
          <Route path="/:lectureId/instanceDetail" exact element={<InstanceDetail />} />
          <Route path="/:lectureId/instanceDetail/inboundRules" exact element={<InboundRules />} />
          <Route path="/:lectureId/instanceDetail/createInstance" exact element={<CreateInstance />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
