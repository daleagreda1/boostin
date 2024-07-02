import '../index.css';
import boostim from "../assets/boostim.png";
import notif from "../assets/notif.png";


const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
          <img class="boostim-logo"src={boostim} width={40} height={20} alt="Boostim" />
        <h1 className="title">boostim</h1>
        <nav className="nav">
          <ul>
            <li><button className="nav-button">Service<i class="arrow down"></i></button></li>
            <li><button className="nav-button">Agency<i class="arrow down"></i></button></li>
            <li><button className="nav-button">Case Study<i class="arrow down"></i></button></li>
            <li><button className="nav-button">Resources<i class="arrow down"></i></button></li>
            <li><button className="nav-button">Contact</button></li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <button className="get-started">Get Started</button>
        <button>
        <img class="notif" src={notif} width={40} height={10} alt="Notification" />
        </button>
      </div>
    </header>
  );
};

export default Header;
