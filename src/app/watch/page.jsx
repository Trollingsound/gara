'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

const page = () => {
    const [integer, setInteger] = useState(null);
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState(null);
    const searchParams = useSearchParams();
    const id = searchParams.get('view')


    useEffect(() => {

        async function handlerTv() {
            setLoading(true)
            const fetchData = await (await fetch(`/api/episode`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })).json();
            setData(await fetchData)
            setLoading(false)
        }
        handlerTv()

    }, [])

    return (
        <div className='w-full flex items-center flex-col sm:flex-row min-h-screen p-4'>

            <div className="w-full">

                <div className="bg-zinc-700/50 w-full min-h-[500px] p-5 flex justify-center items-center">
                    {/* {console.log(data)} */}

                    {data && <>
                        <iframe className='w-full h-[450px] rounded-md' src={!integer ? data?.players[3]?.url : integer} frameborder="0" allowFullScreen="on"></iframe>
                    </>}
                </div>

                <div className="mt-3 bg-zinc-700/50 py-3 px-5 text-[#ccccc8]">
                    {data && <>

                        <div className="flex flex-wrap gap-y-[10px] gap-x-3">
                            {data?.players?.slice(3).map((r) => (<>
                                <button onClick={() => setInteger(r?.url)} className='transition-all px-5 py-2 bg-indigo-500 hover:bg-indigo-500/90 active:bg-indigo-500/70 rounded-md'> {r?.language} </button>
                            </>))}
                        </div>

                        <div className="flex flex-col p-3">
                            <div className="">
                                Available Languages :
                            </div>

                            <div className="flex flex-row flex-wrap gap-y-[10px] ">
                                {data?.languages?.map((r) => (<>
                                    <span className='p-3'>{r?.name}</span>
                                </>))}
                            </div>
                        </div>

                    </>}
                </div>

            </div>

            <div className="min-w-full sm:h-[632px] flex justify-center sm:min-w-[400px] px-7">

                {
                    data && <>
                        <div className="w-full flex flex-col items-start px-3">
                            <span className=' py-2'>
                                <img className="w-[142px] h-[192px] cursor-pointer rounded-md" loading="lazy" src={data?.series?.featured?.length > 20 ? `https://anime-world.in${data?.series?.featured}` : `${`https://imgs.search.brave.com/K3qeJtm_up-upl3RLJWUvn5gAAdCoNqMoXs5Gox95xU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cHVibGljZG9tYWlu/cGljdHVyZXMubmV0/L3BpY3R1cmVzLzI4/MDAwMC92ZWxrYS9u/b3QtZm91bmQtaW1h/Z2UtMTUzODM4NjQ3/ODdsdS5qcGc`}`} alt="" />
                            </span>
                            <span className='text-[#ccccc8] py-2'>
                                {data?.series?.title}
                            </span>
                            <span className='w-[350px] text-[#ccccc8] break-words py-2'>
                                {data?.series?.synopsis}
                            </span>
                        </div>
                    </>
                }
            </div>

        </div>
    )
}

export default page