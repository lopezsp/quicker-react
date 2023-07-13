import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import UserDetail from "../../components/UserDetail";
import { useContext } from "react";
import { GetUserContext } from "../../Context"

function Home() {
  const context = useContext(GetUserContext);
  const [items, setItems] = useState(null);
  const token = context.tokenAuth


  useEffect(() => {
    fetch(
      "https://quickerfastapi-1-h4833778.deta.app",{
      credentials: "include" ,
      headers: { "Content-Type": "application/json" } 
      }
    )
    .then((response) => response.json())
    .then((data) => setItems(data));
   /* if (token != '') {
      fetch(
        "https://quickerfastapi-1-h4833778.deta.app",{
        credentials: "include" ,
        headers: { "Content-Type": "application/json", "auth": token } 
        }
      )
      .then((response) => response.json())
      .then((data) => setItems(data));
    } else {
      fetch(
        "https://quickerfastapi-1-h4833778.deta.app",{
        credentials: "include" ,
        headers: { "Content-Type": "application/json" } 
        }
      )
      .then((response) => response.json())
      .then((data) => setItems(data));
    }*/
      
  }, [token]);

  const saludo = context.currentUser?.first_name || 'Quicker'  
  console.log(context.currentUser)

  return (
    <Layout>
      {'Hola '+ saludo}
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
