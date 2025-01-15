import { useMovies } from "@/hooks/useMovies";
import Pagination from "@/components/Pagination";
import MovieCard from "@/components/MovieCard";

const MoviesGrid = () => {
  const { movies } = useMovies();

  return (
    <div className="flex-grow flex flex-col justify-between">
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 py-4 mb-12 md:mb-0">
        {movies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default MoviesGrid;
