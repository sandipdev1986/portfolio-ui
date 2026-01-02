import { TypeAnimation } from 'react-type-animation';
import cv from './../assets/Sandip_Chakraborty_Resume.pdf'

const Banner = () => {
    return (
    <div className="bg-gray-900">
        <div className="relative ">
            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
            </div>
            <div className="mx-auto max-w-5xl content-center" style={{height: '100vh'}}>
            <div className="sm:mb-5 sm:flex sm:justify-center text-center mb-5">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Front-End Developer with 13+ years of experience
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-xl font-semibold tracking-tight text-balance text-gray-300 sm:text-4xl">
                    <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                '12+ years building scalable front-end apps',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Expert in Angular, React, TypeScript, JavaScript, HTML, CSS',
                                1000,
                                'Skilled in REST API integration',
                                1000,
                                'Strong in responsive, accessible UI/UX design',
                                1000,
                                'Writes reusable, maintainable, testable code',
                                1000,
                                'Experience with Redux, rxJs and micro-frontends',
                                1000,
                                'Hands-on with CI/CD, Git, and DevOps workflows',
                                1000,
                                'Skilled in Jest, Cypress, Jasmine',
                                1000,
                                'Mentored developers & led cross-functional teams',
                                1000,
                                'Experienced in system design & architecture',
                                1000,
                                'Delivers projects on time using Agile',
                                1000,
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{display: 'inline-block' }}
                            repeat={Infinity}
                        /> </h1>
                <p className="mt-5 text-lg text-pretty text-gray-400 xs:text-xl/3">My Name is Sandip Chakraborty. I am a Front-End Developer with 13+ years of experience building scalable, responsive applications using <strong>React, Next.js, Angular, JavaScript, TypeScript, Node.js, HTML, CSS, Tailwind CSS</strong>. Skilled at clean code, reusable components, REST APIs, and UI/UX improvements.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href={cv} target='_blank'  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">My Resume</a>               

                </div>
            </div>
            </div>
        </div>
</div>
    )
}

export default Banner;