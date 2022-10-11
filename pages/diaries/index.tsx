import AddDiaryBtn from "../../components/Buttons/AddDiaryBtn";
import { MongoClient } from "mongodb";

const DiariesPage = (props: any) => {
  console.log(props);
  return (
    <div>
      <h2>Diaries</h2>

      <AddDiaryBtn />
    </div>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://AbdelghaniAdel:New.pass.vue@cluster0.3z5cwhk.mongodb.net/productivedb?retryWrites=true&w=majority"
  );

  const db = client.db();
  const diariesCollections = db.collection("diaries");
  const diaries = await diariesCollections.find().toArray();

  client.close();

  return {
    props: {
      diaries: diaries.map((diary) => ({
        id: diary._id.toString(),
        date: diary.date,
        mode: diary.mode,
        wishes: diary.wishes,
        achievements: diary.achievements,
        badNews: diary.badNews,
        goodNews: diary.goodNews,
        // dayEvent: diary.dayEvent,
        lessons: diary.lessons,
      })),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context: any) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   // any code you type here will always run on the server, never on the client side
//   // the code will run before executing the page component

//   return {
//     props: {},
//   };
// }

export default DiariesPage;
