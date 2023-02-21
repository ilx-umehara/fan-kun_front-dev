import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Top from './components/pages/Top';
import ApplicantsListPage from './components/pages/ApplicantsListPage';
import ApplicantsDetailPage from './components/pages/ApplicantsDetailPage';
import ApplicantsRegistPage from './components/pages/ApplicantsRegistPage';
import WebEntry from './components/pages/WebEntryPage';



function Routing() {
  return (
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/top" exact element={<Top />} />
        <Route path="/oubo_list" exact element={<ApplicantsListPage/> } />
        <Route path="/oubo_detail" exact element={<ApplicantsDetailPage />}>
          <Route path=":appli_id" element={<ApplicantsDetailPage />} />
        </Route>
        <Route path="/oubo_regist" exact element={<ApplicantsRegistPage />} />
        <Route path="/web_entry" exact element={<WebEntry />} />
      </Routes>
  );
}

export default Routing;
