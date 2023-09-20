import React from 'react'

const containerdata = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum tempore voluptatum cumque quas consequatur suscipit tenetur.',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum tempore voluptatum cumque quas consequatur suscipit tenetur.',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum tempore voluptatum cumque quas consequatur suscipit tenetur.',
    }
  ]

const MainHowToDonate = () => {
  return (
    <div className="container howtodonate_container">
        <div className="how_content">
            <h2>How to donate</h2>
            <p className='howParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam quis soluta at alias quaerat veritatis deserunt, pariatur itaque nulla esse aspernatur et maxime ducimus animi amet vero. Illo laboriosam velit magnam!</p>
            <div className="how_details">
            {containerdata.map(({id,text}) => {
                return(
                  <div key={id} className="how_text">
                    <span>{id}</span>
                    <p>{text}</p>
                  </div>
                )
              })
            }
      </div>
        </div>
    </div>
  )
}

export default MainHowToDonate