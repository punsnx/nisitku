import TopBG from "../components/Home/TopBG";
import NewsSection from "../components/Home/News";
import EventsSection from "../components/Home/Events";
import HighlightSection from "../components/Home/Highlight";
import FavroiteSection from "../components/Home/Favorite";
import StatusSection from "../components/Home/Status";

const home = () => {
  console.log("Home");
  return (
    <>
      <div className="flex-row mb-[100px]">
        {/* HOME BG IMAGE */}
        <TopBG />
        {/* STATUS */}
        <div className="w-full h-8">
          <StatusSection />
        </div>
        <div className="w-full h-32">
          <HighlightSection />
        </div>
        <div className="w-full h-16 ">
          <FavroiteSection />
        </div>
        <div className="w-full h-48">
          <NewsSection />
        </div>
        <div className="w-full h-[270px] ">
          <EventsSection />
        </div>
      </div>
    </>
  );
};
export default home;
