import React from "react";

export default function Results({ results }) {
  console.log(results)
  return (
    <div>
      {results.map((result) => (
        <div className="" key={result.id}>
          {result.title || result.name || result.original_title || result.orignal_name}
        </div>
      ))}
    </div>
  );
}
