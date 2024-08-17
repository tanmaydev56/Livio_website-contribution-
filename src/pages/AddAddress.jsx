import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/AddAddress.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AddAddress = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch all countries on component mount
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://api.countrystatecity.in/v1/countries",
          {
            headers: {
              "X-CSCAPI-KEY":
                "amxTdjFtbW1FczJKRXdzU1hDbDZoTjQwMElzMVZFMkh6SVZvTWRZSw==",
            },
          }
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("Error fetching countries. Please try again later.");
      }
    };

    fetchCountries();
  }, []);

  const fetchStates = async (countryCode) => {
    try {
      setLoadingStates(true);
      const response = await axios.get(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
        {
          headers: {
            "X-CSCAPI-KEY":
              "amxTdjFtbW1FczJKRXdzU1hDbDZoTjQwMElzMVZFMkh6SVZvTWRZSw==",
          },
        }
      );
      setStates(response.data);
      setLoadingStates(false);
    } catch (error) {
      console.error("Error fetching states:", error);
      setLoadingStates(false);
      setError("Error fetching states. Please try again later.");
    }
  };

  const fetchCities = async (countryCode, stateCode) => {
    try {
      setLoadingCities(true);
      const response = await axios.get(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,
        {
          headers: {
            "X-CSCAPI-KEY":
              "amxTdjFtbW1FczJKRXdzU1hDbDZoTjQwMElzMVZFMkh6SVZvTWRZSw==",
          },
        }
      );
      setCities(response.data);
      setLoadingCities(false);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setLoadingCities(false);
      setError("Error fetching cities. Please try again later.");
    }
  };

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    setSelectedState(""); // Reset state selection
    setSelectedCity(""); // Reset city selection
    setStates([]); // Clear previous states
    setCities([]); // Clear previous cities

    if (countryCode) {
      fetchStates(countryCode);
    }
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    setSelectedCity(""); // Reset city selection
    setCities([]); // Clear previous cities

    if (stateCode) {
      fetchCities(selectedCountry, stateCode);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
    console.log("Selected Country:", selectedCountry);
    console.log("Selected State:", selectedState);
    console.log("Selected City:", selectedCity);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Add Addresses</h1>
      <h2 className={styles.billingHeading}>Billing Address</h2>
      <form className={styles["address-form"]} onSubmit={handleFormSubmit}>
        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label>
              First name <span className={styles.required}>*</span>
            </label>
            <input type="text" required />
          </div>
          <div className={styles["form-group"]}>
            <label>
              Last name <span className={styles.required}>*</span>
            </label>
            <input type="text" required />
          </div>
        </div>
        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label>
              Email address <span className={styles.required}>*</span>
            </label>
            <input type="email" required />
          </div>
          <div className={styles["form-group"]}>
            <label>
              Phone <span className={styles.required}>*</span>
            </label>
            <input type="tel" required />
          </div>
        </div>
        <div className={styles["form-group"]}>
          <label>House no/door no</label>
          <input type="text" />
        </div>
        <div className={styles["form-group"]}>
          <label>
            Street address <span className={styles.required}>*</span>
          </label>
          <input type="text" required />
        </div>
        <div className={styles["form-group"]}>
          <label>
            Country <span className={styles.required}>*</span>
          </label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.iso2} value={country.iso2}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles["form-group"]}>
          <label>
            State <span className={styles.required}>*</span>
          </label>
          <select
            value={selectedState}
            onChange={handleStateChange}
            required
            disabled={!selectedCountry || loadingStates}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.iso2} value={state.iso2}>
                {state.name}
              </option>
            ))}
          </select>
          {loadingStates && <p>Loading states...</p>}
        </div>
        <div className={styles["form-group"]}>
          <label>
            City <span className={styles.required}>*</span>
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            required
            disabled={!selectedState || loadingCities}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          {loadingCities && <p>Loading cities...</p>}
        </div>
        <div className={styles["form-group"]}>
          <label>
            ZIP <span className={styles.required}>*</span>
          </label>
          <input type="text" required />
        </div>

        <button type="submit" className={styles["save-address-btn"]}>
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AddAddress;
