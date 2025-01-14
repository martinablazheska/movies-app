import moviePlaceHolder from "@/assets/movie-placeholder.jpg";

const MovieCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full h-full display flex flex-col gap-3 p-4 bg-white rounded-lg shadow-md">
      <img
        src={moviePlaceHolder}
        alt="Abstract art placeholder"
        className="opacity-65 rounded-lg"
      />
      <div>
        <h2 className="font-semibold text-slate-800 truncate whitespace-nowrap overflow-hidden">
          {title}
        </h2>
        <p className="text-xs text-slate-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          repellat voluptas ipsum ullam corporis debitis.
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
