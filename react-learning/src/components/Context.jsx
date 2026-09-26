import UserContext from "./UserContext";
import Profile from "./Profile";

function Context(){
    const user = {
    name: "Rahul",
    age: 20
  };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );

}

export default Context;