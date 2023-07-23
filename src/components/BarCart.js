import React, { useState } from 'react'
import SideBar from './SideBar'
import Cart from './Cart'

function BarCart() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (categoryName) =>{
      setSelectedCategory(categoryName);
  };
 
  return (
    <>
      <div className='container-fluid'>
          <div className="row">
            <div className='col-12'>
              <div className="row">
                  <div className="col-3">
                  <SideBar onCategoryClick={handleCategoryClick}/>
                  </div>
                  <div className="col-9">
                  <Cart selectedCategory={selectedCategory}/>                  
                  </div>
              </div>
            
            
            </div>
            </div>
          </div>

      
    </>
  )
}

export default BarCart
