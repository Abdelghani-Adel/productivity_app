import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { MongoClient } from "mongodb";
import { DiaryType, selectDiaries } from "../../store/slices/diarySlice";
import { useAppSelector } from "../../store/hooks";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

/*
  // Fetch and update the state from API on the application loads first
  // New & Update => Fire an API call through a thunk, and the thunk will take care of updating the state.
  // Read the data from the state, and fetch to the API
  // Why 
*/

const DiaryDetails = (props: any) => {
  const router = useRouter();
  const diaryID = router.query.diaryID;

  const diaries = useAppSelector(selectDiaries);
  const diaryIndex = diaries.findIndex((diary) => diary._id === diaryID);
  const diary = diaries[diaryIndex];

  const diaryTime = new Date(diary.date).toLocaleTimeString();
  const diaryDate = new Date(diary.date).toLocaleDateString();

  const badNews = diary.badNews.map((news, index) => (
    <p key={news}>
      {index + 1}- {news}
    </p>
  ));

  const goodNews = diary.goodNews.map((news, index) => (
    <p key={news}>
      {index + 1}- {news}
    </p>
  ));

  const wishes = diary.wishes.map((whish) => <p key={whish}>{whish}</p>);
  const achievements = diary.achievements.map((achieve) => (
    <p key={achieve}>{achieve}</p>
  ));

  return (
    <Paper>
      <Container>
        <p>
          At this day {diaryDate}, exactly at {diaryTime} I was {diary.mode}
        </p>
        <p>because these things have happened today:</p>

        {diary.goodNews[0].trim().length > 0 && <>{goodNews}</>}
        {diary.badNews[0].trim().length > 0 && <>{badNews}</>}

        {diary.dayEvent.trim().length > 0 && (
          <p>
            And the most important thing that happened today is that{" "}
            {diary.dayEvent}
          </p>
        )}

        {diary.achievements[0].trim().length > 0 && (
          <>
            <p>I've made some achievements today in my life</p>
            {diary.achievements.map((achieve, index) => (
              <p key={Math.random()}>
                {index + 1}- {achieve},
              </p>
            ))}
          </>
        )}
      </Container>
    </Paper>
  );
};

// export async function getStaticPaths<GetStaticPaths>() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://AbdelghaniAdel:New.pass.vue@cluster0.3z5cwhk.mongodb.net/productivedb?retryWrites=true&w=majority"
//   );
//   const db = client.db();

//   const diariesCollections = db.collection("diaries");
//   const diaries = await diariesCollections.find().toArray();

//   const paths = diaries.map((diary: any) => {
//     return {
//       //        This id has to be the same parameter you specify in the file
//       params: { diaryID: diary._id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps<GetStaticProps>(context: any) {
//   const diaryID = context.params.diaryID;
//   const client = await MongoClient.connect(
//     "mongodb+srv://AbdelghaniAdel:New.pass.vue@cluster0.3z5cwhk.mongodb.net/productivedb?retryWrites=true&w=majority"
//   );
//   const db = client.db();

//   const diariesCollections = db.collection("diaries");
//   const selectedDiary = await diariesCollections.findOne({ _id: diaryID });

//   // const res = await fetch("https//localhost:3000/api/diaries" + diaryID);

//   return {
//     props: { diaryData: selectedDiary },
//   };
// }

export default DiaryDetails;
