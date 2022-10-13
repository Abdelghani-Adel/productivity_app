import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { MongoClient } from "mongodb";
import { DiaryType } from "../../store/slices/diarySlice";

/*
  // Fetch and update the state from API on the application loads first
  // New & Update => Fire an API call through a thunk, and the thunk will take care of updating the state.
  // Read the data from the state, and fetch to the API
  // Why 
*/

const DiaryDetails = (props: any) => {
  // const router = useRouter();
  // const id = router.query.diaryID;
  // console.log(id);

  return <h1>{props.diary}</h1>;
};

export async function getStaticPaths<GetStaticPaths>() {
  const client = await MongoClient.connect(
    "mongodb+srv://AbdelghaniAdel:New.pass.vue@cluster0.3z5cwhk.mongodb.net/productivedb?retryWrites=true&w=majority"
  );
  const db = client.db();

  const diariesCollections = db.collection("diaries");
  const diaries = await diariesCollections.find().toArray();

  const paths = diaries.map((diary: any) => {
    return {
      //        This id has to be the same parameter you specify in the file
      params: { diaryID: diary._id.toString() },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps<GetStaticProps>(context: any) {
  const diaryID = context.params.diaryID;
  const client = await MongoClient.connect(
    "mongodb+srv://AbdelghaniAdel:New.pass.vue@cluster0.3z5cwhk.mongodb.net/productivedb?retryWrites=true&w=majority"
  );
  const db = client.db();

  const diariesCollections = db.collection("diaries");
  const selectedDiary = await diariesCollections.findOne({ _id: diaryID });

  // const res = await fetch("https//localhost:3000/api/diaries" + diaryID);

  return {
    props: { diaryData: selectedDiary },
  };
}

export default DiaryDetails;
