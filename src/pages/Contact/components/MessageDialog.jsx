import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function MessageDialog({ isOpen, onClose, children }) {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Message too short!
                                </Dialog.Title>
                                <Dialog.Description className="mt-2">
                                    Please sent at least 10 characters.
                                </Dialog.Description>
                                <div className="mt-2">
                                    {children}
                                </div>

                                <div className="mt-4">
                                    <button

                                        type="button"
                                        className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm 
                                        bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 "
                                        onClick={onClose}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default MessageDialog
