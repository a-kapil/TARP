import React, { useState } from 'react';

const Precooling = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentTemperature, setCurrentTemperature] = useState('');
    const [loadDepartureTime, setLoadDepartureTime] = useState('');
    const [desiredTemperature, setDesiredTemperature] = useState('');
    const [trailerSize, setTrailerSize] = useState('');
    const [coolingTime, setCoolingTime] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const calculatedTime = calculateCoolingTime(
            currentTime,
            loadDepartureTime,
            currentTemperature,
            desiredTemperature
        );
        setCoolingTime(calculatedTime);
    };

    const calculateCoolingTime = (currentTime, loadDepartureTime, currentTemp, desiredTemp) => {
        // Convert temperatures to Kelvin for calculations
        const currentTempK = parseFloat(currentTemp) + 273.15; // °C to K
        const desiredTempK = (parseFloat(desiredTemp) - 32) * (5 / 9) + 273.15; // °F to K

        // Calculate the volume of the trailer (assuming a cuboid shape)
        const trailerVolume = trailerSize * trailerSize * trailerSize; // Volume in cubic feet
        const airDensity = 0.075; // lbs/ft³ (average density of air)
        const specificHeatCapacity = 0.24; // BTU/(lb·°F) (average for air)

        // Calculate the mass of air in the trailer
        const massOfAir = airDensity * trailerVolume; // in lbs

        // Calculate the temperature difference
        const deltaT = currentTempK - desiredTempK;

        // Calculate energy required to cool the air
        const energyRequired = massOfAir * specificHeatCapacity * deltaT; // in BTUs

        // Cooling power of a 30 HP pump
        const pumpPowerBTU = 30 * 2545; // 30 HP to BTU/hr

        // Estimate cooling time (in hours)
        const timeInHours = energyRequired / pumpPowerBTU;

        // Convert hours to minutes
        const timeInMinutes = timeInHours * 60;

        return timeInMinutes;
    };

    return (
        <div>
            <h2>Precooling Input Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Current Time:
                        <input
                            type="time"
                            value={currentTime}
                            onChange={(e) => setCurrentTime(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Current Temperature (°C):
                        <input
                            type="number"
                            value={currentTemperature}
                            onChange={(e) => setCurrentTemperature(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Load Departure Time:
                        <input
                            type="time"
                            value={loadDepartureTime}
                            onChange={(e) => setLoadDepartureTime(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Desired Temperature (°F):
                        <input
                            type="number"
                            value={desiredTemperature}
                            onChange={(e) => setDesiredTemperature(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Trailer Size (feet):
                        <input
                            type="number"
                            value={trailerSize}
                            onChange={(e) => setTrailerSize(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            {coolingTime !== null && (
                <div>
                    <h3>Cooling Time: {coolingTime.toFixed(2)} minutes</h3>
                </div>
            )}
        </div>
    );
};

export default Precooling;
