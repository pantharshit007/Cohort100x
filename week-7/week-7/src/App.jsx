import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { countAtoms, isEvenSelector } from "./store/atoms/count";

function App() {
  
  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count  />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons  />
    <IsEven />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtoms);

  return <div>
    {count}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtoms);

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

function IsEven(){
  const isEven = useRecoilValue(isEvenSelector);
  return <div>
    {
        isEven && <span>is Even</span>
    }
    </div>
}

export default App
