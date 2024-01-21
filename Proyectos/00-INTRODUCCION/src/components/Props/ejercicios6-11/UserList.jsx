import React from "react";


const UserList = ({users}) => {
  return (
    <div className="w-1/2 mx-auto bg-gray-200 rounded shadow-md mt-4 flex items-center justify-center">
      <ol className="list-decimal list-inside">
        {users.map((user, index) => (
          <React.Fragment key={index}>
            <li className="mb-2">
                <a href={`#user-${index}`} className="text-blue-500 hover:underline">{user}</a>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </div>
  )
}

export default UserList;
