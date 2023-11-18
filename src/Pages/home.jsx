import TopBG from "../components/Home/TopBG";
import NewsSection from "../components/Home/News";
import EventsSection from "../components/Home/Events";
import HighlightSection from "../components/Home/Highlight";
import FavroiteSection from "../components/Home/Favorite";
import StatusSection from "../components/Home/Status";

const Home = (user) => {
  user = user.user;
  return (
    <>
      <div className="flex-row mb-[120px] space-y-2">
        {/* HOME BG IMAGE */}
        <TopBG user={user} />
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
        <div className="w-full h-56">
          <NewsSection />
        </div>
        <div className="w-full h-[270px] ">
          <EventsSection />
        </div>
      </div>
    </>
  );
};
export default Home;
