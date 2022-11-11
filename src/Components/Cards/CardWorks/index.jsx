export const CardWork = ({
  element,
  setShowModalEditWork,
  deleteWork,
  setWorkElement,
}) => {
  return (
    <div className="flex flex-row justify-between items-center bg-[#121214] text-white h-12 py-2 px-3 rounded">
      <p>{element.title}</p>
      <p>{element.description}</p>
      <div className="flex space-x-3">
        <p>{element.deploy_url}</p>
        <button
          onClick={() => {
            setShowModalEditWork(true);
            setWorkElement(element);
          }}
          className="hover:bg-white/[0.2] rounded "
        >
          <span className="material-icons text-sm px-1">edit</span>
        </button>
        <button
          onClick={() => deleteWork(element.id)}
          className="hover:bg-white/[0.2] rounded"
        >
          <span className="material-icons text-sm px-1">delete</span>
        </button>
      </div>
    </div>
  );
};
