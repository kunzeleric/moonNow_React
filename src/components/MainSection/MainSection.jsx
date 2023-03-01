import { useState } from "react";
import "./index.scss";
import rocket from "../../assets/imgs/rocket.svg";

const MainSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

  return (
    <>
      <div className="main-content">
        <div className="form-area">
          <h1>INSCREVA-SE E<br/> VIAJE PARA A LUA<br/> GRATUITAMENTE</h1>
          <form>
            <input type="text" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div className="buttons">
              <button className="buttonOne">Quero ir pra lua!</button>
              <button className="buttonTwo">Mais informações</button>
            </div>
          </form>
        </div>
        <img src={rocket} alt="Rocket Man" />
      </div>
    </>
  );
};

export default MainSection;
