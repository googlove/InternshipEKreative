import React from "react";
import {Route, Routes} from "react-router";
import PageWrapper from "../common/components/base/PageWrapper/PageWrapper";
import "./App.scss";

const HomePage = React.lazy(() => import("../common/pages/HomePage/HomePage"));
const AboutUsPage = React.lazy(() => import("../common/pages/AboutUsPage/AboutUsPage"));
const PricingPage = React.lazy(() => import("../common/pages/PricingPage/PricingPage"));
const ComingSoonPage = React.lazy(() => import("../common/pages/ComingSoonPage/ComingSoonPage"));

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper/>}>
      <Route path="/" index element={<HomePage/>}/>
      <Route path="/aboutUs" element={<AboutUsPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="*" element={<ComingSoonPage/>}/>
    </Route>
  </Routes>
);

export default App;
