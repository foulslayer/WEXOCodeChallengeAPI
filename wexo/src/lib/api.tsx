const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDIzOGYxOWM5ZGMzNjVkY2M0YWIxODRlMDNjOThhZSIsIm5iZiI6MTczNjUwMTMxMC45MjksInN1YiI6IjY3ODBlODNlZWU4NGZhNGRlZjdiMGJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GSYS12SVOm2w-8GeKEojl-VTBhBV1jVSfUEostn4WKw";
/* ville normalt have min API KEY i min .env fil */

export async function fetchData(page: number) {
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
