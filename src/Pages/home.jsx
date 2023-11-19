import TopBG from "../components/Home/TopBG";
import NewsSection from "../components/Home/News";
import EventsSection from "../components/Home/Events";
import HighlightSection from "../components/Home/Highlight";
import FavroiteSection from "../components/Home/Favorite";
import StatusSection from "../components/Home/Status";
import { useState, useEffect } from "react";

const Home = (user) => {
  const [isFixed, setIsFixed] = useState(false);
  user = user.user;
  return (
    <>
      <div
        className={`${isFixed ? "fixed" : ""} flex-row mb-[120px] space-y-3 
        }`}
      >
        {/* HOME BG IMAGE */}
        <TopBG user={user} />
        {/* STATUS */}
        <div className="w-full h-8">
          <StatusSection />
        </div>
        <div className="w-full h-32">
          <HighlightSection setFixed={setIsFixed} />
        </div>
        <div className="w-full h-16 ">
          <FavroiteSection />
        </div>
        <div className="w-full h-56">
          <NewsSection setFixed={setIsFixed} />
        </div>
        <div className="w-full h-[270px] ">
          <EventsSection setFixed={setIsFixed} />
        </div>
      </div>
    </>
  );
};
export default Home;
