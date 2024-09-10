import { useLocation, useNavigate } from "react-router-dom";
import Button from "../common/Button";

const TestResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  return (
    <div className="flex w-full justify-center items-center mt-6">
      <div className="flex flex-col justify-evenly items-center w-1/2 gap-7 py-5 border-[1px] border-red-500">
        <div className="text-center w-1/2 bg-gray-400 py-5">{state.result}</div>
        <Button width="50%" onClick={() => navigate("/result")}>
          결과 보러가기
        </Button>
      </div>
    </div>
  );
};

export default TestResult;
