import message from "../assets/message.svg";
import phone from "../assets/call.svg";

const Contact = () => {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900">Reach Us At Anytime</h1>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Have questions or need any help? We’re here to help you with that.</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-2">
                    <div className="flex flex-col gap-8">
                        <div className="rounded-2xl bg-white p-8 shadow-lg">
                            <img src={message} alt="message" className="h-10 w-10" />
                            <p className="mt-6 text-base leading-7 text-gray-600">Feel free to email me if you have any questions or need more details!</p>
                            <a href="mailto:orbai@support.com" className="mt-4 block font-semibold text-gray-900 underline">orbai@support.com</a>
                        </div>
                        <div className="rounded-2xl bg-white p-8 shadow-lg">
                            <img src={phone} alt="phone" className="h-10 w-10" />
                            <p className="mt-6 text-base leading-7 text-gray-600">Feel free to book a call if that’s more convenient and easier for you.</p>
                            <a href="#" className="mt-4 block font-semibold text-gray-900 underline">Book a call</a>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white p-8 shadow-lg">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">Full Name</label>
                                <div className="mt-2.5">
                                    <input type="text" name="full-name" id="full-name" autoComplete="name" placeholder="Ikta Sollork" className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email Address</label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autoComplete="email" placeholder="orbai@support.com" className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">Subject of Interest</label>
                                <div className="mt-2.5">
                                    <input type="text" name="subject" id="subject" placeholder="Regarding Project" className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">How may we assist you?</label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows={4} placeholder="Give us more info..." className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button type="submit" className="w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Your Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;