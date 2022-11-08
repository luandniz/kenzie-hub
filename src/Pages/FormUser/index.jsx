import { useState } from "react";
import { FormRegister } from "../../Components/FormRegister";
import { FormLogin } from "../../Components/FormLogin";

export const FormUser = () => {
  const [registerComponent, setRegisterComponent] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900">
      {registerComponent ? (
        <FormRegister setRegisterComponent={setRegisterComponent} />
      ) : (
        <FormLogin setRegisterComponent={setRegisterComponent} />
      )}
    </div>
  );
};
