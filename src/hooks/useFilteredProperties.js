import { useMemo } from "react";

export default function useFilteredProperties(properties, filters) {
  const { searchTerm, propertyType, locationFilter, transactionType } = filters;

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesSearch =
        !searchTerm ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.loc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPropertyType =
        !propertyType || p.type.toLowerCase() === propertyType.toLowerCase();

      const matchesLocation =
        !locationFilter ||
        p.city.toLowerCase() === locationFilter.toLowerCase();

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
  }, [properties, searchTerm, propertyType, locationFilter, transactionType]);

  return filteredProperties;
}
