export const CardTechnology = ({ element, EditTech, deleteTechnology }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-[#121214] text-white h-12 py-2 px-3 rounded">
      <p>{element.title}</p>
      <div className="flex space-x-3">
        <p>{element.status}</p>
        <button
          onClick={() => EditTech(element)}
          className="hover:bg-white/[0.2] rounded "
        >
          <span className="material-icons text-sm px-1">edit</span>
        </button>
        <button
          onClick={() => deleteTechnology(element.id)}
          className="hover:bg-white/[0.2] rounded"
        >
          <span className="material-icons text-sm px-1">delete</span>
        </button>
      </div>
    </div>
  );
};
