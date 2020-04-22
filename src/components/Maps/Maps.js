import React from 'react';
import { Map, Marker, Popup, TileLayer, SVGOverlay } from 'react-leaflet';
import L from 'leaflet';
import '../../views/Root/index.css';

export const LocationMap = () => {
  const positions = [
    {
      coordinates: [50.034053, 19.895054],
      popup: 'Inwestycja',
      iconName: 'home_pin.png'
    },
    {
      coordinates: [50.033897, 19.899938],
      popup: 'Przedszkole',
      iconName: 'kindergarden_pin.png'

    },
    {
      coordinates: [50.033588, 19.900539],
      popup: 'Sklep spożywczy',
      iconName: 'shop_pin.png'
    },
    {
      coordinates: [50.032336, 19.895907],
      popup: 'Sklep spożywczy',
      iconName: 'shop_pin.png'
    },
    {
      coordinates: [50.033697, 19.900485],
      popup: 'Termy Krakowskie',
      iconName: 'gym_pin.png'
    },
    {
      coordinates: [50.032978, 19.900659],
      popup: 'Stomatolog',
      iconName: 'dentist_pin.png'
    },
    {
      coordinates: [50.036816, 19.895177],
      popup: 'Przystanek autobusowy',
      iconName: 'bus_pin.png'
    },
    {
      coordinates: [50.035824, 19.889200],
      popup: 'Szkoła podstawowa',
      iconName: 'school_pin.png'
    },
  ];

  const shadow = 'shadow.png';

  return (
    <Map center={positions[0].coordinates} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions.map((position, index) => {
       
        const icon = L.icon({
          className: 'location-icon',
          iconUrl: require(`../../../public/icons/${position.iconName}`),
          iconSize: [24, 24],
          iconAnchor: [12, 12],
          popupAnchor: [0, -12],
          shadowUrl: require(`../../../public/icons/${shadow}`),
          shadowSize: [30, 30],
          shadowAnchor: [15, 15],
        });

        return (
          <Marker key={index} icon={icon} position={position.coordinates}>
            <Popup>{position.popup}</Popup>
          </Marker>
        );
        })}
    </Map>
  );
};

export const ContactMap = () => {
  const position = [50.018347, 19.904964];
  const rectangle = [
    [50.00, 19.88],
    [50.04, 19.93]
  ];
  return (
    <Map center={position} zoom={14} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <SVGOverlay bounds={rectangle}>
        <rect x="0" y="0" width="100%" height="100%" fill="blue" opacity={.25} />
      </SVGOverlay>
      <Marker position={position}>
        <Popup>Nasze biuro</Popup>
      </Marker>
    </Map>
  );
};
