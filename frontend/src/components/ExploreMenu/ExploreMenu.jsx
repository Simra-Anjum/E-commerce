import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {category_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
       
      <h1>Explore our categories</h1>
      <div className="explore-menu-list">
        {category_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.category_name?"All":item.category_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.category_image} className={category===item.category_name?"active":""} alt="" />
                    <p>{item.category_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
