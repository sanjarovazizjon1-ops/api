
export default function LoadingButton({
  loading,
  children,
  onClick,
  
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`loading-button ${className}`}
    >
      {loading ? (
        <>
          <span className="spinner"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}
