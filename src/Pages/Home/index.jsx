import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import UserDetail from "../../components/UserDetail";
import { useContext } from "react";
import { GetUserContext } from "../../Context"
import Quick from '../../components/Quick'
import QuickDetail from "../../components/QuickDetail";
import "./styles.css";
import UpdateQuick from "../../components/UpdateQuick";
import { ThemeSwitcher } from "../../components/Theme";

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
      <div className="text-green-300 mt-28 flex align-top gap-3">{'Hola '+ saludo}<ThemeSwitcher/>
      </div>
      
      <div className="flex flex-col w-full max-w-screen-lg pl-14 pr-14 padding-bottom-240">
        {items?.map((item) => (
          <Card data={item} key={item.quick_id} />
        ))}
      </div>
      <UserDetail /> 
      <QuickDetail />
      <Quick />
      <UpdateQuick />
      <div className="custom-width flex justify-end fixed bottom-0 bg-green-300 ">
        <PencilSquareIcon onClick={() => clickHandler()} className="icono flex rounded-lg cursor-pointer w-24 hover:bg-gray-200"/>
      </div>  
    </Layout>
  );
}

export default Home;
