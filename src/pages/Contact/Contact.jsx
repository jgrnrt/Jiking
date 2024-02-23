import React, { useState, useRef } from 'react'
import { Switch } from '@headlessui/react'
import { Link } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Contact() {
    // Initial state values
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    };

    // ref map to change focus
    const inputRefs = useRef({
        firstName: React.createRef(),
        lastName: React.createRef(),
        email: React.createRef(),
        message: React.createRef(),
        agreed: React.createContext()
    });

    const handleFocus = (name) => {
        inputRefs.current[name].current.focus();
    };

    const [inputs, setInputs] = useState(initialState);
    const [agreed, setAgreed] = useState(false)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // if (inputs.firstName == '') {
        //     handleFocus('firstName');
        //     return;
        // }
        // if (inputs.lastName == '') {
        //     handleFocus('lastName');
        //     return;
        // }

        // if (inputs.email == '') {
        //     handleFocus('email');
        //     return;
        // }

        // if (inputs.message == '') {
        //     handleFocus('message');
        //     return;
        // }

        if (!agreed) {
            inputRefs.current['agreed'].current.classList.add('bg-red-400', 'ring-2', 'ring-inset', 'ring-lime-500');
            return;
        }
        alert(JSON.stringify(inputs));
    }

    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Jiking</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Reach out to us today to secure your essential hiking gear and book your next adventure,
                    where unforgettable experiences await!
                </p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="text"
                                name="firstName"
                                id="firstName"
                                ref={inputRefs.current.firstName}
                                autoComplete="given-name"
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300
                                 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="text"
                                name="lastName"
                                id="lastName"
                                ref={inputRefs.current.lastName}
                                autoComplete="family-name"
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset
                                 ring-gray-300
                                 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                ref={inputRefs.current.email}
                                autoComplete="email"
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset
                                 ring-gray-300
                                 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                required
                                name="message"
                                id="message"
                                rows={4}
                                ref={inputRefs.current.message}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset
                                 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 
                                 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                required
                                checked={agreed}
                                onChange={setAgreed}
                                ref={inputRefs.current.agreed}
                                className={classNames(
                                    agreed ? 'bg-lime-500' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-lime-500 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-gray-600">
                            By selecting this, you agree to our{' '}
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to='/Imprint'
                                className='font-semibold text-lime-500'
                            >
                                privacy policy
                            </Link>
                            .
                        </Switch.Label>
                    </Switch.Group>
                </div>

                <ReCAPTCHA
                    className='mt-10'
                    sitekey="6LcBQn0pAAAAACBzQPFOzACA-q8M_JBPY6jlfnUM"
                    onChange={(value) => {
                        console.log("Captcha value:", value);
                        // captcha response
                    }}
                />
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm 
                        bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    )
}
