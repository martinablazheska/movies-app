import { useMovies } from "@/hooks/useMovies";
import ChevronLeft from "@/icons/ChevronLeft";
import ChevronRight from "@/icons/ChevronRight";

const Pagination = () => {
  const { currentPage, totalPages, setPage, hasNextPage, hasPreviousPage } =
    useMovies();
  return (
    <div className="w-[100vw] flex justify-center items-center gap-3 py-2 shadow-lg bg-white dark:bg-slate-800 fixed -bottom-1 left-0 md:w-full md:shadow-none md:bg-transparent dark:md:bg-transparent md:static md:mt-auto">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={!hasPreviousPage}
        className="w-5 h-5 text-violet-800 dark:text-violet-500 disabled:text-slate-400 text-3xl"
      >
        <ChevronLeft />
      </button>

      <span className="text-slate-600 dark:text-slate-300 font-medium">
        {currentPage}/{totalPages}
      </span>

      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={!hasNextPage}
        className="w-5 h-5 text-violet-800 dark:text-violet-500 disabled:text-slate-400 text-3xl"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
