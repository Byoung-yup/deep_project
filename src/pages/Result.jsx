import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMBTIDATA } from "../api/mbti/mbtiAPI";
import useUserStore from "../store/useUserStore";
import MBTIPost from "../mbtiPost";
import { deleteMBTIDATA, updateMBTIDATA } from "../api/mbti/mbtiAPI";

const Result = () => {
  const userId = useUserStore((state) => state.user.userId);
  const queryClient = useQueryClient();

  const {
    data: mbtiData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["mbti", userId],
    queryFn: () => fetchMBTIDATA(userId),
  });

  // 게시물 삭제
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteMBTIDATA,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["mbti", userId] });

      const previousTodos = queryClient.getQueryData(["mbti", userId]);

      queryClient.setQueryData(["mbti", userId], (old) =>
        old.filter((data) => data.id !== id)
      );

      return { previousTodos };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(["mbti", userId], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["mbti", userId] });
    },
  });

  // 게시물 업데이트
  const { mutate: updateMutate } = useMutation({
    mutationFn: updateMBTIDATA,
    onMutate: async ({ id, status }) => {
      await queryClient.cancelQueries({ queryKey: ["mbti", userId] });

      const previousTodos = queryClient.getQueryData(["mbti", userId]);

      queryClient.setQueryData(["mbti", userId], (old) =>
        old.map((data) =>
          data.id === id ? { ...data, visibility: !status } : data
        )
      );

      return { previousTodos };
    },
    onError: (err, id, context) => {
      console.log(err);
      queryClient.setQueryData(["mbti", userId], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["mbti", userId] });
    },
  });

  if (isPending) return <div>로딩중입니다...</div>;

  return (
    <div className="flex flex-col gap-7 items-center">
      {mbtiData.map((data) => {
        return (
          <MBTIPost
            key={data.id}
            userId={userId}
            mbtiData={data}
            onDelete={deleteMutate}
            onUpdate={updateMutate}
          />
        );
      })}
    </div>
  );
};

export default Result;
