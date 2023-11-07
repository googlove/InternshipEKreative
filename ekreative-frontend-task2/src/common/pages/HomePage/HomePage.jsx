import Blog from "../../components/sections/Blog/Blog";
import Faq from "../../components/sections/Faq/Faq";
import Features from "../../components/sections/Features/Features";
import HomeHeader from "../../components/sections/HomeHeader/HomeHeader";
import HowWeWork from "../../components/sections/HowWeWork/HowWeWork";
import InquiryForm from "../../components/sections/InquiryForm/InquiryForm";
import OurProjects from "../../components/sections/OurProjects/OurProjects";
import Reviews from "../../components/sections/Reviews/Reviews";

const HomePage = () => (
  <main>
    <HomeHeader/>
    <HowWeWork/>
    <OurProjects/>
    <Features/>
    <Reviews/>
    <Faq/>
    <InquiryForm/>
    <Blog/>
  </main>
);

export default HomePage;