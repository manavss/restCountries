function Spinner() {
  return (
    <div
      role="loading-spinner"
      aria-label="loading-spinner"
      className="absolute bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 transform "
    >
      <div className="h-16 w-16 animate-spin rounded-full border-8  border-solid border-blue-400 border-t-transparent md:h-32 md:w-32"></div>
    </div>
  );
}

export default Spinner;
