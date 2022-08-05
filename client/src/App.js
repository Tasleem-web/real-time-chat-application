import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from "stream-chat-react";
import Cookie from "universal-cookie";

import { ChannelContainer, ChannelListContainer } from './components'

const apiKey = "7jb4qgd76dq2";
const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />

        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
