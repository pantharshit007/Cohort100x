import React from 'react';

function GitCard(props) {
  return (
    <div className='w-[400px] h-[500px] bg-gray-200 relative flex flex-col justify-between rounded-lg'>
      <div>
        <img src= {(props.avatar_url) ? props.avatar_url : "https://source.unsplash.com/user/c_v_r/1600x900"} alt="Free unsplash image" className="rounded-t-lg" />
      </div>

      <div className='absolute left-[35%] top-[30%]'>
        <img
          src="https://i.pinimg.com/736x/eb/93/06/eb93060a6952932727507cf2c65665dc.jpg"
          alt=""
          className='rounded-full h-[130px] w-[130px]'
        />
      </div>

      <div className='grid place-items-center h-[100px]'>
        <span>Harshit Pant{props.name}</span>
        <p><a href={props.html_url}>
            @{ (props.name) ?
            props.login : 'pantharshit007'
            }</a>
        </p>
      </div>

      <div className="flex mx-auto  items-center text-center h-[15%] mb-2 border-t border-black ">
        <div className='border-r border-black px-7'>
          <h2>{props.public_repos}</h2>
          <span>Repository</span>
        </div>

        <div className='border-r border-black px-7'>
          <h2>{props.followers}</h2>
          <span>Followers</span>
        </div>

        <div className=' px-7'>
          <h2>{props.following}</h2>
          <span>Following</span>
        </div>

      </div>
    </div>
  );
}

export default GitCard;
