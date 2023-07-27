import React, { useState } from "react";

const AddProduts = () => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
        id:id,
        price:price,
        name:name
    };
    localStorage.setItem(id, JSON.stringify(obj));
    console.log(id, price, name);
    setData([...data, { Id: id, Price: price, Name: name }]);
  };

  const deleteHandler = (Id) => {
    localStorage.removeItem(Id);
    setData(data.filter((item) => item.Id !== Id));
    console.log(Id);
  };

  let amount = 0;
  data.forEach((item) => {
    return amount+=Number(item.Price);
  })

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">Product ID:</label>
          <input type="text" onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Selling Price:</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Product Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
      </form>
      <button onClick={submitHandler}>Add Product</button>
      <div>
        PRODUCTS:
        {data.length > 0 &&
          data.map((item) => {
            return (
              <li key={item.Id}>
                {item.Id},{item.Price},{item.Name}
                <button onClick={() => deleteHandler(item.Id)}>Delete</button>
              </li>
            );
          })}
      </div>
      <div>
        TOTAL WORTH IN RUPEES:
        {amount}
      </div>
    </div>
  );
};

export default AddProduts;
