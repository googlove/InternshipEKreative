import AboutUsHeader from "../../components/sections/AboutUsHeader/AboutUsHeader";
import MissionAndVision from "../../components/sections/MissionAndVision/MissionAndVision";
import OurBenefits from "../../components/sections/OurBenefits/OurBenefits";
import OurProcess from "../../components/sections/OurProcess/OurProcess";
import OurTeam from "../../components/sections/OurTeam/OurTeam";
import WhoWeAre from "../../components/sections/WhoWeAre/WhoWeAre";

const AboutUsPage = () => (
  <main>
    <AboutUsHeader/>
    <WhoWeAre/>
    <OurProcess/>
    <MissionAndVision/>
    <OurBenefits/>
    <OurTeam/>
  </main>
);

export default AboutUsPage;