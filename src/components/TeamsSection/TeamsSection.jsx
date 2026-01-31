import React, { useRef, useState } from 'react'
import Title from '../TitleSections/Title'
import { teamData } from '../../assets/assets'

export default function TeamsSection() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [visible, setVisible] = useState(false)
    const divRef = useRef(null);
        const handleMouseMove = (e)=>{
            const bounds = divRef.current.getBoundingClientRect();
            setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
        }
    return (
        <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'
            onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>


            <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px]
         h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{ top: position.y - 150, left: position.x - 150 }}>
            </div>

            <Title title={'Meet the team'}
                description={'A passionate team of digital experts dedicated to your brands success.'}></Title>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 xl:grid-cols-4 hover:p-7.5 hover:m-0.5 transition-all'>
                {
                    teamData.map((team, index) => (
                        <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100
                         dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5
                          hover:scale-103 transition-all duration-400'>
                            <img src={team.image} className='w-12 h-12 rounded-full' alt="" />
                            <div className='flex-1'>
                                <h3 className='font-bold text-sm'>{team.name}</h3>
                                <p className='text-xs opacity-60'>{team.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
