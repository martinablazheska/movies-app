import { createContext, useState, useEffect } from "react";
import { MovieType, MoviesResponseType } from "@/utils/types";
import { useUrlParams } from "@/hooks/useUrlParams";

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
  query: string;
  setQuery: (query: string) => void;
};

export const MoviesContext = createContext<MoviesContextType | undefined>(
  undefined
);

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const { searchParams, updateUrl } = useUrlParams();

  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(searchParams.page);
  const [totalItems, setTotalItems] = useState(0);
  const [query, setQueryState] = useState(searchParams.query);

  const LIMIT = 10;
  const totalPages = Math.ceil(totalItems / LIMIT);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  const setQuery = (newQuery: string) => {
    setQueryState(newQuery);
    setCurrentPage(1);
    updateUrl(1, newQuery);
  };

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      updateUrl(page, query);
    }
  };

  // Handle browser navigation
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = Number(params.get("page")) || 1;
      const searchQuery = params.get("query") || "";

      setCurrentPage(page);
      setQueryState(searchQuery);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Fetch movies when page or query changes
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const skip = (currentPage - 1) * LIMIT;
        const response = await fetch(
          `https://november7-730026606190.europe-west1.run.app/movies/?skip=${skip}&limit=${LIMIT}&query=${query}`
        );

        if (response.status === 422) {
          const validationError = await response.json();
          throw new Error(`${validationError.detail[0]?.msg}`);
        }

        if (!response.ok) {
          throw new Error(`Something went wrong`);
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
  }, [currentPage, query]);

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
        query,
        setQuery,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
