import { LogoutProcess } from "../api/auth";
import LoginPage from "./login";

const MyProfile = (user) => {
  user = user.user;
  const HandleLogout = () => {
    if (LogoutProcess()) {
      window.location.reload();
    }
  };
  return (
    <>
      <div className="flex flex-row w-full h-screen bg-green-400">
        {user ? (
          <div className="flex flex-col w-full items-center">
            <div className="text-center">
              <h1 className="font-bold text-3xl mt-16">My Profile</h1>
            </div>
            <div className="flex flex-col w-[90%] h-[60%] mt-10 rounded-3xl items-center bg-white">
              <div className="flex w-full justify-center">
                <img
                  src={user.profileImg}
                  alt="Circular Image"
                  className="w-32 h-32 object-cover object-center rounded-full mt-10"
                />
              </div>
              {/*  */}
              <div className="flex flex-row w-[85%] justify-between mt-5 ">
                <div className="flex flex-col w-[47%]">
                  <label htmlFor="fname" className="font-medium">
                    Firstname
                  </label>
                  <p className="font-base text-xl" name="fname">
                    {user.fname}
                  </p>
                </div>
                <div className="flex flex-col w-[47%] ">
                  <label htmlFor="lname" className="font-medium">
                    Lastname
                  </label>
                  <p className="font-base text-xl" name="lname">
                    {user.lname}
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-row w-[85%] justify-between mt-5 ">
                <div className="flex flex-col w-[47%] ">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <p className="font-base text-xl" name="email">
                    {user.email}
                  </p>
                </div>
                <div className="flex flex-col w-[47%] ">
                  <label htmlFor="nisitid" className="font-medium">
                    NisitID
                  </label>
                  <p className="font-base text-xl" name="nisitid">
                    {user.nisitid}
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-row w-[85%] justify-between mt-5">
                <div className="flex flex-col w-[47%] ">
                  <label htmlFor="year" className="font-medium">
                    Year
                  </label>
                  <p className="font-base text-xl" name="year">
                    {user.year}
                  </p>
                </div>
                <div className="flex flex-col w-[47%] ">
                  <label htmlFor="role" className="font-medium">
                    Role
                  </label>
                  <p className="font-base text-xl" name="role">
                    {user.role}
                  </p>
                </div>
              </div>
              <div className="flex w-full h-screen items-center justify-center">
                <button
                  onClick={HandleLogout}
                  className="flex w-[40%] h-10 items-center justify-center rounded-xl bg-red-500"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <label onClick={HandleLogout}>Login Required</label>
        )}
      </div>
    </>
  );
};
export default MyProfile;
