import { createContext, useState, useEffect } from "react";
import { MovieType, MoviesResponseType } from "@/utils/types";

type MoviesContextType = {
  movies: MovieType[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  totalItems: number;
  totalPages: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export const MoviesContext = createContext<MoviesContextType | undefined>(
  undefined
);

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const LIMIT = 10;
  const totalPages = Math.ceil(totalItems / LIMIT);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const skip = (currentPage - 1) * LIMIT;
        const response = await fetch(
          `https://november7-730026606190.europe-west1.run.app/movies/?skip=${skip}&limit=${LIMIT}`
        );

        if (response.status === 422) {
          const validationError = await response.json();
          throw new Error(
            `Validation error: ${validationError.detail[0]?.msg}`
          );
        }

        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }

        const data: MoviesResponseType = await response.json();
        setMovies(data.items);
        setTotalItems(data.total);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to fetch movies");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [currentPage]);

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        isLoading,
        error,
        currentPage,
        totalItems,
        totalPages,
        setPage,
        hasNextPage,
        hasPreviousPage,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
