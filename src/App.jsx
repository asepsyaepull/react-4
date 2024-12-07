import { useState } from "react";
import Sidebar from "./assets/components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [count, setCount] = useState(0);

  const handleAdd = paramNumber => {
    const calculate = count + paramNumber;

    setCount(calculate);
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} handleAdd={handleAdd} count={count} />
    </div>
  );
}

export default App;
