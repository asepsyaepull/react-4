import { useEffect, useState } from "react";
import Sidebar from "./assets/components/Sidebar";
import axios from 'axios';

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  // const [count, setCount] = useState(0);

  // const handleAdd = paramNumber => {
  //   const calculate = count + paramNumber;

  //   setCount(calculate);
  // }

  const [product, setProduct] = useState([]);

  const getData = () => {
    axios
      .get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const res = await axios.get('https://api.escuelajs.co/api/v1/users');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getUser();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} handleAdd={handleAdd} count={count} /> */}
      {/* looping state product(title, price, description) */}
      <div>
        <h1 className="text-2xl font-bold">Product List</h1>
        <ul className="w-1/2">
          {product.map(product => (
            <li key={product.id}>
              <h2 className="text-xl font-medium">{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product.title}
                  className="flex gap-4 object-cover"
                />
              ))}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold">User</h1>
        <ul className="aspect-square size-40">
          {user.map(user => (
            <li key={user.id}>
              <img
                src={user.avatar}
                alt={user.name}
                className="obejct-cover rounded-full"
              />
              <h2 className="text-xl font-medium">{user.name}</h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
