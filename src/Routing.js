import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Top from './pages/Top';
import OuboRegist from './pages/OuboRegist';
import OuboDetailNc from './pages/OuboDetailNc';
import OuboDetailOs from './pages/OuboDetailOs';


function Routing() {
  return (
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/top" exact element={<Top />} />
        <Route path="/oubo_regist" exact element={<OuboRegist />} />
        <Route path="/oubo_detail_nc" exact element={<OuboDetailNc />} />
        <Route path="/oubo_detail_os" exact element={<OuboDetailOs />} />
      </Routes>
  );
}

export default Routing;
