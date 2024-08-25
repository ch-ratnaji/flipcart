// import { useLoaderData, json, defer, Await } from "react-router-dom";
// import { Suspense } from "react";
import { useLoaderData, json } from "react-router-dom";
import MobilesList from "../components/MobilesList";

// function MobilesPage() {
//   const data = useLoaderData();
//   console.log(data); // Check the structure of the data object

//   const { mobiles } = data || {};

//   return (
//     <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
//       <Await resolve={mobiles}>
//         {(loadedMobiles) => <MobilesList mobiles={loadedMobiles} />}
//       </Await>
//     </Suspense>
//   );
// }

function MobilesPage() {
  const data = useLoaderData();
  console.log(data); // Check the structure of the data object

  if (!data) {
    return <p>No data loaded</p>;
  }

  const { mobiles } = data || {};

  return (
    <div>
      {mobiles ? <MobilesList mobiles={mobiles} /> : <p>No mobiles found</p>}
    </div>
  );
}

export default MobilesPage;

async function loadMobiles() {
  const response = await fetch("http://localhost:3000/mobiles");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch mobiles." },
      {
        status: 500,
      }
    );
  }
  const resData = await response.json();
  console.log("API Response:", resData);
  return { mobiles: resData.mobiles };
}

// export function loader() {
//   return defer({
//     mobiles: loadMobiles(),
//   });
// }

export async function loader() {
  const mobilesData = await loadMobiles(); // Directly await the data
  return mobilesData; // Return it without defer to test
}
