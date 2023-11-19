import calendar_icon from "../../assets/home_icon_calendar.svg";
import book1_icon from "../../assets/home_icon_book1.svg";

const StatusSection = () => {
  const today = new Date();

  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedToday = formatter.format(today);

  console.log(formattedToday);
  return (
    <>
      <div className="flex flex-row w-full h-full text-sm font-medium justify-center whitespace-nowrap">
        <div className="flex flex-row w-[45%] items-center whitespace-nowrap justify-center space-x-1">
          <img src={calendar_icon} className="h-[80%]" />
          <p>{formattedToday}</p>
        </div>
        <div className="flex flex-row w-[45%] items-center whitespace-nowrap justify-center space-x-1">
          <img src={book1_icon} className="h-[80%]" />
          <p>9AM-11AM | Calculus 1</p>
        </div>
      </div>
    </>
  );
};
export default StatusSection;
