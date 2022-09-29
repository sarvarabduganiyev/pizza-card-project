import list from "../data";
import Card from "./Card";
import "../styles/Amazon.css";
function Amazon({ handleClick }) {
  return (
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
}

export default Amazon;
