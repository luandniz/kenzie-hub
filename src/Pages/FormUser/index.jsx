import { useState } from "react";
import { FormRegister } from "../../Components/FormRegister";
import { FormLogin } from "../../Components/FormLogin";
import { Navigate } from "react-router-dom";

export const FormUser = ({ auth, setAuth }) => {
  const [registerComponent, setRegisterComponent] = useState(false);
  console.log(auth);

  if (auth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
      {registerComponent ? (
        <FormRegister setRegisterComponent={setRegisterComponent} />
      ) : (
        <FormLogin
          setRegisterComponent={setRegisterComponent}
          setAuth={setAuth}
        />
      )}
    </div>
  );
};
