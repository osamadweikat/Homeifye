import "./properties.css";
import { useState, useEffect } from "react";
import PropertiesHeroSection from "../../components/properties-hero-section/PropertiesHeroSection";
import NewListingInner from "../../components/new-listing-inner/NewListingInner";
import { propertiesData } from "../../data/propertiesData";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GlobalCtaSection from "../../components/global-cta-section/GlobalCtaSection";

export default function Properties() {
  const itemsPerPage = 6;
  const totalItems = propertiesData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [page, setPage] = useState(1);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const displayedProperties = (() => {
    const start = (page - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, totalItems);
    return propertiesData.slice(start, end);
  })();

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  useEffect(() => {
    if (isLastPage) setIsForward(false);
    if (isFirstPage) setIsForward(true);
  }, [page, isFirstPage, isLastPage]);

  const handleClick = () => {
    if (isForward) {
      if (!isLastPage) setPage((prev) => prev + 1);
    } else {
      if (!isFirstPage) setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="properties-page">
      <PropertiesHeroSection />

      <NewListingInner variant="properties" data={displayedProperties} />

      <div className="pagination-buttons">
        <button
          className="pagination-btn"
          onClick={handleClick}
          disabled={totalPages <= 1}
        >
          {isForward ? (
            <>
              Next
              <ChevronRightIcon />
            </>
          ) : (
            <>
              <ChevronLeftIcon />
              Previous
            </>
          )}
        </button>
      </div>
      <GlobalCtaSection />
    </div>
  );
}
