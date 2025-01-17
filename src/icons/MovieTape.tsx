import { cn } from "@/utils/cn";

const MovieTape: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-inherit", className)}
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <path
          opacity=".6"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 4h18a1 1 0 0 1 1 1v1H2V5a1 1 0 0 1 1-1z"
          fill="currentColor"
        />
        <path
          opacity=".3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 2h14a1 1 0 0 1 1 1v1H4V3a1 1 0 0 1 1-1z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 6h22a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 2v3h3V8H1zm0 5v3h3v-3H1zm0 5v3h3v-3H1zM20 8v3h3V8h-3zm0 5v3h3v-3h-3zm0 5v3h3v-3h-3z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MovieTape;
