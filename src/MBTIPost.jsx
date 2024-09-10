import Button from "./common/Button";
import Tag from "./common/Tag";
import { mbtiResult } from "./data/mbtiResult";
import { deleteMBTIDATA } from "./api/mbti/mbtiAPI";

const MBTIPost = ({ userId, mbtiData, onDelete, onUpdate }) => {
  return (
    <div className="flex flex-col justify-evenly items-start w-1/3 px-4 py-3 gap-5 bg-gray-600">
      <div className="flex flex-row gap-3 justify-center items-center">
        <span className="text-white font-bold text-5xl">{mbtiData.result}</span>
        <span className="text-white text-2xl">({mbtiData.nickname})</span>
      </div>
      <span className="border-[1px] border-white text-white text-1xl bg-black p-3">
        {mbtiResult[mbtiData.result].description}
      </span>
      <div className="flex flex-row gap-3 overflow-scroll">
        {mbtiResult[mbtiData.result].strengths.map((type) => {
          return <Tag key={type} type={type} />;
        })}
      </div>
      {userId === mbtiData.email && (
        <div className="flex flex-row w-full justify-end gap-3 cursor-pointer">
          <span
            className="text-gray-400 text-xs hover:text-white"
            onClick={() =>
              onUpdate({ id: mbtiData.id, status: mbtiData.visibility })
            }
          >
            {mbtiData.visibility ? "비공개 전환" : "공개 전환"}
          </span>
          <span
            className="text-gray-400 text-xs hover:text-white"
            onClick={() => onDelete(mbtiData.id)}
          >
            삭제하기
          </span>
        </div>
      )}
    </div>
  );
};

export default MBTIPost;
