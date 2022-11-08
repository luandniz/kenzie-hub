export const Input = ({
  type,
  icon,
  register,
  name,
  error,
  placeholder,
  ...rest
}) => {
  return (
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <span
          aria-hidden="true"
          className="material-icons w-5 text-gray-500 dark:text-gray-400"
        >
          {icon}
        </span>
      </div>
      <input
        {...rest}
        {...register(name)}
        type={type}
        id="input-group-1"
        className="w-full h-12 p-2 pl-11 rounded border bg-white border-grey-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 focus:outline-none transition duration-500 ease-in-out text-sm"
        placeholder={placeholder}
      />
      {!!error && (
        <label className="z-10 absolute left-[3px] top-[-6px] text-[0.65rem] text-gray-500 dark:text-gray-300 ">
          <span className="text-red-500 p-1 bg-gray-100  space-x-2">
            ** {error}
          </span>
        </label>
      )}
    </div>
  );
};
