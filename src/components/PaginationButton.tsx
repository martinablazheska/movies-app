type PaginationButtonProps = {
  page: number | string;
  currentPage: number;
  onClick: (page: number) => void;
};

const PaginationButton = ({
  page,
  currentPage,
  onClick,
}: PaginationButtonProps) => {
  if (page === "...") {
    return (
      <span className="text-slate-600 dark:text-slate-300 text-sm">...</span>
    );
  }

  return (
    <button
      onClick={() => onClick(page as number)}
      className={`w-8 h-8 rounded-full text-sm ${
        currentPage === page
          ? "bg-violet-800 text-white dark:bg-violet-500"
          : "text-slate-600 dark:text-slate-300 hover:bg-violet-100 dark:hover:bg-violet-900"
      }`}
    >
      {page}
    </button>
  );
};

export default PaginationButton;
