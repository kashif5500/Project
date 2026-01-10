import React from 'react'
import Header from './Header'
import { specialityData } from '../assets/assets_frontend/assets'
import {Link} from 'react-router-dom'

function SpecialityMenu() {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id="#specility">
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:1/3 text-center text-sm'>Simply browse through our extension list of trusted doctors,schedule </p>
        <div className='flex flex-wrap  sm:justify-center gap-4 pt-5 mt-10 w-full overflow-scroll'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>{scrollTo(0,0)}} className='flex flex-col items-center text-xs cursor-pointer flex-wrap hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            )
            )}
        </div>
      
    </div>
  )
}

export default SpecialityMenu
