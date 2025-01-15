import { cn } from "@/lib/utils";

const Clear: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="-0.5 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-inherit", className)}
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <path
          d="M3 21.32L21 3.32001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 3.32001L21 21.32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Clear;
