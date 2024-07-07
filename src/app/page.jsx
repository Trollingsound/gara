'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  const [slider, setSlider] = useState(false);
  const [loading, setLoading] = useState(null);
  const [movies, setMovies] = useState(null);
  const [tv, setTv] = useState(null);

  useEffect(() => {
    async function handlerTv() {
      setLoading(true)
      const fetchData = await (await fetch(`/api/home`, { method: "POST" })).json();
      setTv(await fetchData?.tv)
      setLoading(false)
      console.log(await fetchData)
    }
    handlerTv()

    async function handlerMovies() {
      setLoading(true)
      const fetchData = await (await fetch(`/api/home`, { method: "POST" })).json();
      setMovies(await fetchData?.movies)
      setLoading(false)
      console.log(await fetchData)
    }
    handlerMovies()
  }, []);

  return (
    <>

      {slider && <>
        <div className="transition-all w-[70%] sm:w-[700px] min-h-screen absolute z-10 bg-[#64748b80]">

          <div className="transition-all w-full flex justify-between">
            <div className="transition-all"></div>

            <div className="transition-all flex justify-center items-center w-14 h-14 p-4 bg-slate-900">
              <svg onClick={() => setSlider(false)} className="lucide lucide-align-left cursor-pointer text-[#ff8f98d4]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </div>

          </div>

        </div>
      </>}

      <div className="py-5 px-9 w-full bg-transparent  min-h-[50px] flex fle-row justify-between items-center">

        <span>
          <svg onClick={() => setSlider(true)} className="lucide lucide-align-left cursor-pointer text-[#ff8f98d4]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" ><line x1="21" x2="3" y1="6" y2="6" /><line x1="15" x2="3" y1="12" y2="12" /><line x1="17" x2="3" y1="18" y2="18" /></svg>
        </span>

        <span className="sm:flex items-center  hidden">
          <input type="text" className="w-full text-[13px] border-2 border-[#ff8f98d4] rounded-lg text-[#e2e2de] pr-14 px-5 py-3 bg-[#3d3d3b] right-1" />
          <div className="relative">
            <div className="absolute right-4 top-[-12px]">
              <svg className="lucide lucide-search cursor-pointer text-[#ff8f98d4]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </div>
          </div>
        </span>


        <span className="sm:hidden block">
          <svg class="lucide lucide-search cursor-pointer text-[#ff8f98d4]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        </span>

      </div>

      <main className="transition-all min-h-screen w-full flex flex-col gap-y-4 justify-center sm:py-2 sm:px-10 p-4">

        <div className="slider w-full bg-[#2e3237] min-h-[240px] sm:min-h-[300px] object-cover overflow-hidden border-2 border-[#ff8f98d4] rounded-[1rem]">

          <img src="https://animerulz.pro/images/sololevelingSlider.png" alt="" srcset="" className=" object-cover w-full h-auto rounded-[1rem]" />

        </div>

        <span className=" text-[#ff8f98d4] poppins-bolder-italic">Trending</span>


        <div className="w-full min-h-[200px] flex gap-y-[3.25rem] sm:gap-x-2 flex-wrap justify-evenly overflow-x-scroll rounded-md px-5 py-2 ">

          {loading && <><span className=" text-[#97a0a5] font-semibold font-mono flex flex-row gap-x-5 overflow-hidden items-center justify-center">

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

          </span></>}

          {!loading && tv ?
            tv.map((r) => (

              <>
                <div className="transition-all imgDiv min-w-[150px] max-h-[209px] flex items-center flex-col overflow-hidden opacity-70 hover:opacity-100">
                  <img onClick={() => router.push(`/ep?view=${r?.id}&t=${r?.title}`)} className="transition-all hover:scale-90 w-[142px] h-[192px] cursor-pointer rounded-[1rem]" loading="lazy" src={r?.image.length < 25 ? `https://anime-world.in${r?.image}` : `${r?.image}`} alt="" />
                  <span className=" flex justify-center items-center py-1 font-normal max-w-[150px] w-[150px] text-[#ff8f98d4] text-[13px] poppins-regular-italic">{r?.title}</span>
                </div>
              </>

            ))
            : ""}

        </div>

        <span className=" text-[#ff8f98d4] poppins-bolder-italic">Movies</span>

        <div className="w-full min-h-[200px] moviesImgContainer flex overflow-x-scroll rounded-md px-5 py-2 ">

          {loading && <><span className=" text-[#97a0a5] font-semibold font-mono flex flex-row gap-x-5 overflow-hidden items-center justify-center">

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

            <div className="transition-all hover:scale-90 min-w-[142px] h-[192px] cursor-pointer rounded-[1rem] flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>

          </span></>}

          {!loading && movies ?
            movies.map((r) => (

              <>
                <div className="transition-all imgDiv min-w-[150px] max-h-[209px] flex items-center flex-col overflow-hidden opacity-70 hover:opacity-100 rounded-md">
                  <img onClick={() => router.push(`/ep?view=${r?.id}&t=${r?.title}`)} className="transition-all hover:scale-90 w-[142px] h-[192px] cursor-pointer rounded-[1rem]" loading="lazy" src={r?.image.length < 25 ? `https://anime-world.in${r?.image}` : `${r?.image}`} alt="" />
                  <span className="py-1 font-normal text-[#ff8f98d4] text-[13px] poppins-regular-italic">{r?.title}</span>
                </div>
              </>

            ))
            : ""}

        </div>



      </main >
    </>
  );
}
