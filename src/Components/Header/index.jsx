import { useState } from "react";
import { Button } from "../Button";

export const Header = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("@kenziehub:user")));
  return (
    <header className="h-20 flex items-center ">
      <div className="flex w-full justify-between px-10 ">
        <h3 className="font-bold text-white text-3xl">TECH HUB</h3>
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col text-end ">
            <h3 className="font-bold text-blue-400 capitalize">{user.name}</h3>
            <h3 className="font-base text-white text-md capitalize text-xs">
              {user.course_module}
            </h3>
          </div>
          <Button children="Logout" width={"w-9"}>
            <span className="material-icons">logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

//

// return (
//   <header>
//     <div className="flex w-full justify-around">
//       <div className="flex space-x-2 text-md">
//         <span className="font-bold text-white  ">Olá,</span>
//         <h3 className="font-bold text-blue-400 capitalize">{user.name} !</h3>
//       </div>
//       <h3 className="font-bold text-white text-md capitalize">
//         {user.course_module}
//       </h3>
//     </div>
//   </header>
