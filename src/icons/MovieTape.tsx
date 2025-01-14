import { cn } from "@/lib/utils";

const MovieTape: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-inherit", className)}
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <path
          d="M917.333333 832V512h-85.333333v320c0 106.666667 85.333333 192 192 192v-85.333333c-59.733333 0-106.666667-46.933333-106.666667-106.666667z"
          fill="currentColor"
        />
        <path
          d="M512 512m-405.333333 0a405.333333 405.333333 0 1 0 810.666666 0 405.333333 405.333333 0 1 0-810.666666 0Z"
          fill="#90A4AE"
        />
        <path
          d="M512 512m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z"
          fill="#37474F"
        />
        <path
          d="M512 298.666667m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0Z"
          fill="currentColor"
        />
        <path
          d="M512 725.333333m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0Z"
          fill="currentColor"
        />
        <path
          d="M725.333333 512m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z"
          fill="currentColor"
        />
        <path
          d="M298.666667 512m-106.666667 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MovieTape;
