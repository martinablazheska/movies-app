import { useMovies } from "@/hooks/useMovies";
import ChevronLeft from "@/icons/ChevronLeft";
import ChevronRight from "@/icons/ChevronRight";

const Pagination = () => {
  const { currentPage, totalPages, setPage, hasNextPage, hasPreviousPage } =
    useMovies();
  return (
    <div className="w-full flex justify-center items-center gap-3 py-2 shadow-lg bg-white sticky border-t border-t-slate-300 lg:shadow-none lg:border-none lg:bg-transparent lg:static lg:mt-auto">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={!hasPreviousPage}
        className="w-5 h-5 text-violet-800 disabled:text-slate-400 text-3xl"
      >
        <ChevronLeft />
      </button>

      <span className=" text-slate-600">
        {currentPage}/{totalPages}
      </span>

      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={!hasNextPage}
        className="w-5 h-5 text-violet-800 disabled:text-slate-400 text-3xl"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
