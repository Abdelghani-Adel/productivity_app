import AddDiaryBtn from "../../components/Buttons/AddDiaryBtn";
import { useAppSelector } from "../../store/hooks";
import { selectDiaries } from "../../store/slices/diarySlice";

const DiariesPage = (props: any) => {
  const diaries = useAppSelector(selectDiaries);
  console.log(diaries);
  return (
    <div>
      <h2>Diaries</h2>
      <AddDiaryBtn />
    </div>
  );
};

export default DiariesPage;
