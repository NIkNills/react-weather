import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton = (props) => (
  <div className="weather-card">
    <ContentLoader
      speed={2}
      width={129}
      height={180}
      viewBox="0 0 129 180"
      backgroundColor="#d7d6d6"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="4" y="2" rx="0" ry="0" width="89" height="12" />
      <rect x="4" y="32" rx="0" ry="0" width="89" height="12" />
      <circle cx="61" cy="89" r="25" />
      <rect x="3" y="137" rx="0" ry="0" width="89" height="12" />
      <rect x="4" y="165" rx="0" ry="0" width="89" height="12" />
    </ContentLoader>
  </div>
);

export default CardSkeleton;
