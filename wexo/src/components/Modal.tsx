const Modal = ({ show, onClose, movie }: { show: boolean; onClose: () => void; movie: any }) => {
  if (!show) return null;

  const genreMap: { [key: number]: string } = {
    28: "action",
    12: "adventure",
    16: "animation",
    35: "comedy",
    80: "crime",
    99: "documentary",
    18: "drama",
    10751: "family",
    14: "fantasy",
    36: "history",
    27: "horror",
    10402: "music",
    9648: "mystery",
    10749: "romance",
    878: "science fiction",
    10770: "tv movie",
    53: "thriller",
    10752: "war",
    37: "western",
  };

  return (
    <div className="max-w-[100vw]">
      <div className="fixed top-0 left-0  w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg max-w-[500px] h-[80vh] overflow-y-auto shadow-lg">
          <h2 className="flex justify-center items-center">{movie.title}</h2>
          <div className="h-[18rem]">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} loading="eager" className="w-full h-full object-contain rounded-t-lg" />
          </div>

          <br />
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Genres: {movie.genre_ids.map((genreId: number) => genreMap[genreId]).join(", ")}</p>
          <br />
          <p>{movie.overview}</p>
          <div className="flex justify-center flex-grow">
            <button onClick={onClose} className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
