import { Button } from "../Button";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services";

export const FormRegister = ({ setRegisterComponent }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    bio: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    course_module: yup.string().required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Mínimo seis caracteres"),

    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senha diferentes")
      .required("Campo Obrigatório"),
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
      .post("/users", data)
      .then(() => {
        setRegisterComponent(false);
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 min-w-3/4 bg-gray-100 py-4 px-5 rounded"
      >
        <h3 className="text-center text-blue-500 font-bold text-2xl">
          SIGN UP
        </h3>
        <Input
          placeholder="Nome"
          icon="person"
          register={register}
          name="name"
          error={errors.name?.message}
        />
        <Input
          placeholder="Email"
          icon="email"
          type="email"
          register={register}
          name="email"
          error={errors.email?.message}
        />

        <Input
          placeholder="Bio"
          icon="article"
          register={register}
          name="bio"
          error={errors.bio?.message}
        />
        <Input
          placeholder="Telefone"
          icon="smartphone"
          register={register}
          name="contact"
          error={errors.contact?.message}
        />
        <Input
          placeholder="Módulo"
          icon="badge"
          register={register}
          name="course_module"
          error={errors.course_module?.message}
        />
        <div className="flex  flex-row space-x-2 w-full">
          <Input
            placeholder="Senha"
            type="password"
            icon="lock"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Input
            placeholder="Confirmar senha"
            type="password"
            icon="lock"
            register={register}
            name="confirm_password"
            error={errors.confirm_password?.message}
          />
        </div>
        <div>
          <Button children="Cadastrar" />
          <div className="flex flex-row text-sm mt-4 space-x-2 text-gray-500">
            <p>Já possui cadastro?</p>
            <p
              onClick={() => setRegisterComponent(false)}
              className="text-blue-500 cursor-pointer"
            >
              Vá para Login.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
