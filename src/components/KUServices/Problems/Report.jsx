import { useEffect, useState } from "react";

function ProblemsPage() {
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
    topic: "",
    related_group: "",
    detail: "",
    sender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    document.getElementById("postDataForm").submit();
  };

  const [relatedGroupOptions, setRelatedGroupOptions] = useState([]);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        id="postDataForm"
        action="https://apt-terrapin-willing.ngrok-free.app/send-message"
        method="POST"
        encType="multipart/form-data"
        className="bg-white w-full max-w-md p-6 rounded-md "
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          หน้าเว็บส่งปัญหา
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
                กลุ่มที่ต้องการส่งปัญหา:
              </label>
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

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          ส่ง
        </button>
      </form>
    </div>
  );
}
export default ProblemsPage;
