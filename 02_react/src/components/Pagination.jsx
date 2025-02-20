const Pagination = ({
  goToPrevPage,
  goToNextPage,
  handlePageChange,
  currPage,
  noOfPages,
}) => {
  return (
    <div className="pagination-container">
      <button
        disabled={currPage === 0}
        onClick={goToPrevPage}
        className="page-number"
      >
        ⬅
      </button>
      {[...Array(noOfPages).keys()].map((num) => (
        <button
          className={"page-number " + (num === currPage ? "actives" : "")}
          key={num}
          onClick={() => handlePageChange(num)}
        >
          {num}
        </button>
      ))}
      <button
        disabled={currPage === noOfPages - 1}
        onClick={goToNextPage}
        className="page-number"
      >
        ➡
      </button>
    </div>
  );
};

export default Pagination;
