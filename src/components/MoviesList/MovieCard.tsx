import moviePlaceHolder from "@/assets/movie-placeholder.jpg";
import MovieCardTitle from "@/components/MoviesList/MovieCardTitle";
import MovieCardDescription from "./MovieCardDescription";

const MovieCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full h-full display flex flex-col gap-3 p-4 bg-white rounded-lg shadow-md">
      <img
        src={moviePlaceHolder}
        alt="Abstract art placeholder"
        className="opacity-65 rounded-lg"
      />
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
