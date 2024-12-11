import reactImg from "../assets/logo.png";
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const desp = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} width={60} height={60} alt="Stylized atom" />
      <h1>Learn JavaScript Core Concepts</h1>
      <p>
        {desp} Discover the foundational JavaScript concepts essential for building dynamic web applications!
      </p>
    </header>
  );
}
