import Header from "@/components/Header/Header";
import MoviesList from "@/components/MoviesList/MoviesList";

const mockResponse = {
  total: 96,
  items: [
    {
      id: "de75e530-40ed-428e-b954-61c3fa133b7f",
      title: "The Shawshank Redemption",
    },
    {
      id: "44a6d227-15f0-44a3-bcc7-9bbf789edd45",
      title: "The Godfather",
    },
    {
      id: "6ce4b5ab-6673-44d7-9ae8-05c06d4f61c4",
      title: "Pulp Fiction",
    },
    {
      id: "1aa62b54-8d04-4b4b-b3ba-6aef3e0f9854",
      title: "The Dark Knight",
    },
    {
      id: "c7e8ee7e-9b12-41e7-826b-687512164752",
      title: "Fight Club",
    },
    {
      id: "2ccf5723-6749-4245-8120-1e1617008d6a",
      title: "Forrest Gump",
    },
    {
      id: "25515771-ba43-47ad-a5a7-5ce3f6240305",
      title: "Inception",
    },
    {
      id: "0034e362-7c6b-44b7-a043-43cec6adda5c",
      title: "The Matrix",
    },
    {
      id: "2cb0bdf2-00b5-45f1-ad50-6142cd92e915",
      title: "Goodfellas",
    },
    {
      id: "a252f7ce-09ad-446e-b1f8-7d3b0ddb2713",
      title: "Star Wars: Episode IV - A New Hope",
    },
  ],
};

function App() {
  return (
    <div>
      <Header />
      <MoviesList movies={mockResponse.items} />
    </div>
  );
}

export default App;
