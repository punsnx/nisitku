function LocationField({location,onLocationChange}){

    return (
            <div className="mb-4">
                <label htmlFor="attach_img" className="block text-sm font-medium text-gray-700 mb-2">
                Location: (ถ้าจำเป็น) <span className='text-grey text-gray-300'>*เเค่อันนี้ยังใช้ไม่ได้</span>
                </label>
                <div onClick={()=>{
                    if (location === "Push to include location"){
                        onLocationChange("ส่วนนี้รองบเชื่อม Google Map API")
                    }
                    else{
                        onLocationChange("Push to include location")
                    }
                    }} >
                    {location}
                </div>
            </div>
    )
}

export default LocationField