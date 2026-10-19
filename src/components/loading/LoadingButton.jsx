
import "./loadingbutton.css";

function LoadingButton({ isLoading, children, onClick }) {
  return (
    <button
      className="btn"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && <span className="spinner"></span>}
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default LoadingButton;
