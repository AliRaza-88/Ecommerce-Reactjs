import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { Modal } from "antd";
import Slick from "./Slick";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartSystem";

function Cart({ selectedCategory }) {
  const [apiData, setApiData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleApiData, setSingleApiData] = useState("");

  const dispatch = useDispatch();


  useEffect(() => {
    const fetchPosts = () => {
      if (!selectedCategory) {
        fetch("https://dummyjson.com/products")
          .then((response) => response.json())
          .then((data) => setApiData(data.products))
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      }
    };
    fetchPosts();
  }, [selectedCategory]);

  const fetchSinglePost = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleApiData(data))
      .catch((error) => {
        console.log("error fetching single product data", error);
      });
  };

  const fetchSingleCategory = (categoryName) => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setApiData(data.products))
      .catch((error) => {
        console.log("error fetching single category data", error);
      });
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchSingleCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const showModal = (id) => {
    setIsModalOpen(true);
    fetchSinglePost(id);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="row p-4 coloured">
        {apiData.map((item) => {
          return (
            <>
              <div className="col-3 d-flex align-items-stretch" key={item.id}>
                <div className="card mb-2 cardSize" >
             
                  <img 
                  onClick={() => showModal(item.id)}
                    src={item.images[0]}
                    className="card-img-top"
                    alt="..."
                  />
              
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mt-5">${item.price}</h5>
                    <p className="card-text">{item.title}</p>
                    <button  className="btn  cartAddButton mt-auto" onClick={(event)=>{
                      event.preventDefault();
                      dispatch(addCart(item));
                    }
                    }>
                      Add <span className="plus">{<HiPlus />}</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <div className="container-fluid">
          <div className="row">
            {singleApiData.images && (
              <div className="col-6">
                <Slick
                  image1={singleApiData.images[0]}
                  image2={singleApiData.images[1]}
                  image3={singleApiData.images[2]}
                  image4={singleApiData.images[3]}
                  image5={singleApiData.images[4]}
                />
              </div>
            )}
            <div className="col-6 p-5">
              <h1 className="mb-5">{singleApiData.title}</h1>
              <p className="mb-5">{singleApiData.description}</p>
              <h3 className="text-success mb-5">${singleApiData.price}</h3>
              <button  className="btn btn-success modalAddCartBtn fs-5" onClick={(event)=>{
                event.preventDefault();
                dispatch(addCart(singleApiData));
              }
            }>
                Add to Shopping Cart
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Cart;
