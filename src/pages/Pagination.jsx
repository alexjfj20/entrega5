import React, { useState } from 'react';

function Pagination (props) {
  const { data, itemsPerPage, onPageChange } = props;

   // Verifica que data esté definido antes de calcular el número total de páginas
   if (!data) {
    return null; // O muestra un mensaje de que no hay datos disponibles
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  return (
  <div className="pagination-container">
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button 
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={i + 1 === currentPage ? 'active' : ''}
        >
          {i + 1}
        </button>
      ))}
    </div>
  </div>
  );
} 

 
export default Pagination;




