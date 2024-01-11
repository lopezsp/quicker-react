import Layout from "../../components/Layout";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const nick_name = event.target.elements.nick_name.value;
    const first_name = event.target.elements.first_name.value;
    const last_name = event.target.elements.last_name.value;
    const birth_date = event.target.elements.birth_date.value;

    const url = "https://quickerfastapi-1-h4833778.deta.app/signup";
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'email': email, 'password': password, 'nick_name': nick_name, 'first_name': first_name, 'last_name': last_name, 'birth_date': birth_date}),

    })
    const res = await response.json()
    console.log(res)
    navigate('/login')
  }

  return (
    <Layout>
      <section className="m-0 font-serif bg-green-300 rounded-lg flex items-center flex-col justify-center p-10 mt-28">
        <section className="flex flex-col">
          <h2 className="pl-10">Sign Up!</h2>
          <form className="flex flex-col pl-10" onSubmit={handleSubmit}>
            <input className=" m-3 mb-1 w-56" type="text" placeholder="Correo" name="email"/>
            <input className="m-3 mt-1 w-56" type="password" placeholder="Contraseña" name="password" />
            <input className="m-3 mt-1 w-56" type="text" placeholder="Nick name" name="nick_name" maxLength="12" />
            <input className="m-3 mt-1 w-56" type="text" placeholder="First name" name="first_name" />
            <input className="m-3 mt-1 w-56" type="text" placeholder="Last name" name="last_name" />
            <input className="m-3 mt-1 w-56" type="date" placeholder="Birth date" name="birth_date" />
            <input type="file" accept="image/*" />
              <button type="submit">DONE</button>            
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
          
            <a className=" self-center" href="/signup">Sign up</a>
          
        </section>
      </section>
    </Layout>
  );
};

export default Signup;