import { Button } from "../../Button";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../Services";
import { useState } from "react";

export const ModalEditWork = ({
  setShowModalEditWork,
  workElement,
  getWorks,
}) => {
  const [token] = useState(localStorage.getItem("@kenziehub:token") || "");
  const work_id = workElement.id;
  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    deploy_url: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    api
      .put(`/users/works/${work_id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getWorks();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      id="popup-modal"
      className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full bg-gray-900/[0.4]"
    >
      <div className="  relative w-full max-w-md h-full md:h-auto">
        <div className="relative bg-[#212529] rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            onClick={() => setShowModalEditWork(false)}
          >
            <span className="material-icons">close</span>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-96 ">
              <h3 className="text-center text-blue-500 font-bold text-2xl">
                Editar Status da Tecnologia
              </h3>
              <Input
                placeholder="Nome do Projeto"
                type="text"
                icon="lock"
                register={register}
                name="title"
                error={errors.title?.message}
                // value={workElement.title}
              />
              <Input
                placeholder="Descrição"
                type="text"
                icon="lock"
                register={register}
                name="description"
                error={errors.description?.message}
              />
              <Input
                placeholder="URL"
                type="text"
                icon="lock"
                register={register}
                name="deploy_url"
                error={errors.deploy_url?.message}
              />
              <Button width={"w-full"} children="Salvar" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
