import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onRemoveListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onremoveListing={onRemoveListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
