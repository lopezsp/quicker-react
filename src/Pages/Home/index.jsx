import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import UserDetail from "../../components/UserDetail";
import { useContext } from "react";
import { GetUserContext } from "../../Context"
import Quick from '../../components/Quick'

function Home() {
  const context = useContext(GetUserContext);
  const [items, setItems] = useState(null);
    
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
      
  }, [context.count]);

  const saludo = context.currentUser?.first_name || 'Quicker'  
  
  const clickHandler = () => {
    context.openQuickPost()
  }

  return (
    <Layout>
      {'Hola '+ saludo}
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card data={item} key={item.quick_id} />
        ))}
      </div>
      <UserDetail /> 
      <Quick />
      <button onClick={() => clickHandler()}>    
        <PencilSquareIcon className="absolute bottom-24 right-96 rounded-lg cursor-pointer w-24 hover:bg-gray-200"/>     
      </button>  
    </Layout>
  );
}

export default Home;
