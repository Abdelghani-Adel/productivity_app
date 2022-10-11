import AddDiaryBtn from "../../components/Buttons/AddDiaryBtn";

const DiariesPage = () => {
  return (
    <div>
      <h2>Diaries</h2>

      <AddDiaryBtn />
    </div>
  );
};

export async function getStaticProps() {
  // fetch data from an API

  return {
    props: {},
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
