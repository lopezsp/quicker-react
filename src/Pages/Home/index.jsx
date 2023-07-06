import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import UserDetail from "../../components/UserDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(
      "https://quickerfastapi-1-h4833778.deta.app",{
       credentials: "include" ,
       Headers: { "Content-Type": "application/json" } 
      }
    )
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card data={item} key={item.quick_id} />
        ))}
      </div>
      <UserDetail />
    </Layout>
  );
}

export default Home;
