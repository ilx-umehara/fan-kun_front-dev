import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Top from './pages/Top';
import OuboRegist from './pages/OuboRegist';
import OuboDetail from './pages/OuboDetail';



function Routing() {
  return (
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/top" exact element={<Top />} />
        <Route path="/oubo_regist" exact element={<OuboRegist />} />
        <Route path="/oubo_detail" exact element={<OuboDetail />} />
      </Routes>
  );
}

export default Routing;
