import React from 'react'

function Rating({value,text,color}) {
  return (
    <div>
      <div className='rating'>
    <span>
     <i style={{color}} className={
          value >= 1 ? 'fas fa-star' //sloid stars
          :value >= 0.5 ? 'fas fa-star-half-alt': 'far fa-star'
        }></i>
        </span>
    <span>
     <i style={{color}} className={
          value >= 2 ? 'fas fa-star' //sloid stars
          :value >= 1.5 ? 'fas fa-star-half-alt': 'far fa-star'
        }></i>
        </span>
    <span>
     <i style={{color}} className={
          value >= 3 ? 'fas fa-star' //sloid stars
          :value >= 2.5 ? 'fas fa-star-half-alt': 'far fa-star'
        }></i>
        </span>
    <span>
     <i style={{color}} className={
          value >= 4 ? 'fas fa-star' //sloid stars
          :value >= 3.5 ? 'fas fa-star-half-alt': 'far fa-star'
        }></i>
        </span>
    <span>
     <i style={{color}} className={
          value >= 5 ? 'fas fa-star' //sloid stars
          :value >=4.5 ? 'fas fa-star-half-alt': 'far fa-star'
        }></i>
        </span>
        <span>{text && text}</span>
      </div>
    </div>
  )
}

export default Rating
