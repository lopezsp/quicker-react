import { useContext } from "react";
import { GetUserContext } from "../../Context";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

const Followers = () => {
  const context = useContext(GetUserContext);
  const token = context.tokenAuth;
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    if (token != "") {
      fetch("https://quickerfastapi-1-h4833778.deta.app/myfollowers", {
        credentials: "include",
        headers: { "Content-Type": "application/json", auth: token },
      })
        .then((response) => response.json())
        .then((data) => setFollowers(data));
    } else {
      console.log("Error: you must be loged to see followers");
    }
  }, [token]);

  return (
    <Layout>
      <div className="mt-24 flex flex-col w-full max-w-screen-lg items-center">
        {followers?.map((follower) => (
          <div className="h-16" key={follower.user_id}>
            {follower.nick_name + " "}
            {follower.first_name + " "}
            {follower.last_name + " "}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Followers;
