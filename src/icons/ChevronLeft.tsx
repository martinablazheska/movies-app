import { cn } from "@/lib/utils";

const ChevronLeft: React.FC<{ className?: string }> = ({ className }) => {
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
          d="M15 6L9 12L15 18"
          fill="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ChevronLeft;
