import Navbar from "../../components/navbar/Navbar";
import BannerFeelYourShoes from "../../components/bannerFeelYourShoes/BannerFeelYourShoes";
import BannerFreeShipping from "../../components/bannerFreeShipping/BannerFreeShipping";
import GalacticaTeam from "../../components/galacticaTeam/GalacticaTeam";
import BannerCircularity from "../../components/bannerCircularity/BannerCircularity";
import LinksFooter from "../../components/linksFooter/LinksFooter";
import Footer from "../../components/footer/footer";
import HighlightSection from "../../components/highlightSection/HighlightSection";

function MainPage() {
  return (
    <div className="mainPage">
      <Navbar />
      <BannerFeelYourShoes />
      <HighlightSection/>
      <BannerFreeShipping />
      <GalacticaTeam />
      <BannerCircularity />
      <LinksFooter />
      <Footer />
    </div>
  );
}

export default MainPage;
