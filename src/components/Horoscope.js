import Card from "./UI/Card";
import { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
const defaultBirthDetails = {
  sunrise: "",
  sunset: "",
};
const defaultAstroDetails = {
  ascendant: "",
  Varna: "",
  Vashya: "",
  Yoni: "",
  Gan: "",
  Nadi: "",
  SignLord: "",
  sign: "",
  Naksahtra: "",
  NaksahtraLord: "",
  Charan: "",
  Yog: "",
  Karan: "",
  Tithi: "",
  yunja: "",
  tatva: "",
  name_alphabet: "",
  paya: "",
};
const Horoscope = (props) => {
  const [birthDetails, setBirthDetails] = useState(defaultBirthDetails);
  const [astroDetails, setAstroDetails] = useState(defaultAstroDetails);
  console.log(birthDetails);
  useEffect(() => {
    var api = "birth_details";
    var userId = "621060";
    var apiKey = "1ec0f3656b4c51a131797a220c13913d";
    var data = {
      day: props.birthDate.userDate,
      month: props.birthDate.userMonth,
      year: props.birthDate.userYear,
      hour: 2,
      min: 23,
      lat: 19.132,
      lon: 72.342,
      tzone: 5.5,
    };

    fetch("https://json.astrologyapi.com/v1/birth_details", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        authorization: "Basic " + btoa(userId + ":" + apiKey),
        "Content-Type": "application/json",
      },
    })
      .then((res1) => res1.json())
      .then((resp1) => {
        console.log(resp1);
        console.log(resp1.sunrise, resp1.sunset);
        setBirthDetails({
          sunrise: resp1.sunrise,
          sunset: resp1.sunset,
        });
      });

    fetch("https://json.astrologyapi.com/v1/astro_details", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        authorization: "Basic " + btoa(userId + ":" + apiKey),
        "Content-Type": "application/json",
      },
    })
      .then((res2) => res2.json())
      .then((resp2) => {
        setAstroDetails({
          ascendant: resp2.ascendant,
          Varna: resp2.Varna,
          Vashya: resp2.Vashya,
          Yoni: resp2.Yoni,
          Gan: resp2.Gan,
          Nadi: resp2.Nadi,
          SignLord: resp2.SignLord,
          sign: resp2.sign,
          Naksahtra: resp2.Naksahtra,
          NaksahtraLord: resp2.NaksahtraLord,
          Charan: resp2.Charan,
          Yog: resp2.Yog,
          Karan: resp2.Karan,
          Tithi: resp2.Tithi,
          yunja: resp2.yunja,
          tatva: resp2.tatva,
          name_alphabet: resp2.name_alphabet,
          paya: resp2.paya,
        });
      });

    fetch("https://json.astrologyapi.com/v1/basic_gem_suggestion", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        authorization: "Basic " + btoa(userId + ":" + apiKey),
        "Content-Type": "application/json",
      },
    })
      .then((res3) => res3.json())
      .then((resp3) => console.log(resp3));
  }, []);
  return (
    <>
      <Card>
        <h2>Birth Details</h2>
        <div>
          <table border={1}>
            <tbody>
              <tr>
                <td>sunrise</td>
                <td>{birthDetails.sunrise}</td>
              </tr>
              <tr>
                <td>sunset</td>
                <td>{birthDetails.sunset}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <Card>
        <h2>Astro Details</h2>
        <div>
          <table border={1}>
            <tbody>
              <tr>
                <td>ascendant</td>
                <td>{astroDetails.ascendant}</td>
              </tr>
              <tr>
                <td>Varna</td>
                <td>{astroDetails.Varna}</td>
              </tr>
              <tr>
                <td>Vashya</td>
                <td>{astroDetails.Vashya}</td>
              </tr>
              <tr>
                <td>Yoni</td>
                <td>{astroDetails.Yoni}</td>
              </tr>
              <tr>
                <td>Gan</td>
                <td>{astroDetails.Gan}</td>
              </tr>
              <tr>
                <td>Nadi</td>
                <td>{astroDetails.Nadi}</td>
              </tr>
              <tr>
                <td>SignLord</td>
                <td>{astroDetails.SignLord}</td>
              </tr>
              <tr>
                <td>sign</td>
                <td>{astroDetails.sign}</td>
              </tr>
              <tr>
                <td>Naksahtra</td>
                <td>{astroDetails.Naksahtra}</td>
              </tr>
              <tr>
                <td>NaksahtraLord</td>
                <td>{astroDetails.NaksahtraLord}</td>
              </tr>
              <tr>
                <td>Charan</td>
                <td>{astroDetails.Charan}</td>
              </tr>
              <tr>
                <td>Yog</td>
                <td>{astroDetails.Yog}</td>
              </tr>
              <tr>
                <td>Karan</td>
                <td>{astroDetails.Karan}</td>
              </tr>
              <tr>
                <td>Tithi</td>
                <td>{astroDetails.Tithi}</td>
              </tr>
              <tr>
                <td>yunja</td>
                <td>{astroDetails.yunja}</td>
              </tr>
              <tr>
                <td>tatva</td>
                <td>{astroDetails.tatva}</td>
              </tr>
              <tr>
                <td>name_alphabet</td>
                <td>{astroDetails.name_alphabet}</td>
              </tr>
              <tr>
                <td>paya</td>
                <td>{astroDetails.paya}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <Card></Card>
    </>
  );
};
export default Horoscope;
