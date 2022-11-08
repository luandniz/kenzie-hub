import { useState } from "react";
import { ListTechnology } from "../../Components/ListTechnology";
import { ListWorks } from "../../Components/ListWorks";
import { Header } from "../../Components/Header";

export const Dashboard = () => {
  const [showPage, setShowPage] = useState(true);
  return (
    <div className="bg-black w-full h-screen ">
      <Header />

      <div className="w-full flex justify-center">
        {showPage ? (
          <ListTechnology setShowPage={setShowPage} />
        ) : (
          <ListWorks setShowPage={setShowPage} />
        )}
      </div>
    </div>
  );
};
