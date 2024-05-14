import { Toaster } from "react-hot-toast";

export default function SearchForm({ handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={customStyle}
          name="searchInput"
          placeholder="Write something /"
          type="text"
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
const buttonStyle = {
  color: "white",
  textDecoration: "none",
  backgroundColor: "blue",
  padding: "12px",
  borderRadius: "5px",
  fontSize: "15px",
  width: "150px",
};
const customStyle = {
  padding: "12px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  width: "300px",
  margin: "10px",
};
