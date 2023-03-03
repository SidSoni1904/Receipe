import React from 'react'
import Skeleton  from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function ShimmerUI() {
  return (
    <div className="skeleton">
              <Skeleton width={270} height={300} />
              <Skeleton  width={270} height={30} />
              <Skeleton  />
              <Skeleton  />
              <Skeleton  />
              <Skeleton  width={100} height={40} />
            </div>
  )
}

export default ShimmerUI