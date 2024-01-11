import Layout from "../../components/Layout";
import { useNavigate } from 'react-router-dom';
import { GetUserContext } from '../../Context'
import { useContext } from "react";

const Login = () => {
  const context = useContext(GetUserContext)
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const url = "https://quickerfastapi-1-h4833778.deta.app/login";
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'email': email, 'password': password}),

    })
    const res = await response.json()
    const token = res.token
    const current_user = res.user
    localStorage.setItem('token', token)
    localStorage.setItem('user_id', current_user.user_id)
    localStorage.setItem('first_name', current_user.first_name)
    localStorage.setItem('birth_date', current_user.birth_date)
    localStorage.setItem('nick_name', current_user.nick_name)
    localStorage.setItem('last_name', current_user.last_name)
    localStorage.setItem('email', current_user.email)
    localStorage.setItem('followers', current_user.followers)
    context.setTokenAuth(token)
    context.setCurrentUser(current_user)
    navigate('/')
  }

  return (
    <Layout>
      <section className="m-0 font-serif bg-green-300 rounded-lg flex items-center flex-col justify-center p-10 mt-28">
        <section className="flex flex-col">
          <h2>Log in</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input className=" m-3 mb-1 w-56 rounded-lg" type="text" placeholder="Correo" name="email"/>
            <input className="m-3 mt-1 w-56 rounded-lg" type="password" placeholder="Contraseña" name="password" />
              <button className="rounded-lg w-24 bg-white self-center" type="submit">Log in</button>            
            <div className="">
              <label className=" font-normal pr-4">
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Remember me
              </label>
              <a href="/signup">Forgot my password</a>
            </div>
          </form>
          {/* <section className="login__container--social-media">
            <div>
              <img src="../assets/google-icon.png" /> Inicia sesión con Google
            </div>
            <div>
              <img src="../assets/twitter-icon.png" /> Inicia sesión con Twitter
            </div>
          </section> */}
          
            <a className=" rounded-lg w-24 bg-white self-center flex flex-col items-center" href="/signup">Sign up</a>
          
        </section>
      </section>
    </Layout>
  );
};

export default Login;
