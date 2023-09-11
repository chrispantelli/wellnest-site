import { useState } from 'react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            {mobileMenuOpen ? (
                <>
                    <div className='h-screen bg-secondary-blue lg:hidden block absolute top-0 w-full'>
                        <header className="bg-secondary-blue w-full py-8 px-8 lg:px-2 sm:py-6">
                            <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
                                <div className="flex lg:flex-1">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Wellnest</span>
                                        <img className="h-8 w-auto" src="./branding/logo_text_white.svg" alt="" />
                                    </a>
                                </div>
                                <div className="flex lg:hidden">
                                    <button
                                        type="button"
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        <XMarkIcon className="h-8 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </nav>
                        </header>
                        <div className='mt-24'>
                            <ul className="space-y-5 text-center">
                                <li>
                                    <a className='text-white text-4xl paragraph-regular-bold'>About</a>
                                </li>
                                <li>
                                    <a className='text-white text-4xl paragraph-regular-bold'>Features</a>
                                </li>
                                <li>
                                    <a className='text-white text-4xl paragraph-regular-bold'>Kits</a>
                                </li>
                                <li>
                                    <a className='text-white text-4xl paragraph-regular-bold'>Signup</a>
                                </li>
                                <li>
                                    <a className='text-white text-4xl paragraph-regular-bold'>Download</a>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                </>
            ) : (
                <>
                </>
            )}
            <header className="bg-soft-blue w-full py-8 px-8 lg:px-2 sm:py-6">
            <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Wellnest</span>
                        <img className="h-8 w-auto" src="./branding/logo_text_blue.svg" alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-8 w-6 text-secondary-blue" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 pt-3">
                    <a href="#" className="paragraph-regular-bold text-secondary-blue">
                        About
                    </a>
                    <a href="#" className="paragraph-regular-bold text-secondary-blue">
                        Features
                    </a>
                    <a href="#" className="paragraph-regular-bold text-secondary-blue">
                        Kits
                    </a>
                    <a href="#" className="paragraph-regular-bold text-secondary-blue">
                        Sign Up
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end pt-3">
                    <a href="#" className="paragraph-regular-bold text-white bg-secondary-blue px-5 py-2 rounded-3xl">
                        Download
                    </a>
                </div>
            </nav>
        </header>
        
        </>
    )
}
