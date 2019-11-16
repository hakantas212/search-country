import React from "react";

const Loading = ({ searching, setSearching }) => {
  return (
    <>
      {searching && (
        <div style={{ color: `green` }}>
          Searching for the Country <strong>{setSearching}</strong>
        </div>
      )}
    </>
  );
};

export default Loading;
