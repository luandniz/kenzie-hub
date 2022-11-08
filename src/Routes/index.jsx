import { Routes, Route } from "react-router-dom";
import { FormUser } from "../Pages/FormUser";
import { Dashboard } from "../Pages/Dashboard";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<FormUser />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
