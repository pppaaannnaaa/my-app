import { useState } from 'react';

import MasterDetail from './MasterDetail';
import './App.css';

function App() {
  const [renderPayload, setRenderPayload] = useState('');
  const data = [
    { name: 'intro', content: "Hello Peers" },
    { name: 'welcome', content: "Welcome to Cool Company" },
  ];
  const handelClick = (name) => {
    const payld = data.filter((item)=> item.name === name)
    setRenderPayload(payld[0]);
  }
  return (
    <div className="App">
      <div>
        <MasterDetail onClick={handelClick} >
          {
            data.map(Item =>
              <MasterDetail.Item key={Item.name} name={Item.name} payload={Item.content}>{Item.name}</MasterDetail.Item>
            )
          }

          {/* <MasterDetail.Item name="intro" payload={data.intro}>Intro</MasterDetail.Item>
            <MasterDetail.Item name="intro" payload={data.intro}>Intro</MasterDetail.Item>
            <MasterDetail.Item name= "welcome" payload={data.welcome}>Welcome</MasterDetail.Item> */}
          <MasterDetail.Detail payload={renderPayload} render={(payload) => payload.content} />
        </MasterDetail>
      </div>

    </div>
  );
}

export default App;
