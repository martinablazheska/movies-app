import { useMovies } from "@/hooks/useMovies";
import Loader from "@/components/UI/Loader";
import MovieCard from "@/components/MoviesList/MovieCard";
import MovieTape from "@/icons/MovieTape";

const MoviesList = () => {
  const { movies, isLoading } = useMovies();

  return (
    <div className="w-full flex flex-grow justify-center items-center px-4 py-10 overflow-y-auto">
      {isLoading ? (
        <Loader title="Loading movies..." />
      ) : (
        <>
          {movies.length > 0 ? (
            <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 ">
              {movies.map(movie => (
                <MovieCard key={movie.id} title={movie.title} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3 justify-center items-center">
              <MovieTape className="text-violet-700" />
              <span className="text-slate-700">No movies to display...</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MoviesList;
