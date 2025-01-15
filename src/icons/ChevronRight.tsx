import { cn } from "@/utils/cn";

const ChevronRight: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-inherit", className)}
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M9 6L15 12L9 18"
          fill="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ChevronRight;
