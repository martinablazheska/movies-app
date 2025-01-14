import MovieCard from "@/components/MoviesList/MovieCard";
import { useMovies } from "@/hooks/useMovies";

const MoviesList = () => {
  const { movies } = useMovies();
  return (
    <div className="h-full w-full px-4 py-10">
      {movies.length > 0 ? (
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 ">
          {movies.map(movie => (
            <MovieCard key={movie.id} title={movie.title} />
          ))}
        </div>
      ) : (
        // @TODO: Create a better screen for this scenario
        <span className="text-slate-700">No movies to display...</span>
      )}
    </div>
  );
};

export default MoviesList;
