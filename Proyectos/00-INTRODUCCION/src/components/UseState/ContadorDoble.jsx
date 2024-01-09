import { useState } from "react";

const initialState = {
    aaron : 0,
    leo : 0,
};

const ContadorDoble = () => {
    const [friends, setFriends] = useState(initialState);

    function handleIncrementAaron() {
        setFriends({...friends,aaron: friends.aaron+1});
    }

    function handleIncrementLeo() {
        setFriends({...friends,leo: friends.leo+1});
    }

  return (
    <>
        <div>
            <span> Aarón tiene : <strong>{friends.aaron}</strong></span>
            <button onClick={handleIncrementAaron}>Aumentar 1 amigo</button>
        </div>
        <div>
            <span> Leo tiene : <strong>{friends.leo}</strong></span>
            <button onClick={handleIncrementLeo}>Aumentar 1 amigo</button>
        </div>
    </>
  )
}

export default ContadorDoble
