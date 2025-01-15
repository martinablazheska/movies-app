import { useMovies } from "@/hooks/useMovies";
import ChevronLeft from "@/icons/ChevronLeft";
import ChevronRight from "@/icons/ChevronRight";

const Pagination = () => {
  const { currentPage, totalPages, setPage, hasNextPage, hasPreviousPage } =
    useMovies();

  const renderPageNumbers = () => {
    const range = (start: number, end: number) =>
      Array.from({ length: end - start + 1 }, (_, i) => start + i);

    let pages: (number | string)[] = [];

    if (totalPages <= 5) {
      pages = range(1, totalPages);
    } else {
      if (currentPage <= 3) {
        pages = [...range(1, 4), "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, "...", ...range(totalPages - 3, totalPages)];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    return pages.map((page, index) =>
      page === "..." ? (
        <span
          key={`ellipsis-${index}`}
          className="text-slate-600 dark:text-slate-300 text-sm"
        >
          ...
        </span>
      ) : (
        <button
          key={`page-${page}`}
          onClick={() => setPage(page as number)}
          className={`w-8 h-8 rounded-full text-sm ${
            currentPage === page
              ? "bg-violet-800 text-white dark:bg-violet-500"
              : "text-slate-600 dark:text-slate-300 hover:bg-violet-100 dark:hover:bg-violet-900"
          }`}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div className="w-[100vw] flex justify-center items-center gap-3 py-2 shadow-lg bg-white dark:bg-slate-800 fixed -bottom-1 left-0 md:w-full md:shadow-none md:bg-transparent dark:md:bg-transparent md:static md:mt-auto">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={!hasPreviousPage}
        className="w-5 h-5 text-violet-800 dark:text-violet-500 disabled:text-slate-400 text-3xl"
      >
        <ChevronLeft />
      </button>

      <div className="flex items-center gap-2">{renderPageNumbers()}</div>

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
