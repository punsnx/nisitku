import { useEffect, useState } from "react";
import * as React from "react";

function ProblemComponent({
  topic,
  finished,
  type_problem,
  detail,
  likes,
  liked,
  onLike,
}) {
  const [status, setStatus] = useState("กำลังดำเนินการ");
  const [displayLike, setDisplayLike] = useState(likes);

  useEffect(() => {
    if (likes != displayLike) {
      // Trigger animation
    }
    setDisplayLike(likes);
  }, [likes]);

  useEffect(() => {
    if (finished) {
      setStatus("เสร็จสิ้น");
    } else {
      setStatus("กำลังดำเนินการ");
    }
  }, [finished]);

  return (
    <div className="w-[80%] border shadow-sm bg-zinc-50 flex flex-col pl-3 pr-2 rounded-lg border-solid border-stone-400">
      <div className="self-stretch flex items-center justify-between gap-5 mt-2.5">
        <div className="text-black text-center text-base font-bold leading-4 my-auto">
          {topic}
        </div>
        <div
          className={`text-white text-center text-xs font-bold leading-4 ${
            finished ? "bg-green-600" : "bg-amber-500"
          } items-stretch px-4 py-1.5 rounded-2xl w-2/5`}
        >
          {status}
        </div>
      </div>
      <div className="text-black text-center text-xs font-bold leading-4 whitespace-nowrap bg-yellow-200 bg-opacity-90 aspect-[3.6315789473684212] items-stretch mt-2.5 px-1.5 py-1.5 rounded-xl self-start">
        {type_problem}
      </div>
      <div className="text-black text-sm leading-4 self-stretch mt-3.5">
        {detail}
      </div>
      <div className="self-stretch flex w-full justify-between gap-5 mt-8 mb-3">
        <div className="text-black text-xs leading-4 mt-3.5">1 week ago</div>
        <div className="flex gap-1.5">
          {liked ? (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4660dc97-9e30-4f3b-83f1-1569dcb5c798?"
              className="aspect-[1.19] object-contain object-center w-full overflow-hidden"
            />
          ) : (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb3d59c3-dc11-4fd8-aa7d-4ac912ef49f9?"
              className="aspect-[1.19] object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
            />
          )}
          <div
            className="text-black text-base leading-5 grow whitespace-nowrap mt-3"
            onClick={onLike}
          >
            {displayLike}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemComponent;
