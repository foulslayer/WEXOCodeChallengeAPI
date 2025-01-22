"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDIzOGYxOWM5ZGMzNjVkY2M0YWIxODRlMDNjOThhZSIsIm5iZiI6MTczNjUwMTMxMC45MjksInN1YiI6IjY3ODBlODNlZWU4NGZhNGRlZjdiMGJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GSYS12SVOm2w-8GeKEojl-VTBhBV1jVSfUEostn4WKw";
// ville normalt havde min api key i .env file

async function fetchData(page: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    } // tjek hver dag om sket ændringer er sket
  }
  return res.json();
}

async function Action(page: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=28 `, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    } // tjek hver dag om sket ændringer er sket
  }
  return res.json();
}

async function Comedy(page: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=35 `, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    }
  }
  return res.json();
}

async function Thriller(page: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=53 `, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    }
  }
  return res.json();
}

async function War(page: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=10752 `, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    }
  }
  return res.json();
}

async function Romance(page: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=10749 `, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    }
  }
  return res.json();
}

async function Drama(page: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=18 `, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    }
  }
  return res.json();
}

async function Crime(page: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=80 `, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    }
  }
  return res.json();
}

async function Documentary(page: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=99 `, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    }
  }
  return res.json();
}

async function Horror(page: number) {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=27 `, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  {
    next: {
      revalidate: 86400;
    }
  }
  return res.json();
}

Crime;

export default function HomePage() {
  const [state, setState] = useState({
    data: { results: [] },
    currentPage: 1,
  });

  // jeg valgt at havde Gerne i en state for sig selv så opdate dem ville være hurtigere og havde nemere control over dem.
  const [actionData, setActionData] = useState({ data: { results: [] }, currentPage: 1 });
  const [comedyData, setComedyData] = useState({ data: { results: [] }, currentPage: 1 });
  const [thrillerData, setThrillerData] = useState({ data: { results: [] }, currentPage: 1 });
  const [warData, setWarData] = useState({ data: { results: [] }, currentPage: 1 });
  const [romanceData, setRomanceData] = useState({ data: { results: [] }, currentPage: 1 });
  const [dramaData, setDramaData] = useState({ data: { results: [] }, currentPage: 1 });
  const [crimeData, setCrimeData] = useState({ data: { results: [] }, currentPage: 1 });
  const [documentaryData, setDocumentaryData] = useState({ data: { results: [] }, currentPage: 1 });
  const [horrorData, setHorrorData] = useState({ data: { results: [] }, currentPage: 1 });

  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (movie: any) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await Action(actionData.currentPage);
        console.log(actionData);
        setActionData((prevState: any) => {
          const updatedResults = new Set([...prevState.data.results, ...newData.results]);

          return {
            ...prevState,
            data: {
              ...newData,
              results: Array.from(updatedResults), // Convert Set back to an array
            },
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadMovies();
  }, [actionData.currentPage]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await Comedy(comedyData.currentPage);
        setComedyData((prevState: any) => {
          const updatedResults = new Set([...prevState.data.results, ...newData.results]);

          return {
            ...prevState,
            data: {
              ...newData,
              results: Array.from(updatedResults), // Convert Set back to an array
            },
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadMovies();
  }, [comedyData.currentPage]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await Thriller(thrillerData.currentPage);
        setThrillerData((prevState: any) => {
          const updatedResults = new Set([...prevState.data.results, ...newData.results]);

          return {
            ...prevState,
            data: {
              ...newData,
              results: Array.from(updatedResults), // Convert Set back to an array
            },
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadMovies();
  }, [thrillerData.currentPage]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await War(warData.currentPage);
        setWarData((prevState: any) => {
          const updatedResults = new Set([...prevState.data.results, ...newData.results]);

          return {
            ...prevState,
            data: {
              ...newData,
              results: Array.from(updatedResults), // Convert Set back to an array
            },
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadMovies();
  }, [warData.currentPage]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await Romance(romanceData.currentPage);
        setRomanceData((prevState: any) => {
          const updatedResults = new Set([...prevState.data.results, ...newData.results]);

          return {
            ...prevState,
            data: {
              ...newData,
              results: Array.from(updatedResults), // Convert Set back to an array
            },
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadMovies();
  }, [romanceData.currentPage]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await Drama(dramaData.currentPage);
        setDramaData((prevState: any) => {
          const updatedResults = new Set([...prevState.data.results, ...newData.results]);

          return {
            ...prevState,
            data: {
              ...newData,
              results: Array.from(updatedResults), // Convert Set back to an array
            },
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadMovies();
  }, [dramaData.currentPage]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await Crime(crimeData.currentPage);
        setCrimeData((prevState: any) => {
          const updatedResults = new Set([...prevState.data.results, ...newData.results]);

          return {
            ...prevState,
            data: {
              ...newData,
              results: Array.from(updatedResults), // Convert Set back to an array
            },
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadMovies();
  }, [crimeData.currentPage]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await Documentary(documentaryData.currentPage);
        setDocumentaryData((prevState: any) => {
          const updatedResults = new Set([...prevState.data.results, ...newData.results]);
          return {
            ...prevState,
            data: {
              ...newData,
              results: Array.from(updatedResults), // Convert Set back to an array
            },
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadMovies();
  }, [documentaryData.currentPage]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await Horror(horrorData.currentPage);
        setHorrorData((prevState: any) => {
          const updatedResults = new Set([...prevState.data.results, ...newData.results]);
          return {
            ...prevState,
            data: {
              ...newData,
              results: Array.from(updatedResults), // Convert Set back to an array
            },
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadMovies();
  }, [horrorData.currentPage]);

  useEffect(() => {
    console.log(state.currentPage);
    const loadMovies = async () => {
      try {
        const newData = await fetchData(state.currentPage);

        setState((prevState: any) => ({
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
  }, [state.currentPage]);

  const updateCurrentPage = async () => {
    setActionData((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
    }));
  };

  return (
    <div className="max-w-[100vw] bg-neutral-900 ">
      {/* Navnar Component */}
      <Navbar />
      {!showModal && (
        <div className="fixed top-[9%] left-[48%]  z-10 text-[1.8rem] text-cyan-500">
          <FontAwesomeIcon icon={faArrowLeft} className="mx-1" />
          <FontAwesomeIcon icon={faHand} className="mx-1" />
          <FontAwesomeIcon icon={faArrowRight} className="mx-1" />
        </div>
      )}
      <div>
        {/** Action */}
        <div className="flex flex-row flex-wrap ">
          <span className="px-4 text-white text-xl bg-slate-950 w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl "> Action</span>
          <div className="carousel rounded-box w-full overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex space-x-4">
              {actionData.data.results.map((movie: any, key: any) => (
                <div key={key} className=" m-2 carousel-item w-1/4 shrink-0 ">
                  {/* Added margin to give spacing between cards */}
                  <div onClick={() => handleOpenModal(movie)} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[40rem] max-h-[40rem] ">
                    <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                      <span className="text-sm font-medium text-slate-600 text-center ">
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
              <button
                onClick={() =>
                  setActionData((prevState) => ({
                    ...prevState,
                    currentPage: prevState.currentPage + 1,
                  }))
                }
                className="my-8 px-4 py-2 bg-blue-500 text-white rounded min-h-[40rem] max-h-[40rem]"
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
        {/** Comedy */}
        <div className="flex flex-row flex-wrap ">
          <span className="px-4 text-white text-xl bg-black w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl ">Comedy</span>
          <div className="carousel rounded-box w-full overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex space-x-4">
              {comedyData.data.results.map((movie: any, key: any) => (
                <div key={key} className=" m-2 carousel-item w-1/4 shrink-0 ">
                  {/* Added margin to give spacing between cards */}
                  <div onClick={() => handleOpenModal(movie)} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[40rem] max-h-[40rem] ">
                    <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                      <span className="text-sm font-medium text-slate-600 text-center">
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
              <button
                onClick={() =>
                  setComedyData((prevState) => ({
                    ...prevState,
                    currentPage: prevState.currentPage + 1,
                  }))
                }
                className="my-8 px-4 py-2 bg-blue-500 text-white rounded min-h-[40rem] max-h-[40rem]"
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
        {/** Thiller */}
        <div className="flex flex-row flex-wrap ">
          <span className="px-4 text-white text-xl bg-black w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl ">Thriller</span>
          <div className="carousel rounded-box w-full overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex space-x-4">
              {thrillerData.data.results.map((movie: any, key: any) => (
                <div key={key} className=" m-2 carousel-item w-1/4 shrink-0 ">
                  {/* Added margin to give spacing between cards */}
                  <div onClick={() => handleOpenModal(movie)} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[40rem] max-h-[40rem] ">
                    <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                      <span className="text-sm font-medium text-slate-600 text-center">
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
              <button
                onClick={() =>
                  setThrillerData((prevState) => ({
                    ...prevState,
                    currentPage: prevState.currentPage + 1,
                  }))
                }
                className="my-8 px-4 py-2 bg-blue-500 text-white rounded min-h-[40rem] max-h-[40rem]"
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>
      {/** war */}
      <div className="flex flex-row flex-wrap ">
        <span className="px-4 text-white text-xl bg-black w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl ">War</span>
        <div className="carousel rounded-box w-full overflow-x-auto scrollbar-hide scroll-smooth">
          <div className="flex space-x-4">
            {warData.data.results.map((movie: any, key: any) => (
              <div key={key} className=" m-2 carousel-item w-1/4 shrink-0 ">
                {/* Added margin to give spacing between cards */}
                <div onClick={() => handleOpenModal(movie)} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[40rem] max-h-[40rem] ">
                  <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                    <span className="text-sm font-medium text-slate-600 text-center">
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
            <button
              onClick={() =>
                setWarData((prevState) => ({
                  ...prevState,
                  currentPage: prevState.currentPage + 1,
                }))
              }
              className="my-8 px-4 py-2 bg-blue-500 text-white rounded min-h-[40rem] max-h-[40rem]"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
      {/** romance */}
      <div className="flex flex-row flex-wrap ">
        <span className="px-4 text-white text-xl bg-black w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl ">Romance</span>
        <div className="carousel rounded-box w-full overflow-x-auto scrollbar-hide scroll-smooth">
          <div className="flex space-x-4">
            {romanceData.data.results.map((movie: any, key: any) => (
              <div key={key} className=" m-2 carousel-item w-1/4 shrink-0 ">
                {/* Added margin to give spacing between cards */}
                <div onClick={() => handleOpenModal(movie)} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[40rem] max-h-[40rem] ">
                  <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                    <span className="text-sm font-medium text-slate-600 text-center">
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
            <button
              onClick={() =>
                setRomanceData((prevState) => ({
                  ...prevState,
                  currentPage: prevState.currentPage + 1,
                }))
              }
              className="my-8 px-4 py-2 bg-blue-500 text-white rounded min-h-[40rem] max-h-[40rem]"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
      {/** Drama */}
      <div className="flex flex-row flex-wrap ">
        <span className="px-4 text-white text-xl bg-black w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl ">Drama</span>
        <div className="carousel rounded-box w-full overflow-x-auto scrollbar-hide scroll-smooth">
          <div className="flex space-x-4">
            {dramaData.data.results.map((movie: any, key: any) => (
              <div key={key} className=" m-2 carousel-item w-1/4 shrink-0 ">
                {/* Added margin to give spacing between cards */}
                <div onClick={() => handleOpenModal(movie)} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[40rem] max-h-[40rem] ">
                  <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                    <span className="text-sm font-medium text-slate-600 text-center">
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
            <button
              onClick={() =>
                setDramaData((prevState) => ({
                  ...prevState,
                  currentPage: prevState.currentPage + 1,
                }))
              }
              className="my-8 px-4 py-2 bg-blue-500 text-white rounded min-h-[40rem] max-h-[40rem]"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
      {/** Crime */}
      <div className="flex flex-row flex-wrap ">
        <span className="px-4 text-white text-xl bg-black w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl ">Crime</span>
        <div className="carousel rounded-box w-full overflow-x-auto scrollbar-hide scroll-smooth">
          <div className="flex space-x-4">
            {crimeData.data.results.map((movie: any, key: any) => (
              <div key={key} className=" m-2 carousel-item w-1/4 shrink-0 ">
                {/* Added margin to give spacing between cards */}
                <div onClick={() => handleOpenModal(movie)} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[40rem] max-h-[40rem] ">
                  <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                    <span className="text-sm font-medium text-slate-600 text-center ">
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
            <button
              onClick={() =>
                setCrimeData((prevState) => ({
                  ...prevState,
                  currentPage: prevState.currentPage + 1,
                }))
              }
              className="my-8 px-4 py-2 bg-blue-500 text-white rounded min-h-[40rem] max-h-[40rem]"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
      {/** Documentary */}
      <div className="flex flex-row flex-wrap ">
        <span className="px-4 text-white text-xl bg-black w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl ">Documentary</span>
        <div className="carousel rounded-box w-full overflow-x-auto scrollbar-hide scroll-smooth">
          <div className="flex space-x-4">
            {documentaryData.data.results.map((movie: any, key: any) => (
              <div key={key} className=" m-2 carousel-item w-1/4 shrink-0 ">
                {/* Added margin to give spacing between cards */}
                <div onClick={() => handleOpenModal(movie)} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[40rem] max-h-[40rem] ">
                  <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                    <span className="text-sm font-medium text-slate-600 text-center ">
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
            <button
              onClick={() =>
                setDocumentaryData((prevState) => ({
                  ...prevState,
                  currentPage: prevState.currentPage + 1,
                }))
              }
              className="my-8 px-4 py-2 bg-blue-500 text-white rounded min-h-[40rem] max-h-[40rem]"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
      {/** Horror */}
      <div className="flex flex-row flex-wrap ">
        <span className="px-4 text-white text-xl bg-black w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl ">Horror</span>
        <div className="carousel rounded-box w-full overflow-x-auto scrollbar-hide scroll-smooth">
          <div className="flex space-x-4">
            {horrorData.data.results.map((movie: any, key: any) => (
              <div key={key} className=" m-2 carousel-item w-1/4 shrink-0 ">
                /* Added margin to give spacing between cards */
                <div onClick={() => handleOpenModal(movie)} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[40rem] max-h-[40rem] ">
                  <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
                    <span className="text-sm font-medium text-slate-600 text-center">
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
            <button
              onClick={() =>
                setHorrorData((prevState) => ({
                  ...prevState,
                  currentPage: prevState.currentPage + 1,
                }))
              }
              className="my-8 px-4 py-2 bg-blue-500 text-white rounded min-h-[40rem] max-h-[40rem]"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
      {/* Modal Component */}
      <Modal show={showModal} onClose={handleCloseModal} movie={selectedMovie} />
    </div>
  );
}

/**  const [data, setData] = useState<any>({ results: [] });
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch the initial data when the component mounts
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newData = await fetchData(currentPage);
        setData((prev: any) => ({
          ...newData,
          results: [...prev.results, ...newData.results],
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadMovies();
  }, [currentPage]);

  // Load more movies (next page)
  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  }; */
