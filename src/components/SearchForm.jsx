import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const notify = () => toast("Empty! Write something");

export default function SearchForm({ handleSubmit }) {
  const [searchInput, setSearchInput] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) {
      notify();
      return;
    }
    handleSubmit(searchInput);
    setSearchInput("");
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          style={customStyle}
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search movies"
        />
        <button style={buttonStyle} type="submit">
          Search
        </button>
      </form>
      <Toaster
        toastOptions={{
          style: {
            background: "orangered",
            color: "white",
            border: "1px solid black",
            fontSize: "18px",
          },
        }}
      />
    </div>
  );
}
const customStyle = {
  padding: "12px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  width: "300px",
  margin: "10px",
};
const buttonStyle = {
  color: "white",
  textDecoration: "none",
  backgroundColor: "blue",
  padding: "12px",
  borderRadius: "5px",
  fontSize: "15px",
  width: "150px",
};
