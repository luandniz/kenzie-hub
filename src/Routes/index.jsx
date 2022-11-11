import { Routes, Route } from "react-router-dom";
import { FormUser } from "../Pages/FormUser";
import { Dashboard } from "../Pages/Dashboard";
import { useEffect, useState } from "react";

export const RoutesComponent = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenziehub:token");

    if (token) {
      return setAuth(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<FormUser auth={auth} setAuth={setAuth} />} />
      <Route
        path="/dashboard"
        element={<Dashboard auth={auth} setAuth={setAuth} />}
      />
    </Routes>
  );
};
