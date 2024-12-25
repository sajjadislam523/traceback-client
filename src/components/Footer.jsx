import React from 'react';
import logo from '../assets/logo/brandLogo.png';

const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                {/* Brand Section */}
                <div className="lg:w-1/3">
                    <a href="/" className="flex justify-center space-x-3 lg:justify-start" aria-label="TraceBack">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600">
                            <img src={logo} alt="" className='w-full' />
                        </div>
                        <span className="self-center text-2xl font-semibold">TraceBack</span>
                    </a>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    {[
                        { title: "Support", links: ["Contact Us", "FAQs", "Terms of Service", "Privacy Policy"] },
                        { title: "About", links: ["Our Story", "How It Works", "Community"] },
                        { title: "For Volunteers", links: ["Join Us", "How to Help", "Become a Partner"] },
                        { title: "Follow Us", links: [] },
                    ].map((section, idx) => (
                        <div key={idx} className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-900">{section.title}</h3>
                            {section.links.length ? (
                                <ul className="space-y-1">
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            <a href="#" className="transition hover:text-violet-600">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="flex space-x-3">
                                    <a href="#" title="Facebook" className="flex items-center p-1 hover:text-violet-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                            <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z" />
                                        </svg>
                                    </a>
                                    <a href="#" title="Twitter" className="flex items-center p-1 hover:text-violet-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                                        </svg>
                                    </a>
                                    <a href="#" title="Instagram" className="flex items-center p-1 hover:text-violet-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                            <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.885-0.891 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.219 0.563 0.48 1.411 0.553 2.968 0.073 1.688 0.093 2.198 0.093 6.469s-0.021 4.781-0.093 6.469c-0.073 1.557-0.333 2.405-0.553 2.968-0.291 0.751-0.635 1.276-1.197 1.844-0.557 0.557-1.088 0.901-1.839 1.192-0.563 0.219-1.411 0.48-2.968 0.553-1.688 0.073-2.198 0.093-6.469 0.093s-4.781-0.021-6.469-0.093c-1.557-0.073-2.405-0.333-2.968-0.553-0.751-0.291-1.276-0.635-1.844-1.197-0.557-0.557-0.901-1.088-1.192-1.839-0.219-0.563-0.48-1.411-0.553-2.968-0.073-1.688-0.093-2.198-0.093-6.469s0.021-4.781 0.093-6.469c0.073-1.557 0.333-2.405 0.553-2.968 0.291-0.751 0.635-1.276 1.197-1.844 0.557-0.557 1.088-0.901 1.839-1.192 0.563-0.219 1.411-0.48 2.968-0.553 1.688-0.073 2.198-0.093 6.469-0.093zM16 7.199c-4.877 0-8.8 3.923-8.8 8.8 0 4.877 3.923 8.8 8.8 8.8 4.877 0 8.8-3.923 8.8-8.8-0.021-4.877-3.923-8.8-8.8-8.8zm0 15.999c-3.935 0-7.199-3.263-7.199-7.199 0-3.936 3.264-7.199 7.199-7.199 3.936 0 7.199 3.264 7.199 7.199-0.021 3.936-3.264 7.199-7.199 7.199zM22.031 6.25c0.566 0 1.024 0.458 1.024 1.024 0 0.566-0.458 1.024-1.024 1.024-0.566 0-1.024-0.458-1.024-1.024 0-0.566 0.458-1.024 1.024-1.024z" />
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </footer>


    );
};

export default Footer;