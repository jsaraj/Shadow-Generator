

import React, { useState } from 'react'

function ShadowGenerator() {

    const [vertical, setVertical] = useState(10);
    const [horizontal, setHorizontal] = useState(10);
    const [blur, setBlur] = useState(10);
    const [glow, setGlow] = useState(10);
    const [color,setColor]=useState('#7c6a6a');



    return (
        <>
            <h2 className='flex justify-center text-xl pt-10'>Shadow Generator</h2>
            <div className='flex justify-around p-16 bg-gray-200 m-10 items-center rounded-md'>
                <div className='bg-gray-300 h-96 w-5/12 rounded-md p-5'>
                    <div className='py-2'>
                        <div className='flex'>
                            <label className='pr-5'>Vertical:</label>
                            <p>{vertical}</p>
                        </div>
                        <input type='range' value={vertical} onChange={(e) => setVertical(e.target.value)} min={-200} max={200} name='verticla' className='w-full rounded-lg appearance-none cursor-pointer h-2 bg-orange-400'></input>
                    </div>
                    <div className='py-2'>
                        <div className='flex'>
                            <label className='pr-5'>Horizontal:</label>
                            <p>{horizontal}</p>
                        </div>
                        <input type='range' value={horizontal} onChange={(e) => setHorizontal(e.target.value)} min={-200} max={200} name='horizontal' className='w-full rounded-lg appearance-none cursor-pointer h-2 bg-orange-400'></input>

                    </div>
                    <div className='py-2'>
                        <div className='flex'>
                            <label className='pr-5'>Blur:</label>
                            <p>{blur}</p>
                        </div>    
                        <input type='range' value={blur} onChange={(e) => setBlur(e.target.value)} min={0} max={200} name='blur' className='w-full rounded-lg appearance-none cursor-pointer h-2 bg-orange-400'></input>
                    </div>
                    <div className='py-2'>
                        <div className='flex'>
                            <label className='pr-5'>Glow:</label>
                            <p>{glow}</p>
                        </div> 
                        <input type='range' value={glow} onChange={(e) => setGlow(e.target.value)} min={0} max={200} name='glow' className='w-full rounded-lg appearance-none cursor-pointer h-2 bg-orange-400'></input>
                    </div>
                    <div className='py-1 flex'>
                        <label>Color:  </label>
                        <input type='color' value={color} onChange={(e)=>{setColor(e.target.value)}} className='rounded-md ml-4'/>
                        <p>{color}</p>
                    </div>
                </div>
                <div className='bg-gray-300 h-96 w-5/12 items-center flex justify-center rounded-md' style={{boxShadow: `${horizontal}px ${vertical}px ${blur}px ${glow}px ${color}`}}>
                    <p className='p-3 border border-orange-400 rounded-md'>{horizontal}px {vertical}px {blur}px {glow}px {color}</p>
                </div>
            </div>

        </>
    )
}

export default ShadowGenerator