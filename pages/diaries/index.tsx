import AddDiaryBtn from "../../components/Buttons/AddDiaryBtn";
import { MongoClient } from "mongodb";

const DiariesPage = (props: any) => {
  return (
    <div>
      <h2>Diaries</h2>

      <AddDiaryBtn />
    </div>
  );
};

export default DiariesPage;
