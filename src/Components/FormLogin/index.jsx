import { Button } from "../Button";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services";
import { useNavigate } from "react-router-dom";

export const FormLogin = ({ setRegisterComponent, setAuth }) => {
  const Navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Mínimo seis caracteres"),
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
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem("@kenziehub:token", response.data.token);
        localStorage.setItem(
          "@kenziehub:user",
          JSON.stringify(response.data.user)
        );
        localStorage.setItem("@kenziehub:id", response.data.user.id);
        Navigate("/dashboard");
        setAuth(true);

        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3 w-96 bg-[#212529] py-4 px-5 rounded"
    >
      <h3 className="text-center text-blue-500 font-bold text-2xl">SIGN IN</h3>

      <Input
        placeholder="Email"
        icon="email"
        type="email"
        register={register}
        name="email"
        error={errors.email?.message}
      />

      <Input
        placeholder="Senha"
        type="password"
        icon="lock"
        register={register}
        name="password"
        error={errors.password?.message}
      />

      <div>
        <Button width={"w-full"} children="Logar" />

        <div className="flex flex-row justify-center text-sm mt-4 space-x-2 text-white">
          <p>Ainda não possui cadastro?</p>
          <p
            onClick={() => setRegisterComponent(true)}
            className="text-blue-500 cursor-pointer"
          >
            Faça agora o seu !
          </p>
        </div>
      </div>
    </form>
  );
};
