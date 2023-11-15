import TopBG from "../components/Home/TopBG";
const home = () => {
  console.log("Home");
  return (
    <>
      <div className="flex-row">
        {/* HOME BG IMAGE */}
        <TopBG />
        {/* STATUS */}
        <div className="w-full h-48">
          <p>Status</p>
        </div>
        <div className="w-full h-48 ">
          <p>Highlight</p>
        </div>
        <div className="w-full h-48 ">
          <p>Favourite</p>
        </div>
        <div className="w-full h-48 ">
          <p>News</p>
        </div>
        <div className="w-full h-48 ">
          <p>Events</p>
        </div>
      </div>
    </>
  );
};
export default home;
