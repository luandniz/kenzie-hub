import { useState, useEffect } from "react";
import { CardWork } from "../Cards/CardWorks";
import { ModalAddWork } from "../Modal/ModalAddWork";
import { api } from "../../Services";
import { ModalEditWork } from "../Modal/ModalEditTWork";

export const ListWorks = ({ setShowPage }) => {
  const [works, setWorks] = useState([]);
  const [showModalAddWork, setShowModalAddWorks] = useState(false);
  const [showModalEditWork, setShowModalEditWork] = useState(false);
  const [workElement, setWorkElement] = useState([]);
  const user_id = localStorage.getItem("@kenziehub:id");
  const [token] = useState(localStorage.getItem("@kenziehub:token") || "");

  console.log(workElement);

  const getWorks = () => {
    api.get(`/users/${user_id}`).then((response) => {
      setWorks(response.data.works);
    });
  };

  const deleteWork = (work_id) => {
    console.log(work_id);
    api
      .delete(`/users/works/${work_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getWorks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <div className="w-[70%]">
      {showModalAddWork && (
        <ModalAddWork
          setShowModalAddWorks={setShowModalAddWorks}
          getWorks={getWorks}
          setWorks={setWorks}
        />
      )}

      {showModalEditWork && (
        <ModalEditWork
          setShowModalEditWork={setShowModalEditWork}
          workElement={workElement}
          getWorks={getWorks}
        />
      )}

      <div className="flex flex-col mt-4 ">
        <div className="flex items-center flex-row justify-between h-10">
          <div className="flex space-x-3 items-center">
            <button
              onClick={() => setShowModalAddWorks(true)}
              className="flex justify-center items-center h-8 w-8 bg-blue-500 hover:bg-blue-400 transition-all delay-150 rounded text-3xl text-white"
            >
              <span className="material-icons">add</span>
            </button>
            <h3 className="text-white font-bold uppercase">Portfólio</h3>
          </div>
          <h3
            onClick={() => setShowPage(true)}
            className="text-white font-bold uppercase cursor-pointer"
          >
            Ir para Techs
          </h3>
        </div>

        <div className="bg-[#212529] space-y-3 p-5 mt-4">
          {works.map((element, index) => (
            <CardWork
              key={index}
              element={element}
              deleteWork={deleteWork}
              setShowModalEditWork={setShowModalEditWork}
              setWorkElement={setWorkElement}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
