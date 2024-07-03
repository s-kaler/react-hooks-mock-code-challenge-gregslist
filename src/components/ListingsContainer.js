import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({query}) {
  console.log(query)
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((res) => res.json())
    .then((fetchedListings) => {
      setListings(fetchedListings);
      //console.log(fetchedListings)
    })
  }, [])
  

  function handleDeleteListing(deletedListing){
    const updatedListings = listings.filter((listing)  => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  /*
  const searchedListings = listings.filter((listing) => listing.description.includes(query))
  if(query !== "") { setListings(searchedListings) } 
  */

  return (
    <main>
      <ul className="cards">
        {listings.filter((listing) => listing.description.toLowerCase().includes(query.toLowerCase())).map((listing) => (<ListingCard 
            key={listing.id} 
            listing={listing}
            onListingDelete={handleDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
