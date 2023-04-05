import React from "react";
import { useSelector } from "react-redux";

const Comments = ({ data }) => {
  let nowtheme = useSelector((store) => store.Theme.Now);
  let { name, Comment } = data;

  //    let{repliername,reply}=Reply;
  return (
    <div>
      <div
        className={
          (nowtheme == "Light" && "flex ml-1 mt-2 ") ||
          (nowtheme == "Dark" && "flex text-white ml-3 mt-2 ")
        }
      >
        <div>
          <img
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="User-Icon"
            className="h-4 ml-5 mr-3 mt-2"
          />
        </div>

        <div>
          <h1 className="">{name}-</h1>
        </div>

        <div>
          <div>{Comment}</div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
