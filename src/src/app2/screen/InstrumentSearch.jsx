import React, { useState, useEffect } from "react";

const InstrumentSearch = ({ onInstrumentSelect }) => {
  const [instrumentSearch, setInstrumentSearch] = useState("");
  const [filteredInstruments, setFilteredInstruments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInstrumentList = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://192.46.212.210/api/teacher/get_instrument_list",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ search: instrumentSearch }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched instruments:", data.data);
          setFilteredInstruments(data.data || []);
        } else {
          console.error(
            "Failed to fetch instrument list",
            response.statusText
          );
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching the instrument list",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    if (instrumentSearch.trim() !== "") {
      fetchInstrumentList();
    } else {
      setFilteredInstruments([]);
    }
  }, [instrumentSearch]);

  const handleInstrumentSelect = (instrument) => {
    onInstrumentSelect(instrument);
    setInstrumentSearch("");
    setFilteredInstruments([]);
  };

  return (
    <div className="position-relative">
      <input
        type="text"
        className="form-control"
        placeholder="Search instrument"
        value={instrumentSearch}
        onChange={(e) => setInstrumentSearch(e.target.value)}
      />
      {loading && (
        <div className="position-absolute top-100 start-0 translate-middle-y mt-1 ms-2">
          <div className="spinner-border spinner-border-sm text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {filteredInstruments.length > 0 && (
        <ul className="list-group">
          {filteredInstruments.map((instrument) => (
            <li
              key={instrument.id}
              className="list-group-item list-group-item-action"
              onClick={() => handleInstrumentSelect(instrument)}
            >
              {instrument.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InstrumentSearch;
