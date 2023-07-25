import Layout from "../../components/Layout";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { GetUserContext } from "../../Context";

const Update = () => {
  
  const navigate = useNavigate();
  const context = useContext(GetUserContext);
  const token = context.tokenAuth

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const nick_name = event.target.elements.nick_name.value;
    const first_name = event.target.elements.first_name.value;
    const last_name = event.target.elements.last_name.value;
    const birth_date = event.target.elements.birth_date.value;

    const url = "https://quickerfastapi-1-h4833778.deta.app/users/update";
    
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", auth: token
      },
      body: JSON.stringify({ 'email': email, 'password': password, 'nick_name': nick_name, 'first_name': first_name, 'last_name': last_name, 'birth_date': birth_date}),

    })
    const res = await response.json()
    console.log(res)
    navigate('/')
  }

  return (
    <Layout>
      <section className="m-0 font-serif bg-lime-200 rounded-lg flex items-center flex-col justify-center p-10">
        <section className="flex flex-col">
          <h2>Update!</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input className=" m-3 mb-1 w-56" type="text" placeholder="Correo" name="email"/>
            <input className="m-3 mt-1 w-56" type="password" placeholder="Contraseña" name="password" />
            <input className="m-3 mt-1 w-56" type="text" placeholder="Nick name" name="nick_name" />
            <input className="m-3 mt-1 w-56" type="text" placeholder="First name" name="first_name" />
            <input className="m-3 mt-1 w-56" type="text" placeholder="Last name" name="last_name" />
            <input className="m-3 mt-1 w-56" type="date" placeholder="Birth date" name="birth_date" />
              <button type="submit">DONE</button>            
          </form>
          {/* <section className="login__container--social-media">
            <div>
              <img src="../assets/google-icon.png" /> Inicia sesión con Google
            </div>
            <div>
              <img src="../assets/twitter-icon.png" /> Inicia sesión con Twitter
            </div>
          </section> */}
          
                     
        </section>
      </section>
    </Layout>
  );
};

export default Update;