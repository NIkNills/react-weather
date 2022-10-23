import React from "react";
import ContentLoader from "react-content-loader";

const TodayDescriptionSkeleton = (props) => (
  <div className="description">
    <ContentLoader
      speed={2}
      width={775}
      height={200}
      viewBox="0 0 775 200"
      backgroundColor="#d7d6d6"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="25" cy="21" r="20" />
      <rect x="87" y="9" rx="0" ry="0" width="202" height="23" />
      <rect x="335" y="10" rx="0" ry="0" width="123" height="22" />
      <circle cx="24" cy="71" r="20" />
      <rect x="86" y="59" rx="0" ry="0" width="202" height="23" />
      <rect x="334" y="60" rx="0" ry="0" width="123" height="22" />
      <circle cx="25" cy="126" r="20" />
      <rect x="87" y="114" rx="0" ry="0" width="202" height="23" />
      <rect x="335" y="115" rx="0" ry="0" width="123" height="22" />
      <circle cx="26" cy="177" r="20" />
      <rect x="88" y="165" rx="0" ry="0" width="202" height="23" />
      <rect x="336" y="166" rx="0" ry="0" width="123" height="22" />
    </ContentLoader>
  </div>
);

export default TodayDescriptionSkeleton;
