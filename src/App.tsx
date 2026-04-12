import "./App.css";
import ButtonCheckIn from "./views/components/ButtonCheckIn.tsx";
import CheckIn from "./views/components/Checln.tsx";
import IconCheckIn from "./views/components/IconCheckIn.tsx";
import InputCheckIn from "./views/components/InputCheckIn.tsx";
import BubbleChatBot from "./views/components/BubbleChatBot.tsx";
import InputBarChatBot from "./views/components/InputBarChatBot.tsx";
// import Nav from "./views/components/NavBar.tsx";
// import Hero from "./views/components/Hero.tsx";
// import Intro from "./views/components/Intro.tsx";
import Login from "./views/components/Login.tsx";
import ChatBotPage from "./views/components/ChatBotPage.tsx";
import MainCardRegister from "./views/components/MainCardRegister.tsx";
import Footer from "./views/components/Footer.tsx";
import ByteCareLabel from "./views/components/ByteCareLabel.tsx";

function App() {
  return (
    <div className="flex items-center justify-center mt-22">
      <ChatBotPage/>
    </div>
  );
}

export default App;
