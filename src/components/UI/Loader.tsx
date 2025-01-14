const Loader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center ">
      <div className="animate-spin h-8 w-8 border-4 border-violet-800 border-t-transparent rounded-full"></div>
      <span className="ml-4 text-slate-700">{title}</span>
    </div>
  );
};

export default Loader;
