import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../views/Root/index.css';

export const LocationMap = () => {
  const position = [50.0341625, 19.8990923];
  return (
    <Map center={position} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Nasza inwestycja</Popup>
      </Marker>
    </Map>
  );
};

export const ContactMap = () => {
  const position = [50.0381261, 19.9426738];
  return (
    <Map center={position} zoom={14} zoomControl={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Nasze biuro</Popup>
      </Marker>
    </Map>
  );
};

