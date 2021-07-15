import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PortfoliosView from "../components/PortfoliosView";

function Portfolio() {
  const [portfolio, setPortfoios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfolioPerPage] = useState(9);

  useEffect(() => {
    axios.get('/api/portfolios')
      .then( response => {
        setPortfoios(response.data);
      })
  }, [portfolio]);

  const indexOfLastPortfolio = currentPage * portfolioPerPage;
  const indexOfFirstPortfolio = indexOfLastPortfolio - portfolioPerPage;
  const currentPortfolio = portfolio.slice(indexOfFirstPortfolio, indexOfLastPortfolio);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Portfolio" />
          <PortfoliosView portfolio={currentPortfolio}/>
          {!(portfolio.length > portfolioPerPage) ? null : (
            <Pagination 
              className="mt-50"
              itemsPerPage={portfolioPerPage}
              totalItems={portfolio.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
