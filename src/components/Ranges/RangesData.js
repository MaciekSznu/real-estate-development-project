import flatsArray from "../../assets/flatsArray";

const minFloorValue = Math.min.apply(Math, flatsArray.map(function(o) { return o.floor; }));
const maxFloorValue = Math.max.apply(Math, flatsArray.map(function(o) { return o.floor; }));
export const floorRange =
  {
    minValue: minFloorValue,
    maxValue: maxFloorValue,
    value: {
      min: minFloorValue,
      max: maxFloorValue,
    },
    formatLabel: '',
    step: 1,
  };

const minRoomsValue = Math.min.apply(Math, flatsArray.map(function(o) { return o.rooms; }));
const maxRoomsValue = Math.max.apply(Math, flatsArray.map(function(o) { return o.rooms; }));
export const roomsRange =
  {
    minValue: minRoomsValue,
    maxValue: maxRoomsValue,
    value: {
      min: minRoomsValue,
      max: maxRoomsValue,
    },
    formatLabel: '',
    step: 1,
  };

const minAreaValue = Math.min.apply(Math, flatsArray.map(function(o) { return o.area; }));
const maxAreaValue = Math.max.apply(Math, flatsArray.map(function(o) { return o.area; }));
export const areaRange =
  {
    minValue: 0,
    maxValue: 100,
    value: {
      min: minAreaValue,
      max: maxAreaValue,
    },
    formatLabel: 'm2',
    step: 5,
  };

const minPriceValue = Math.min.apply(Math, flatsArray.map(function(o) { return o.price; }));
const maxPriceValue = Math.max.apply(Math, flatsArray.map(function(o) { return o.price; }));
export const priceRange =
  {
    minValue: 100000,
    maxValue: 1000000,
    value: {
      min: minPriceValue,
      max: maxPriceValue,
    },
    formatLabel: 'zł',
    step: 25000,
  };

