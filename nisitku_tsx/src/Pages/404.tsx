const NoPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-6xl font-bold text-center">404</p>
      <p className="text-3xl text-center w-[70%] mb-4">
        The page you request could not be found!
      </p>
      <p className="text-xs text-center w-[70%] text-gray-500">
        If this is a problem, please contact the administrator.
      </p>
    </div>
  );
};
export default NoPage;
