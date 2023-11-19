import { useEffect, useState } from "react";
import ProblemField from "./ProblemField";
import ImageField from "./ImageField";
import LocationField from "./LocationField";
import SelectGroupField from "./SelectGroupField";
import PopupShow from "./popShow";

function SendProblem({ studentId, onSummitCompleted }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupTitle, setPopupTitle] = useState("");

  const openPopup = (Title, Message) => {
    setPopupMessage(Message);
    setPopupTitle(Title);
    setShowPopup(true);
  };
  const closePopup = () => {
    setPopupMessage("");
    setPopupTitle("");
    setShowPopup(false);
  };

  const fetch_coworking = async () => {
    const payload = await fetch(
      "https://apt-terrapin-willing.ngrok-free.app/fetch-group"
    );
    const v = await payload.json();
    return v;
  };

  useEffect(() => {
    fetch_coworking().then((v) => {
      let dv = [];
      v.forEach((element) => {
        dv.push({ show_value: element["name"], value: element["group_id"] });
      });
      setRelatedGroupOptions(dv);
    });
  }, []);

  const [relatedGroupOptions, setRelatedGroupOptions] = useState([]);

  const [topic, setTopic] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("Push to include location");
  const [place, setPlace] = useState("");
  const [selectedGroupId, setSelectedGroupId] = useState("");

  useEffect(() => {
    if (selectedGroupId) {
      console.log(selectedGroupId, "CH");
      setFormGroupId(selectedGroupId);
    }
  }, [selectedGroupId]);

  const [formGroupId, setFormGroupId] = useState("");

  const handleSubmit = () => {
    // Check if any of the fields are empty
    if (!topic || !detail || !formGroupId) {
      console.log("One or more fields are empty. Form not submitted.");
      openPopup("STATUS", "All fields are required");
      return;
    }

    console.log("going", topic, detail, image, location, formGroupId);
    const data = new FormData();
    data.append("topic", topic);
    data.append("detail", detail);
    //data.append('attach_img', image); // assuming 'image' is a file input element
    data.append("location", location);
    data.append("related_group", formGroupId);
    data.append("sender", studentId); // You might want to set the sender value
    console.log(typeof image);
    if (image !== null) {
      for (const [key, value] of Object.entries(image)) {
        data.append("attach-img", value);
      }
    } else {
      data.append("attach-img", null);
    }
    fetch("https://apt-terrapin-willing.ngrok-free.app/send-message", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        // Handle success, if needed
        openPopup("Complete", "successfully sent report");
        onSummitCompleted();
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, if needed
      })
      .finally(() => {});
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      {showPopup && (
        <PopupShow
          title={popupTitle}
          message={popupMessage}
          onClose={closePopup}
        />
      )}
      <div className="bg-white w-full max-w-md p-6 mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          หน้าเว็บส่งปัญหา
        </h2>

        <ProblemField title={"Topic"} onChange={setTopic} />
        <ProblemField title={"Detail"} onChange={setDetail} />
        <ImageField onImageChange={setImage} />
        <LocationField location={location} onLocationChange={setLocation} />
        <SelectGroupField
          setSelectedPlace={setPlace}
          place={place}
          topic={topic}
          detail={detail}
          setSelectedGroupId={setSelectedGroupId}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          ส่ง
        </button>
      </div>
    </div>
  );
}

export default SendProblem;
