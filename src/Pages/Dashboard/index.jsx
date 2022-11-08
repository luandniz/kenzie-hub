import { useState } from "react";
import { FormTechnology } from "../../Components/FormTechnology";
import { FormWorks } from "../../Components/FormWorks";
import { Header } from "../../Components/Header";

export const Dashboard = () => {
  const [showPage, setShowPage] = useState(true);
  return (
    <div className="bg-black w-full h-screen ">
      <Header />

      <div className="w-full flex justify-center">
        {showPage ? (
          <FormTechnology setShowPage={setShowPage} />
        ) : (
          <FormWorks setShowPage={setShowPage} />
        )}
      </div>
    </div>
  );
};
