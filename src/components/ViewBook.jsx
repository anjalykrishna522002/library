import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewBook = () => {
  const [data, changeData] = useState(
    [
      { "title": "One indian girl", "author": "chetanbhagath", "publishedyear":2002, "price": 989 },
      { "title": "A Brush With Life", "author": "satish Gujral", "publishedyear": 1966, "price": 889 },
      { "title": "Half Girlfriend", "author": "chetanbhagath", "publishedyear": 2022, "price": 759 },
      { "title": "Broken Wings", "author": "Arundathi Roy", "publishedyear": 2024, "price": 789 }
    ]

  )
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
                  
    
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Published Year</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                {data.map(
                    (value, index) => {
                return <tbody>
                  <tr>
                    <th scope="row">{value.title}</th>
                    <td>{value.author}</td>
                    <td>{value.publishedyear}</td>
                    <td>{value.price}</td>
                  </tr>


                </tbody>
                }
              )}
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewBook