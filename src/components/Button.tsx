import { cn } from "@/lib/utils";

const Button: React.FC<{
  name: string;
  onClick: () => void;
  className?: string;
}> = ({ name, onClick, className }) => {
  return (
    <button
      className={cn(
        "font-semibold rounded-lg px-3 text-white bg-gradient-to-tr from-violet-700 to-violet-500 hover:from-violet-800 hover:to-violet-600 transition-colors duration-300 ease-in-out",
        className
      )}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
