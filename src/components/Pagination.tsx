import { useMovies } from "@/hooks/useMovies";
import { usePagination } from "@/hooks/usePagination";
import PaginationButton from "@/components/PaginationButton";
import ChevronLeft from "@/icons/ChevronLeft";
import ChevronRight from "@/icons/ChevronRight";

const Pagination = () => {
  const { currentPage, totalPages, setPage, hasNextPage, hasPreviousPage } =
    useMovies();

  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount: 1,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className="w-[100vw]  py-2 shadow-lg bg-white dark:bg-slate-800 fixed -bottom-1 left-0 md:w-full md:shadow-none md:bg-transparent dark:md:bg-transparent md:static md:mt-auto">
      <div className="max-w-screen-2xl w-full flex justify-center items-center gap-3 mx-auto">
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={!hasPreviousPage}
          className="w-5 h-5 text-violet-800 dark:text-violet-500 disabled:text-slate-400 text-3xl"
        >
          <ChevronLeft />
        </button>

        <div className="flex items-center gap-2">
          {paginationRange.map((pageNumber, index) => (
            <PaginationButton
              key={index}
              page={pageNumber}
              currentPage={currentPage}
              onClick={setPage}
            />
          ))}
        </div>

        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={!hasNextPage}
          className="w-5 h-5 text-violet-800 dark:text-violet-500 disabled:text-slate-400 text-3xl"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
