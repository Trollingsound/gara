'use client'
import Error from '@/app/components/Error';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const WatchPage = () => {
    const [integer, setInteger] = useState(null);
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState(null);
    const searchParams = useSearchParams();
    const id = searchParams.get('view');

    useEffect(() => {
        async function handlerTv() {
            setLoading(true);
            const fetchData = await (await fetch(`/api/episode`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            })).json();
            setData(fetchData);
            setLoading(false);
        }
        handlerTv();
    }, [id]);

    return (
        <div className='w-full flex items-center flex-col sm:flex-row min-h-screen p-4'>
            <div className="w-full">
                <div className="bg-zinc-700/50 w-full min-h-[500px] p-5 flex justify-center items-center">
                    {data && (
                        <>
                            <iframe
                                className='w-full h-[450px] rounded-md'
                                src={!integer ? data?.players[3]?.url : integer}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </>
                    )}
                </div>
                <div className="mt-3 bg-zinc-700/50 py-3 px-5 text-[#ccccc8]">
                    {data && (
                        <>
                            <div className="flex flex-wrap gap-y-[10px] gap-x-3">
                                {data?.players?.slice(3).map((r) => (
                                    <button
                                        key={r.url}
                                        onClick={() => setInteger(r?.url)}
                                        className='transition-all px-5 py-2 bg-indigo-500 hover:bg-indigo-500/90 active:bg-indigo-500/70 rounded-md'
                                    >
                                        {r?.language}
                                    </button>
                                ))}
                            </div>
                            <div className="flex flex-col p-3">
                                <div className="">
                                    Available Languages :
                                </div>
                                <div className="flex flex-row flex-wrap gap-y-[10px] ">
                                    {data?.languages?.map((r) => (
                                        <span key={r.name} className='p-3'>{r?.name}</span>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="min-w-full sm:h-[632px] flex justify-center sm:min-w-[400px] md:px-7">
                {data && (
                    <div className="w-full flex flex-col items-start md:px-3 break-words">
                        <span className='py-2'>
                            <img
                                className="w-[142px] h-[192px] cursor-pointer rounded-md"
                                loading="lazy"
                                src={data?.series?.featured?.length > 20
                                    ? `https://anime-world.in${data?.series?.featured}`
                                    : `https://imgs.search.brave.com/K3qeJtm_up-upl3RLJWUvn5gAAdCoNqMoXs5Gox95xU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cucHVibGljZG9tYWlucGljdHVyZXMubmV0L3BpY3R1cmVzLzI4MDAwMC92ZWxrYS9ub3QtZm91bmQtaW1hZ2UtMTUzODM4NjQ3ODdsdS5qcGc`}
                                alt=""
                            />
                        </span>
                        <span className='text-[#ccccc8] py-2 break-words'>
                            {data?.series?.title}
                        </span>
                        <span className='w-[350px] text-[#ccccc8] py-2 break-words'>
                            {data?.series?.synopsis}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

const WatchPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <WatchPage />
        </Suspense>
    );
};

export default WatchPageWrapper;
