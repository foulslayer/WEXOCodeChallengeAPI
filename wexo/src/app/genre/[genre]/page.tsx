"use client";

import { usePathname } from "next/navigation";
import Modal from "@/components/Modal";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDIzOGYxOWM5ZGMzNjVkY2M0YWIxODRlMDNjOThhZSIsIm5iZiI6MTczNjUwMTMxMC45MjksInN1YiI6IjY3ODBlODNlZWU4NGZhNGRlZjdiMGJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GSYS12SVOm2w-8GeKEojl-VTBhBV1jVSfUEostn4WKw";
// ville normalt havde min api key i .env file

async function fetchData(page: number, genreNumber: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreNumber}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    } // tjek hver dag om sket ændringer er sket
  }
  return res.json();
}

const genreMap: { [key: string]: number } = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  "science fiction": 878,
  "tv movie": 10770,
  thriller: 53,
  war: 10752,
  western: 37,
};

export default function GenrePage() {
  const [selectedGenreData, setSelectedGenreData] = useState({ data: { results: [] }, currentPage: 1 });
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const pathname = usePathname();
  const genreFromPath = pathname.split("/").pop() || "";
  const genreNumber: number | undefined = genreMap[genreFromPath];

  if (genreNumber === undefined) {
    console.error(`Genre "${genreFromPath}" not found in genreMap.`);
  }

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setSelectedGenreData((prevState) => ({
        ...prevState,
        currentPage: prevState.currentPage + 1,
      }));
    }
  }, [inView]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await fetchData(selectedGenreData.currentPage, genreNumber);

        setSelectedGenreData((prevState: any) => ({
          ...prevState,
          data: {
            ...newData,
            results: [...prevState.data.results, ...newData.results],
          },
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadMovies();
  }, [selectedGenreData.currentPage, genreNumber]);

  const handleOpenModal = (movie: any) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-[100vw] bg-neutral-900">
      <div>
        {/** Action */}
        <div className="flex flex-wrap justify-center">
          <span className="px-4 text-white text-xl bg-slate-950 w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl  ">{genreFromPath}</span>
          {selectedGenreData.data.results.map((movie: any) => (
            <div key={movie.id} className="flex flex-wrap m-2 w-[23%]  ">
              {/* Added margin to give spacing between cards */}
              <div onClick={() => handleOpenModal(movie)} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[40rem] max-h-[40rem] ">
                <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                  <span className="text-sm font-medium text-slate-600 ">
                    <h2>{movie.title}</h2> {/*cards header*/}
                  </span>
                </div>

                <div className="p-4">
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} loading="eager" className="w-full h-full object-cover rounded-t-lg " />
                </div>

                <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
                  <span className="text-sm text-slate-600 font-medium">{/*cards footer*/}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-500" ref={ref} style={{ height: "10wh" }}></div>
      </div>

      {/* Modal Component */}
      <Modal show={showModal} onClose={handleCloseModal} movie={selectedMovie} />
    </div>
  );
}
