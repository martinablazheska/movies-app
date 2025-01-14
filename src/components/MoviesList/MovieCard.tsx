import moviePlaceHolder from "@/assets/movie-placeholder.jpg";
import MovieCardTitle from "@/components/MoviesList/MovieCardTitle";
import MovieCardDescription from "./MovieCardDescription";
import Play from "@/icons/Play";

const MovieCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full h-full display flex flex-col gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md">
      <button className="group relative w-full h-48">
        <img
          src={moviePlaceHolder}
          alt="Movie cover"
          className="w-full h-full object-cover opacity-75 group-hover:opacity-55 rounded-lg group-focus:opacity-75 transition-opacity duration-300 ease-out"
        />
        <Play className="absolute inset-0 m-auto h-10 w-10 opacity-0 group-hover:opacity-100 text-white dark:text-violet-500 transition-opacity duration-300 ease-out" />
      </button>
      <div>
        <MovieCardTitle title={title} />
        <MovieCardDescription
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae repellat voluptas ipsum ullam corporis debitis."
          }
        />
      </div>
    </div>
  );
};

export default MovieCard;
