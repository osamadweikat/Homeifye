import "./properties.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropertiesHeroSection from "../../components/properties-hero-section/PropertiesHeroSection";
import NewListingInner from "../../components/new-listing-inner/NewListingInner";
import GlobalCtaSection from "../../components/global-cta-section/GlobalCtaSection";
import { propertiesData } from "../../data/propertiesData";
import useFilteredProperties from "../../hooks/useFilteredProperties";
import usePagination from "../../hooks/usePagination";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

export default function Properties() {
  const location = useLocation();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    searchTerm: "",
    propertyType: "",
    locationFilter: "",
    transactionType: "",
  });

  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setFilters({
      searchTerm: params.get("search") || "",
      propertyType: params.get("properties") || "",
      locationFilter: params.get("location") || "",
      transactionType: params.get("types") || "",
    });
    setIsForward(true);
  }, [location.search]);

  const filteredProperties = useFilteredProperties(propertiesData, filters);
  const {
    page,
    totalPages,
    displayedItems,
    isFirstPage,
    isLastPage,
    nextPage,
    prevPage,
    resetPage,
  } = usePagination(filteredProperties, 6);

  const handleSearch = (
    newSearchTerm,
    newPropertyType,
    newLocation,
    newTransaction
  ) => {
    const params = new URLSearchParams();
    if (newSearchTerm) params.set("search", newSearchTerm);
    if (newPropertyType) params.set("properties", newPropertyType);
    if (newLocation) params.set("location", newLocation);
    if (newTransaction) params.set("types", newTransaction);

    navigate(`/properties?${params.toString()}`, { replace: true });
  };

  const resetSearch = () => {
    navigate("/properties", { replace: true });
    resetPage();
    setIsForward(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (isLastPage) setIsForward(false);
    if (isFirstPage) setIsForward(true);
  }, [page, isFirstPage, isLastPage]);

  const buttonContent = isForward ? (
    <>
      Next <ChevronRightIcon />
    </>
  ) : (
    <>
      <ChevronLeftIcon /> Previous
    </>
  );

  const handleClick = () => {
    if (isForward && !isLastPage) {
      nextPage();
    } else if (!isForward && !isFirstPage) {
      prevPage();
    }
  };

  const titleText =
    filters.searchTerm ||
    filters.propertyType ||
    filters.locationFilter ||
    filters.transactionType
      ? "Search Results"
      : "Properties";

  return (
    <div className="properties-page">
      <PropertiesHeroSection
        title={titleText}
        onSearch={handleSearch}
        onReset={resetSearch}
      />

      {filteredProperties.length > 0 ? (
        <>
          <NewListingInner variant="properties" data={displayedItems} />
          {totalPages > 1 && (
            <div className="pagination-buttons">
              <button
                className="pagination-btn"
                onClick={handleClick}
                disabled={isFirstPage && !isForward}
              >
                {buttonContent}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="no-results">
          <div className="no-results-section-padding">
            <div className="no-results-container">
              <ErrorOutlineOutlinedIcon /> No items found.
            </div>
          </div>
        </div>
      )}

      <GlobalCtaSection />
    </div>
  );
}
