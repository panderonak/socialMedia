import { useEffect, useState } from "react";
import { Container } from "../../components/index";
import userProfileManagement from "../../freeAPI/profile";

export default function Profile() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const profile = async () => {
      try {
        const data = await userProfileManagement.getMyProfile();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    profile();
  }, []);

  return (
    <Container>
      <div className="min-h-screen py-10">
        <div className="text-center mb-7 font-semibold text-lg bg-teal-500">
          {userData?.account.username}
          {/* theronaksm_13 */}
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="w-2/5">
            <img
              // src="https://picsum.photos/200"
              src={`${userData?.account.url}`}
              className="rounded-full w-36 h-36"
              alt=""
            />
          </div>
          <div className="flex justify-evenly gap-3 w-3/5">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-center text-xl">6</p>
              <p className="text-center font-medium text-lg text-gray-600">
                Posts
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-center text-xl">{`${userData?.followersCount}`}</p>
              {/* <p className="font-semibold text-center text-xl">100</p> */}
              <p className="text-center font-medium text-lg text-gray-600">
                Followers
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-center text-xl">
                {` ${userData?.followingCount}`}{" "}
              </p>
              {/* <p className="font-semibold text-center text-xl">100</p> */}
              <p className="text-center font-medium text-lg text-gray-600">
                Following
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-500 pl-5">
          <p>{`${userData?.firstName} ${userData?.lastName}`}</p>
          <p className="">{`${userData?.bio}`}</p>
        </div>
      </div>
    </Container>
  );
}

// export const profile = async () => {
//   try {
//     const userData = await userProfileManagement.getMyProfile();
//     if (userData.success) {
//       console.log(userData);
//       // return userData;
//     } else {
//       console.error("Profile fetch was unsuccessful");
//     }
//   } catch (error) {
//     console.error("Error fetching profile:", error);
//   }
// };
