import Logo from "@/components/Header/Logo";

const Header = () => {
  return (
    <div className="w-full sticky top-0 flex justify-between items-center p-4 bg-white border-b border-b-slate-300">
      <div className="flex items-center gap-3">
        <Logo />
        <h1 className="font-semibold text-slate-800 text-xl">
          Movies Collection
        </h1>
      </div>
    </div>
  );
};

export default Header;
