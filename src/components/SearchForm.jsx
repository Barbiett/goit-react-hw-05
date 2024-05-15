import toast, { Toaster } from "react-hot-toast";

import { useSearchParams } from "react-router-dom";

const notify = () => toast("Empty! Write something");

export default function SearchForm({ handleSubmit }) {
  const [params, setParams] = useSearchParams();
  const getUrlParams = params ? params.get("input") ?? "" : "";
  const changeInputFunc = (newValue) => {
    params.set("input", newValue);
    setParams(params);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!getUrlParams.trim()) {
      notify();
      return;
    }
    handleSubmit(getUrlParams);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          style={customStyle}
          type="text"
          value={getUrlParams}
          onChange={(e) => changeInputFunc(e.target.value)}
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
