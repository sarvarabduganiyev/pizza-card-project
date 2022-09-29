import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Amazon from "./components/Amazon";
import Navbar from "./components/Navbar";
import Order from "./components/Order";

function App() {
  const [show, setShow] = useState(true);
  const [cards, setCards] = useState([]);

  const handleClick = (item) => {
    if (cards.indexOf(item) !== -1) return;
    setCards([...cards, item]);

    // toast
    toast.success(`Added ${cards.length + 1} cards`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // console.log("lenth", cards.length);
    // console.log(item);
  };

  const handleChange = (item, d) => {
    const ind = cards.indexOf(item);
    // const arr = cards;
    cards[ind].amount += d;

    if (cards[ind].amount === 0) cards[ind].amount = 1;
    setCards([...cards]);
  };

  useEffect(() => {
    console.log("card changed");
  }, [cards]);

  return (
    <div>
      <Navbar setShow={setShow} cards={cards} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Order cards={cards} setCards={setCards} handleChange={handleChange} />
      )}

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
