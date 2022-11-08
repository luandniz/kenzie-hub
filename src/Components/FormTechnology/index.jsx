import { api } from "../../Services";
import { useEffect, useState } from "react";
import { ModalAddTechnology } from "./ModalAddTechnology";
import { ModalEditTechnology } from "./ModalEditTechnology";
import { CardTechnology } from "../Cards/CardTechnology";

export const FormTechnology = ({ setShowPage }) => {
  const [token] = useState(localStorage.getItem("@kenziehub:token") || "");
  const userId = localStorage.getItem("@kenziehub:id") || "";
  const [techs, setTechs] = useState([]);
  const [showModalAddTechs, setShowModalAddTechs] = useState(false);
  const [showModalEditTechs, setShowModalEditTechs] = useState(false);
  const [elementEdit, setElementEdit] = useState({});

  useEffect(() => {
    getTechnology();
  }, []);

  const getTechnology = () => {
    api
      .get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTechs(response.data.techs);
      });
  };

  const deleteTechnology = (tech_id) => {
    api
      .delete(`/users/techs/${tech_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getTechnology();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const EditTech = (data) => {
    setShowModalEditTechs(true);
    setElementEdit(data);
  };

  return (
    <div className="w-[70%]">
      {showModalAddTechs && (
        <ModalAddTechnology
          setShowModalAddTechs={setShowModalAddTechs}
          getTechnology={getTechnology}
        />
      )}

      {showModalEditTechs && (
        <ModalEditTechnology
          setShowModalEditTechs={setShowModalEditTechs}
          elementEdit={elementEdit}
          getTechnology={getTechnology}
          techs={techs}
        />
      )}

      <div className="flex flex-col mt-4 ">
        <div className="flex items-center flex-row justify-between h-10">
          <div className="flex space-x-3 items-center">
            <button
              onClick={() => setShowModalAddTechs(true)}
              className="flex justify-center items-center h-8 w-8 bg-blue-500 hover:bg-blue-400 transition-all delay-150 rounded text-3xl text-white"
            >
              <span className="material-icons">add</span>
            </button>
            <h3 className="text-white font-bold">LISTA DE TECNOLOGIAS</h3>
          </div>

          <h3
            onClick={() => setShowPage(false)}
            className="text-white font-bold uppercase cursor-pointer"
          >
            Ir para Portfólio
          </h3>
        </div>

        <div className="bg-[#212529] space-y-3 p-5 mt-4">
          {techs.map((element, index) => (
            <CardTechnology
              key={index}
              element={element}
              EditTech={EditTech}
              deleteTechnology={deleteTechnology}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
