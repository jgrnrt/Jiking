import { useState } from 'react';

function CalcComponent() {

    // Initial state values
    const initialState = {
        ascentHeight: 300,
        descentHeight: 500,
        routeLength: 4,
        averageAscentSpeed: 300,
        averageDescentSpeed: 500,
        walkingSpeed: 4,
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    }

    const [inputs, setInputs] = useState(initialState);
    const [tourDuration, setTourDuration] = useState('');

    const calculateTime = (event) => {
        event.preventDefault();

        var timeVertical = inputs.ascentHeight / inputs.averageAscentSpeed + inputs.descentHeight / inputs.averageDescentSpeed;
        var timeHorizontal = inputs.routeLength / inputs.walkingSpeed;

        var maxTime = Math.max(timeVertical, timeHorizontal);
        var minTime = Math.min(timeVertical, timeHorizontal);

        var totalTime = maxTime + (minTime / 2);

        let hours = Math.floor(totalTime); // rounds down e.g. 5.5 to 5
        let decimalDigits = totalTime - hours; // e.g. 5.5 - 5
        let minutes = Math.round(decimalDigits * 60);

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let totalTimeString = hours.toString() + ":" + minutes;

        setTourDuration(totalTimeString);
    };

    const handleReset = () => {
        setInputs(initialState);
        setTourDuration('');
    };

    return (
        <div className="py-24 sm:py-32">
            <div className="container mx-auto">
                <div className="mx-auto max-w-2xl sm:text-center ">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hiking Time Calculator</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Planning your hiking trip has never been easier with our exclusive Hiking Time Calculator. Whether you're
                        embarking on a day hike or a multi-day trek, our calculator ensures you stay on track and make the most of your time outdoors.
                    </p>
                </div>

                <form onSubmit={calculateTime} className="rounded-3xl ring-1 ring-gray-200 p-6  mt-16">

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <fieldset>
                            <legend className="mb-4 text-lg">Route Data</legend>

                            <div className="mb-4">
                                <label htmlFor="ascentHeight" className="block">Ascent (Altitude meters)</label>
                                <input
                                    type="number"
                                    name="ascentHeight"
                                    id="ascentHeight"
                                    min="0"
                                    placeholder={inputs.ascentHeight}
                                    onChange={handleChange}
                                    className="mt-2 block w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="descentHeight" className="block">Descent (Altitude meters)</label>
                                <input
                                    type="number"
                                    id="descentHeight"
                                    name="descentHeight"
                                    min="0"
                                    placeholder={inputs.descentHeight}
                                    onChange={handleChange}
                                    className="mt-2 block w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                                    ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="routeLength" className="block">Route Length (km)</label>
                                <input
                                    type="number"
                                    id="routeLength"
                                    name="routeLength"
                                    min="0"
                                    placeholder={inputs.routeLength}
                                    onChange={handleChange}
                                    className="mt-2 block w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                                    ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </fieldset>

                        <fieldset className="mb-4">
                            <legend className="mb-4 text-lg">My Average Values</legend>
                            <div className="mb-4">
                                <label htmlFor="averageAscentSpeed" className="block">Average Ascent Speed (Altitude meters/h)</label>
                                <input
                                    type="number"
                                    name="averageAscentSpeed"
                                    id="averageAscentSpeed"
                                    min="0"
                                    placeholder={inputs.averageAscentSpeed}
                                    onChange={handleChange}
                                    className="mt-2 block w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                                    ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="averageDescentSpeed" className="block">Average Descent Speed (Altitude meters/h)</label>
                                <input
                                    type="number"
                                    id="averageDescentSpeed"
                                    name="averageDescentSpeed"
                                    min="0"
                                    placeholder={inputs.averageDescentSpeed}
                                    onChange={handleChange}
                                    className="mt-2 block w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                     ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="walkingSpeed" className="block">Average Walking Speed (km/h)</label>
                                <input
                                    type="number"
                                    id="walkingSpeed"
                                    name="walkingSpeed"
                                    min="0"
                                    placeholder={inputs.walkingSpeed}
                                    onChange={handleChange}
                                    className="mt-2 block w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                                    ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </fieldset>
                    </div>

                    <fieldset className="mb-4">
                        <legend className="mb-4 text-lg">Tour Duration Calculation</legend>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

                            <div className="space-x-4">
                                <div className="flex items-center">
                                    <input
                                        className="form-input text-center block w-4/12 md:w-2/12 rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 
                                        ring-inset text-base font-bold sm:leading-6 ring-lime-500 focus:ring-2 focus:ring-inset focus:ring-lime-500"
                                        id="tourDuration"
                                        readOnly
                                        name="tourDuration"
                                        value={tourDuration}
                                    />
                                    <label className="block ml-2">h will the Tour take.</label>
                                </div>
                            </div>
                            <div className="">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm 
                                    text-sm font-medium rounded-md text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 
                                    focus:ring-offset-2 focus:ring-lime-500"
                                >
                                    Calculate
                                </button>
                                <button
                                    type="reset"
                                    onClick={handleReset}
                                    className="ml-2 inline-flex justify-center py-2 px-4 border border-gray-300 
                                    shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 
                                    focus:ring-offset-2 focus:ring-lime-500"
                                >
                                    Reset
                                </button>

                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default CalcComponent;
