const MovieCardTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="group relative">
      <h2
        className="font-semibold text-slate-800 dark:text-slate-50 truncate whitespace-nowrap overflow-hidden cursor-pointer"
        title={title}
      >
        {title}
      </h2>
      <div className="absolute bottom-6 left-10 hidden group-hover:flex flex-col items-center z-10">
        <span className="bg-slate-800 dark:bg-slate-700 text-white text-xs rounded p-2 z-20">
          {title}
        </span>
        <span className="w-2 h-2 rotate-45 bg-slate-800 dark:bg-slate-700 -translate-y-1" />
      </div>
    </div>
  );
};

export default MovieCardTitle;
