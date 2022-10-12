import AddDiaryBtn from "../../components/Buttons/AddDiaryBtn";
import { MongoClient } from "mongodb";
import { useGetDiariesQuery } from "../../store/api/diariesAPI";

const DiariesPage = (props: any) => {
  const { data, error, isLoading } = useGetDiariesQuery();
  console.log(data);
  // console.log(error);
  // console.log(isLoading);

  console.log(props);
  return (
    <div>
      <h2>Diaries</h2>

      <AddDiaryBtn />
    </div>
  );
};

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
