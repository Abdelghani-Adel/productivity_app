import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import { useAppSelector } from "../../store/hooks";
import { selectDiaries } from "../../store/slices/diarySlice";

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

  return (
    <Paper variant="outlined">
      <Container>
        <h2 style={{ textAlign: "center" }}>My Diary On {diaryDate}</h2>
        <p>
          At this day {diaryDate}, exactly at {diaryTime} I was {diary.mode},
          because these things have happened today:
        </p>

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

        {diary.lessons[0].trim().length > 0 && (
          <>
            <p>I've learned some important lessons today: </p>
            {diary.lessons.map((lesson, index) => (
              <p key={Math.random()}>
                {index + 1}- {lesson}
              </p>
            ))}
          </>
        )}

        {diary.wishes[0].trim().length > 0 && (
          <>
            <p>I've some wishes that I hope to achieve in the future:</p>
            {diary.wishes.map((wish, index) => (
              <p key={Math.random()}>
                {index + 1}- {wish}
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
