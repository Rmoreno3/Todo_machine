import React from "react";
import ContentLoader from "react-content-loader";

const TodosLoading = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#F16529"
    {...props}
  >
    <rect x="42" y="20" rx="5" ry="5" width="339" height="15" /> 
    <circle cx="21" cy="27" r="17" /> 
    <rect x="44" y="65" rx="5" ry="5" width="339" height="15" /> 
    <circle cx="23" cy="72" r="17" /> 
    <rect x="44" y="108" rx="5" ry="5" width="339" height="15" /> 
    <circle cx="23" cy="115" r="17" />
  </ContentLoader>
)

export { TodosLoading };