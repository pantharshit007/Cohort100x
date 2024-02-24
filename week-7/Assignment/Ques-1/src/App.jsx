import { useEffect, useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import GitCard from './components/GitCard'

function App() {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);

  async function submitHandler() {
    const URL = `https://api.github.com/users/${userName}`;
    try {
      const data = await fetch(URL);
      const res = await data.json();
      setUserData(res);
      console.log(res)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    if (userName) {
      submitHandler();
    }
  }, []);

  return (
    <div className='flex justify-center flex-col items-center h-screen'>

      {/* <Profile/> */}

      <GitCard userData={userData} />
      <div className='flex flex-row'>
        <input
          type="text"
          placeholder="Enter Username"
          className='w-[350px]'
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={submitHandler}>Create</button>
      </div>

      
    </div>
  );
}

export default App;
