'use client'
import Error from '@/app/components/Error';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const EpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState();
  const [titleData, setTitleData] = useState();
  const [data, setData] = useState();
  const searchParams = useSearchParams();
  const id = searchParams.get('view');
  const title = searchParams.get('t');

  useEffect(() => {
    console.log(title);

    async function handlerTv() {
      setLoading(true);
      const fetchData = await (await fetch(`/api/watch`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })).json(); 
      setData(fetchData);
      setLoading(false);
    }
    handlerTv();

    async function handlerDetail() {
      setLoading(true);
      const fetchData = await (await fetch(`/api/details`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      })).json();
      console.log(fetchData)
      setTitleData(fetchData?.data?.Page?.media[0]);
      setLoading(false);
    }
    handlerDetail();

  }, [id, title]);

  return (
    <div className='w-full flex items-center flex-col min-h-screen '>
      {titleData && (
        <div>
          <img
            className='titleImg'
            src={titleData?.bannerImage
              ? titleData.bannerImage
              : "https://imgs.search.brave.com/B5KX7U92tX8STnS-dKxVryWGutCOmpID22a250LvWqY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80NS8zMi9l/cnJvci00MDQtcGFn/ZS1ub3QtZm91bmQt/Y29uZnVzZWQtY2hh/cmFjdGVycy12ZWN0/b3ItNDMzNjQ1MzIu/anBn"}
            alt=""
          />

          <div>
            <div className="pt-[80px] sm:pt-[120px] pl-5 pr-5">
              <div className='sm:hidden w-full px-2 py-5 flex flex-wrap gap-x-3 gap-y-2 min-h-[80px] '>
                {titleData.genres.map((r, index) => (
                  <div key={index} className='bg-yellow-300 px-4 py-2 rounded-full h-[28px]'> {r} </div>
                ))}
              </div>

              <div className='text-[#fff]'>{titleData?.description}</div>
            </div>

            <div className="flex flex-col absolute z-20 left-[155px] sm:left-[255px] top-[170px] sm:top-[365px] min-w-fit h-auto">
              <span className='p-3 text-[#fff] font-semibold text-[12px] sm:text-[15px] '> {titleData.title.userPreferred} </span>
              <span className='min-h-fit py-2 hidden sm:block space-x-3'>
                {titleData.genres.map((r, index) => (
                  <span key={index} className='bg-yellow-300 px-4 py-2 rounded-full'> {r} </span>
                ))}
              </span>
            </div>

            <div className="absolute left-[35px] sm:left-[28px] top-[65px] sm:top-[135px] min-w-fit h-auto">
              <img
                className='w-[100px] h-[141.52px] sm:w-[215px] sm:h-[304.27px]'
                src={titleData.coverImage.large
                  ? titleData?.coverImage?.large
                  : "https://imgs.search.brave.com/H6sQaHz5ShbeRPM0CmS8ypp70rVIdeN0qtnZz6_z8pM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvaW50ZXJuZXQt/bmV0d29yay13YXJu/aW5nLTQwNC1lcnJv/ci1wYWdlLWZpbGUt/Zm91bmQtd2ViLXBh/Z2VfMTE1MC00ODMw/Mi5qcGc"}
                alt=""
              />
            </div>
          </div>
        </div>
      )}

      <div className="sm:min-w-fit p-2 sm:p-2 flex flex-wrap justify-center mt-[60px]">
        {data?.all?.map((r) => (
          <div key={r.id} className="p-3 flex flex-col sm:gap-x-9 w-fit">
            <img
              onClick={() => router.push(`/watch?view=${r?.id}`)}
              className="w-full h-auto sm:w-[300px] sm:h-[190px] cursor-pointer rounded-md"
              loading="lazy"
              src={r?.image[0] === "h"
                ? `${r?.image}`
                : r?.image[0] !== undefined
                  ? `https://anime-world.in${r?.image}`
                  : `https://imgs.search.brave.com/K3qeJtm_up-upl3RLJWUvn5gAAdCoNqMoXs5Gox95xU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cHVibGljZG9tYWlu/cGljdHVyZXMubmV0/L3BpY3R1cmVzLzI4/MDAwMC92ZWxrYS9u/b3QtZm91bmQtaW1h/Z2UtMTUzODM4NjQ3/ODdsdS5qcGc`}
              alt=""
            />

            <div className="p-2 flex flex-col gap-y-3 text-[#fff]">
              <span>{r?.title}</span>
              <span>{r?.metadata?.title}</span>
              <div className="flex w-full justify-between items-center">
                <span className='flex min-w-fit flex-row gap-x-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>
                  {r?.published}
                </span>
                <span className='flex min-w-fit flex-row gap-x-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  {r?.metadata?.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EpPageWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EpPage />
    </Suspense>
  );
};

export default EpPageWrapper;
