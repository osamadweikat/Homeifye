import "./properties.css";
import { useState, useEffect } from "react";
import PropertiesHeroSection from "../../components/properties-hero-section/PropertiesHeroSection";
import NewListingInner from "../../components/new-listing-inner/NewListingInner";
import { propertiesData } from "../../data/propertiesData";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import GlobalCtaSection from "../../components/global-cta-section/GlobalCtaSection";
import { useLocation, useNavigate } from "react-router-dom";

export default function Properties() {
  const itemsPerPage = 6;
  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [page, setPage] = useState(1);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (!location.search) {
      setSearchTerm("");
      setPropertyType("");
      setLocationFilter("");
      setTransactionType("");
      setPage(1);
    } else {
      setSearchTerm(params.get("search") || "");
      setPropertyType(params.get("properties") || "");
      setLocationFilter(params.get("location") || "");
      setTransactionType(params.get("types") || "");
      setPage(1);
    }
  }, [location.search]);

  const filteredProperties = propertiesData.filter((p) => {
    const matchesSearch =
      !searchTerm ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.loc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPropertyType =
      !propertyType || p.type.toLowerCase() === propertyType.toLowerCase();

    const matchesLocation =
      !locationFilter || p.city.toLowerCase() === locationFilter.toLowerCase();

    const matchesTransaction =
      !transactionType ||
      p.transactionType.toLowerCase() === transactionType.toLowerCase();

    return (
      matchesSearch &&
      matchesPropertyType &&
      matchesLocation &&
      matchesTransaction
    );
  });

  const totalItems = filteredProperties.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const displayedProperties = filteredProperties.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  useEffect(() => {
    if (isLastPage) setIsForward(false);
    if (isFirstPage) setIsForward(true);
  }, [page, isFirstPage, isLastPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleClick = () => {
    if (isForward) {
      if (!isLastPage) setPage((prev) => prev + 1);
    } else {
      if (!isFirstPage) setPage((prev) => prev - 1);
    }
  };

  const buttonContent = isForward ? (
    <>
      Next <ChevronRightIcon />
    </>
  ) : (
    <>
      <ChevronLeftIcon /> Previous
    </>
  );

  const titleText =
    searchTerm || propertyType || locationFilter || transactionType
      ? "Search Results"
      : "Properties";

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
    setSearchTerm("");
    setPropertyType("");
    setLocationFilter("");
    setTransactionType("");
    setPage(1);

    navigate("/properties", { replace: true });
  };

  return (
    <div className="properties-page">
      <PropertiesHeroSection
        title={titleText}
        onSearch={handleSearch}
        onReset={resetSearch}
      />

      {totalItems > 0 ? (
        <>
          <NewListingInner variant="properties" data={displayedProperties} />
          {totalPages > 1 && (
            <div className="pagination-buttons">
              <button
                className="pagination-btn"
                onClick={handleClick}
                disabled={totalPages <= 1}
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
