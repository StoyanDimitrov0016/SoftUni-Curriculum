const Pagination = ({ currentPage, setCurrentPage, offerCount, PAGE_SIZE }) => {
  const pageLinks = [];

  const buttonStyle = {
    cursor: "pointer",
    padding: "8px 12px",
    margin: "0 4px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    background: "#fff",
    color: "#333",
    textDecoration: "none",
    display: "inline-block",
  };

  const linkCount = Math.ceil(offerCount / PAGE_SIZE);

  const onPageChange = (action) => {
    if (action === "reduce" && currentPage > 1) {
      setCurrentPage((state) => state - 1);
    } else if (action === "increase" && currentPage < linkCount) {
      setCurrentPage((state) => state + 1);
    }
  };

  const setParticularPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  for (let i = 1; i <= linkCount; i++) {
    const li = (
      <li
        key={i}
        className={i === currentPage ? "paginationLink active" : "paginationLink"}
        style={buttonStyle}
        onClick={() => setParticularPage(i)}
      >
        {i}
      </li>
    );
    pageLinks.push(li);
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {currentPage > 1 && (
        <li
          className="paginationLink"
          style={{ ...buttonStyle, fontWeight: "bold" }}
          onClick={() => onPageChange("reduce")}
        >
          &laquo; Previous
        </li>
      )}
      {pageLinks}
      {currentPage < linkCount && (
        <li
          className="paginationLink"
          style={{ ...buttonStyle, fontWeight: "bold" }}
          onClick={() => onPageChange("increase")}
        >
          Next &raquo;
        </li>
      )}
    </ul>
  );
};

export default Pagination;
