const MAX_DESCRIPTION_LENGTH = 115;

const MovieCardDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? description.slice(0, MAX_DESCRIPTION_LENGTH) + "…"
      : description;
  return (
    <p className="text-xs text-slate-700 dark:text-slate-400">
      {truncatedDescription}
    </p>
  );
};

export default MovieCardDescription;
