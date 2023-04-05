import React from "react";

const Message = ({ name, content }) => {
  return (
    <div className="flex">
      <div>
        <img
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="User-Icon"
          className="h-4 ml-1 mt-1"
        />
      </div>

      <div>
        <h1 className="ml-1 font-semibold text-sm mt-[2px]">{name}-</h1>
      </div>

      <div className="ml-1 text-xs mt-[5px]">{content}</div>
    </div>
  );
};

export default Message;
