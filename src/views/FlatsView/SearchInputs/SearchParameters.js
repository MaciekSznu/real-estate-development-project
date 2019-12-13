//import React from 'react';
import flatsArray from '../../../assets/flatsArray';


const NewFlatsArray = () => (
   flatsArray.filter((el) => {
    return el.floor <= 4 &&
           el.floor >= 0 &&
           el.rooms <= 4 &&
           el.rooms >= 1 &&
           el.area <= 100 &&
           el.area >= 25 &&
           el.price <= 900000 &&
           el.price >= 200000 &&
           el.balcony === true &&
           el.terrace === false &&
           el.status === 'for sale'
  })
);

console.table(NewFlatsArray);

export default NewFlatsArray;
