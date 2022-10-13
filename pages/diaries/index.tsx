import AddDiaryBtn from "../../components/Buttons/AddDiaryBtn";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getDiaries, selectDiaries } from "../../store/slices/diarySlice";
import { useEffect } from "react";

const DiariesPage = (props: any) => {
  const diaries = useAppSelector(selectDiaries);
  console.log(diaries);

  return (
    <div>
      <h2>Diaries</h2>
      <AddDiaryBtn />

      {diaries.map((diary) => (
        <h2 key={diary._id}>{diary._id}</h2>
      ))}
    </div>
  );
};

export default DiariesPage;
