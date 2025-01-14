export type MovieType = {
  id: string;
  title: string;
};

export type MoviesResponseType = {
  total: number;
  items: MovieType[];
};
