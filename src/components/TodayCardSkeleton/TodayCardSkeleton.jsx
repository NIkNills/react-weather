import React from "react";
import ContentLoader from "react-content-loader";

const TodayCardSkeleton = (props) => (
  <div className="today-weather-card">
    <ContentLoader
      speed={2}
      width={335}
      height={200}
      viewBox="0 0 335 200"
      backgroundColor="#d7d6d6"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="4" y="16" rx="0" ry="0" width="61" height="37" />
      <rect x="4" y="75" rx="0" ry="0" width="150" height="23" />
      <rect x="3" y="133" rx="0" ry="0" width="150" height="24" />
      <rect x="2" y="171" rx="0" ry="0" width="152" height="25" />
      <circle cx="240" cy="56" r="33" />
    </ContentLoader>
  </div>
);

export default TodayCardSkeleton;
