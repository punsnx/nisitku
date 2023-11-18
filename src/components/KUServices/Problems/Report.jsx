import { useEffect, useState } from "react";

function SendProblem({ studentId, onSummitCompleted }) {
  const [location, setLocation] = useState("Push to include location");

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

  const [formData, setFormData] = useState({
    หัวข้อ: "",
    related_group: "",
    detail: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      ["student-id"]: studentId,
    });
    document.getElementById("postDataForm").submit();
    onSummitCompleted();
  };

  const [loading, setLoading] = useState(false); // New state for loading
  const [showModal, setShowModal] = useState(false); // New state for modal
  const [modalData, setModalData] = useState({ reason: "", group_name: "" });

  const handleAIHelper = async () => {
    setLoading(true); // Set loading to true when starting the fetch
    try {
      const payload = await fetch(
        `https://apt-terrapin-willing.ngrok-free.app/problem/ai-help?detail=${formData["detail"]}&topic=${formData["หัวข้อ"]}`
      );
      const data = await payload.json();

      setModalData(data);

      setFormData({
        ...formData,
        related_group: data["group_name"],
      });
    } finally {
      setLoading(false); // Set loading to false when fetch is completed
    }
  };

  const [relatedGroupOptions, setRelatedGroupOptions] = useState([]);

  const handleButtonClick = async () => {
    setShowModal(true); // Show the modal when the button is clicked
    await handleAIHelper(); // Wait for the fetch operation to complete
    //setShowModal(false); // Hide the modal when the fetch is completed
  };

  return (
    <div className="min-h-screen  flex justify-center ">
      <form
        id="postDataForm"
        action="https://apt-terrapin-willing.ngrok-free.app/send-message"
        method="POST"
        encType="multipart/form-data"
        className="bg-white w-full max-w-md p-6 mt-16"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          หน้าเว็บแจ้งปัญหา
        </h2>

        {Object.keys(formData).map((key) =>
          key !== "related_group" ? (
            <div key={key} className="mb-4">
              <label
                htmlFor={key}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </label>
              <input
                type="text"
                name={key}
                id={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          ) : (
            <div key={key} className="mb-4">
              <label
                htmlFor={key}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                ผู้รับปัญหา:
              </label>
              <div className="flex flex-row">
                <select
                  name={key}
                  id={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {relatedGroupOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.show_value}
                    </option>
                  ))}
                </select>
                <div
                  onClick={() => {
                    //console.log("ASD")
                    handleButtonClick();
                    //fetch(`https://apt-terrapin-willing.ngrok-free.app/problem/ai-help?detail=${formData["detail"]}&topic=${formData["หัวข้อ"]}`)
                  }}
                  className="flex flex-col justify-center w-24 text-center bg-blue-300 focus:bg-blue-500 rounded-md"
                >
                  ASK AI
                </div>
              </div>
              <></>
            </div>
          )
        )}

        <div className="mb-4">
          <label
            htmlFor="attach_img"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            รูปภาพเพิ่มเติม:
          </label>
          <input
            type="file"
            name="attach_img"
            id="attach_img"
            multiple
            accept="image/*"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="attach_img"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Location: (ถ้าจำเป็น){" "}
            <span className="text-grey text-gray-300">
              *เเค่อันนี้ยังใช้ไม่ได้
            </span>
          </label>
          <div
            onClick={() => {
              if (location === "Push to include location") {
                setLocation("ส่วนนี้รองบเชื่อม Google Map API");
              } else {
                setLocation("Push to include location");
              }
            }}
          >
            {location}
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          ส่ง
        </button>
      </form>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div>
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                  <div className="relative w-auto max-w-md p-6 my-8 mx-auto bg-white rounded shadow-lg">
                    {/* Content */}
                    <div className="flex items-start justify-between">
                      <h3 className="text-3xl font-semibold">
                        {modalData["group_name"]}
                      </h3>
                    </div>

                    <p className="text-sm mt-4 mb-8">{modalData["reason"]}</p>

                    {/* Close button */}
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SendProblem;
