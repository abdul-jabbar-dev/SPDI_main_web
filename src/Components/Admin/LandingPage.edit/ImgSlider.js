import React from 'react'
import { MdRemoveCircle } from 'react-icons/md'
const ImgSlider = ({ img, i, imgSlider }) => {
  const deleteImage = () => {
     fetch(`${process.env.REACT_APP_ROOT_URL}/dynamicpage/slider`, {
        headers: {
        'Access-Control-Allow-Origin': true,
        'Content-Type': 'application/json'
        },
      method: "DELETE",
      body: JSON.stringify({'img':img})
    })
      .then(res => res.json())
      .then(res => {alert(res.massage);window.location.reload()})


  }
  return (
    <div className='relative'>
      <img className='w-40 h-32 rounded' src={process.env.REACT_APP_ROOT_URL + '/' + img} alt={'slider-' + i} />
      <div className='absolute top-0  '><MdRemoveCircle onClick={e => deleteImage()} className='w-5 h-5 m-2 hover:scale-125 hover:text-red-600 cursor-pointer' /></div>
    </div>
  )
}
export default ImgSlider