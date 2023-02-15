import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Top from './pages/Top';
import ApplicantsRegistPage from './components/pages/ApplicantsRegistPage';
import ApplicantsDetailPage from './components/pages/ApplicantsDetailPage';



function Routing() {
  return (
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/top" exact element={<Top />} />
        <Route path="/oubo_regist" exact element={<ApplicantsRegistPage />} />
        <Route path="/oubo_detail" exact element={<ApplicantsDetailPage />} />
      </Routes>
  );
}

export default Routing;
