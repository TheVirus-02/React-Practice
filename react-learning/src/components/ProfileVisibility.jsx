import { useState } from "react"

function ProfileVisible() {

    const [showProfile, setShowProfile] = useState(false)

    function handleProfile(){
        setShowProfile((Pv) => !Pv);
    }
    return (
        <div>
            <h1>Profile visibility</h1>
            <button onClick={handleProfile}>
                {showProfile ? "Hide Profile" : "Show Profile" }
            </button>
            {showProfile && (
                <div>
                    <p>Name : Rahul</p>
                    <p>Age : 22 </p>
                    <p>City : Mumbai</p>
                </div>
                )
            }
        </div>
    )
}

export default ProfileVisible;