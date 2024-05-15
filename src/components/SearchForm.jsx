import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Empty! Write something");

export default function SearchForm({ handleSubmit }) {
  const [params, setParams] = useState("");

  const changeInputFunc = (newValue) => {
    if (params) {
      params.set("input", newValue);
      setParams(params);
      console.log(newValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!params.trim()) {
      notify();
      return;
    }
    e.target.reset();

    handleSubmit(params);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          style={customStyle}
          type="text"
          placeholder="Search movies"
          // onChange={(e) => changeInputFunc(e.target.value)}
          onChange={changeInputFunc}
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
