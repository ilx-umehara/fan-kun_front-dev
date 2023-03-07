import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Top from './components/pages/Top';
import ApplicantsListPage from './components/pages/ApplicantsListPage';
import ApplicantsDetailPage from './components/pages/ApplicantsDetailPage';
import ApplicantsDetailPage2 from './components/pages/ApplicantsDetailPage2';
import ApplicantsRegistPage from './components/pages/ApplicantsRegistPage';
import WebEntryPage from './components/pages/WebEntryPage';
import WebEntryBasicInfoPage from './components/pages/WebEntryBasicInfoPage';
import WebEntryNc2Page from './components/pages/WebEntryNc2Page';





function Routing() {
  return (
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/top" exact element={<Top />} />
        <Route path="/oubo_list" exact element={<ApplicantsListPage/> } />
        <Route path="/oubo_detail" exact element={<ApplicantsDetailPage />}>
          <Route path=":appli_id" element={<ApplicantsDetailPage />} />
        </Route>
        <Route path="/oubo_detail2" exact element={<ApplicantsDetailPage2 />}>
          <Route path=":appli_id" element={<ApplicantsDetailPage2 />} />
        </Route>
        <Route path="/oubo_regist" exact element={<ApplicantsRegistPage />} />
        <Route path="/web_entry" exact element={<WebEntryPage />}/>
        <Route path="/web_entry/basic_info" exact element={<WebEntryBasicInfoPage />}/>
        <Route path="/web_entry/nc_2" exact element={<WebEntryNc2Page />}/>
        {/* <Route path="/web_entry/confirm" exact element={<WebEntryBasicInfoPage />}/> */}
        {/* <Route path="/web_entry" exact element={<WebEntryPage />}>
        <Route path="/web_entry" exact element={<WebEntryPage />}>
        <Route path="/web_entry" exact element={<WebEntryPage />}>
        <Route path="/web_entry" exact element={<WebEntryPage />}> */}
      </Routes>
  );
}

export default Routing;
