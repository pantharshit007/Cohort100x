import React from 'react';

function GitCard(props) {
  // console.log(name);

  const { name, avatar_url, login, html_url, public_repos, followers, following } = props.userData || {};
  return (
    <div className='w-[400px] h-[500px] bg-gray-200 relative flex flex-col justify-between rounded-lg'>
      <div>
        <img src= {"https://source.unsplash.com/user/c_v_r/1600x900"} alt="Free unsplash image" className="rounded-t-lg" />
      </div>

      <div className='absolute left-[35%] top-[30%]'>
        <img
          src={(avatar_url) ? avatar_url : "https://i.pinimg.com/736x/eb/93/06/eb93060a6952932727507cf2c65665dc.jpg"}
          alt=""
          className='rounded-full h-[130px] w-[130px]'
        />
      </div>

      <div className='grid place-items-center h-[100px]'>
        <span className='text-2xl text-black font-bold'>{name}</span>
        <p className='text-xl text-gray-700'><a href={html_url}>
            @{ (name) ?
            login : 'pantharshit007'
            }</a>
        </p>
      </div>

      <div className="flex mx-auto  items-center text-center h-[15%] mb-2 border-t border-black ">
        <div className='border-r border-black px-7'>
          <h2 className='text-2xl text-black font-bold'>{public_repos}</h2>
          <span className='text-xs text-gray-800'>Repository</span>
        </div>

        <div className='border-r border-black px-7'>
          <h2 className='text-2xl text-black font-bold'>{followers}</h2>
          <span className='text-xs text-gray-800'>Followers</span>
        </div>

        <div className=' px-7'>
          <h2 className='text-2xl text-black font-bold'>{following}</h2>
          <span className='text-xs text-gray-800'>Following</span>
        </div>

      </div>
    </div>
  );
}

export default GitCard;
