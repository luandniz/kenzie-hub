import { Input } from "../../Input";
import { Button } from "../../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../Services";
export const ModalAddWork = ({ setShowModalAddWorks, getWorks }) => {
  const token = localStorage.getItem("@kenziehub:token");

  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    deploy_url: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    api
      .post("/users/works", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getWorks();
        reset();
        setShowModalAddWorks(false);
      })
      .catch((error) => {
        console.log(error);
      });
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
            onClick={() => setShowModalAddWorks(false)}
          >
            <span className="material-icons">close</span>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-96 ">
              <h3 className="text-center text-blue-500 font-bold text-2xl">
                Adicionar Trabalho ao Portfólio
              </h3>

              <Input
                type="text"
                placeholder="Nome"
                icon=""
                register={register}
                name="title"
              />
              <Input
                type="text"
                placeholder="Descrição"
                icon=""
                register={register}
                name="description"
              />
              <Input
                type="text"
                placeholder="URL"
                icon=""
                register={register}
                name="deploy_url"
              />
              <Button width={"w-full"} children="adicionar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
