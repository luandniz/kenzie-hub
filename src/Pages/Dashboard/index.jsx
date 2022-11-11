import { useState } from "react";
import { ListTechnology } from "../../Components/ListTechnology";
import { ListWorks } from "../../Components/ListWorks";
import { Header } from "../../Components/Header";
import { Navigate } from "react-router-dom";

export const Dashboard = ({ auth, setAuth }) => {
  const [showPage, setShowPage] = useState(true);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-black w-full h-screen ">
      <Header setAuth={setAuth} />

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
