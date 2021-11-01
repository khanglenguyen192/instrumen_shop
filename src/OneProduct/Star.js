import React from "react";

const OneStar = ({ marked }) => {
    return (
      <span>
          {marked ? '\u2605' : '\u2606'}

      </span>
    );
  };

const HalfStar = ({marked}) =>{
    return(
        <span>
        </span>
        
    );
}

  function Star({value}){
      return(
        <div>
        {Array.from({ length: 5 }, () => (
        <OneStar marked={value}
         />
        ))}
        <HalfStar />
        </div>
);
}

export { Star };