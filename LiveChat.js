import React, { useEffect, useState } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "./chatSlice";
import { generateNames, generateString } from "./Helper";

const LiveChat = () => {
  let [livemsg, setlivemsg] = useState("");
  let dispatch = useDispatch();

  let nowtheme = useSelector((store) => store.Theme.Now);

  let msgsArray = useSelector((store) => store.ChatMsg.msgtube);

  //   function send() {
  //     dispatch(
  //       addMsg({
  //         name: "Anish Mangal",
  //         Content: livemsg +"nn",
  //       })
  //     );
  //   }

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMsg({
          name: generateNames(),
          content: generateString(20) + "..🚀",
        })
      );
    }, 1700);

    return () => clearInterval(i);
  });

  return (
    <div>
      <div className="h-[300px] w-[290px] border-2 border-black ml-2 bg-gray-600 overflow-y-scroll flex flex-col-reverse">
        {msgsArray.map((msg) => {
          return <Message name={msg?.name} content={msg?.content} />;
        })}
      </div>

      <form
        className={
          (nowtheme == "Light" &&
            "flex border-[1px] border-black w-[288px] ml-2") ||
          (nowtheme == "Dark" &&
            "flex border-[1px] border-black w-[288px] ml-2 text-black")
        }
        onSubmit={(e) => {
          console.log(livemsg);
          e.preventDefault();

          dispatch(
            addMsg({
              name: "Anish Mangal",
              content: livemsg,
            })
          );
        }}
      >
        <div>
          <input
            className="h-[20px] w-[220px] border-[1px] border-blue-300 bg-green-100"
            value={livemsg}
            onChange={(e) => {
              setlivemsg(e.target.value);
            }}
          />
        </div>

        <div>
          <button
            className="bg-green-200 rounded-md my-[2px] w-[40px] text-sm ml-4"
            // onClick={()=>send()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
