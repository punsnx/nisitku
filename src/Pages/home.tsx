const home = () => {
  return (
    <>
      <div className=" grid-flow-row">
        {/* IMAGE */}
        <div className="relative">
          <img
            className="top-0 left-0 right-0 w-full "
            src="/src/assets/home_img.png"
          />
          <div className="absolute top-0 left-0 right-0 w-full h-full flex items-center justify-center">
            {/* Your overlay component */}
            <div className="bg-black text-white p-4">
              <h1>Overlay Content</h1>
              <p>This is your overlay component.</p>
            </div>
          </div>
        </div>
        {/* STATUS */}
        <div className="w-full h-48 bg-green-200">
          <p>Status</p>
        </div>
        <div className="w-full h-48 bg-green-200">
          <p>Highlight</p>
        </div>
        <div className="w-full h-48 bg-green-200">
          <p>Favourite</p>
        </div>
        <div className="w-full h-48 bg-green-200">
          <p>News</p>
        </div>
        <div className="w-full h-48 bg-green-200">
          <p>Events</p>
        </div>
      </div>
    </>
  );
};
export default home;
