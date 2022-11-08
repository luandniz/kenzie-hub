export const Button = ({ children, width, height, ...rest }) => {
  return (
    <button
      className={`flex ${width} ${height} justify-center items-center bg-blue-500 hover:bg-blue-400 transition-all delay-150 p-2 text-white rounded uppercase`}
      {...rest}
    >
      {children}
    </button>
  );
};
