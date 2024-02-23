import useDocumentTitle from '../../functions/useDocumentTitle';

export default function Imprint() {
    useDocumentTitle('Jiking - Imprint')

    return (
        <>
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Imprint</h1>
                <div className="text-gray-800">
                    <p className="mb-2"><strong>Company Name:</strong> Jiking</p>
                    <p className="mb-2"><strong>Address:</strong> 1234 Business Road, Business City, BC 12345</p>
                    <p className="mb-2"><strong>Contact:</strong> Email: contact@jiking.com | Phone: +1 (123) 456-7890</p>
                    <p className="mb-2"><strong>Managing Director:</strong> Jane Doe</p>
                    <p className="mb-2"><strong>Registration Court:</strong> Court of Business City</p>
                    <p className="mb-2"><strong>Commercial Register Number:</strong> HRB 123456</p>
                    <p className="mb-2"><strong>VAT Identification Number:</strong> DE123456789</p>
                    <p className="mb-2"><strong>Responsible for content:</strong> Jane Doe, Address as above</p>
                </div>
                <h1 className="mb-8 mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Privacy Policy</h1>
                <div className="text-gray-800">
                    <p className="mb-2"><strong>Data Collection:</strong> We collect data for the sole purpose of providing our services and improving user experience.</p>
                    <p className="mb-2"><strong>Data Usage:</strong> Your data will not be shared with third parties without your consent unless required by law.</p>
                    <p className="mb-2"><strong>Data Security:</strong> We implement security measures to protect your data from unauthorized access or disclosure.</p>
                    <p className="mb-2"><strong>Cookies:</strong> We may use cookies to enhance your browsing experience on our website.</p>
                    <p className="mb-2"><strong>Third-party Links:</strong> Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites.</p>
                    <p className="mb-2"><strong>Changes to Policy:</strong> We reserve the right to update our privacy policy at any time. Any changes will be reflected on this page.</p>
                    <p className="mb-2"><strong>Contact:</strong> If you have any questions or concerns regarding our privacy policy, please contact us at privacy@jiking.com.</p>
                </div>
            </main >
        </>
    );
}