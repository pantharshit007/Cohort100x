import React from 'react'

function Profile() {
  return (
    <div>

        <div className="container">
            <div className="upper"> </div>

            <div className="img">
                 <img src="https://i.pinimg.com/736x/eb/93/06/eb93060a6952932727507cf2c65665dc.jpg" alt="" width="100" height="100"/>
            </div>
           

            <div className="info">
                <h3>Harshit Pant <span>21</span></h3> 
                <p>India</p>
            </div>

            <div className="stats">
                <div><h2>800K</h2> <span>Followers</span></div>
                <div><h2>800K</h2> <span>Followers</span></div>
                <div><h2>800K</h2> <span>Followers</span></div>
            </div>

        </div>
    </div>
  )
}

export default Profile