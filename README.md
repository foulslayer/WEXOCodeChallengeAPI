 <div className="flex flex-row flex-wrap ">
          <span className="px-4 text-white text-xl bg-black w-full h-[4rem] flex items-center mx-2 mt-3 rounded-xl "> Action</span>
          <div className="carousel rounded-box w-full overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex space-x-4">
              {actiondata.data.results.map((movie: any) => (
                <div key={movie.id} className=" m-2 carousel-item w-1/4 shrink-0 ">
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
