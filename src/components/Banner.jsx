import { Link } from "react-router-dom";

const Banner = () => {
    return (
    <section className="py-24 flex items-center min-h-screen justify-center bg-gray-50">
        <div className="mx-auto max-w-[43rem]">
            <div className="text-center">
                <p className="text-lg font-medium leading-8 text-indigo-600/95">Front-End Developer with 12+ years of experience</p>
                <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black text-shadow-sm">Sandip Chakraborty</h1>
                <p className="mt-3 text-lg leading-relaxed text-slate-600 ">Front-End Developer with 12+ years of experience building scalable, responsive applications using <strong>React, Next.js,  Angular, JavaScript, TypeScript, Node.js, HTML, CSS, Tailwind CSS</strong> etc. Skilled at clean code, reusable components, REST APIs, and UI/UX improvements. </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
                <Link to="/career" className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Career</Link>
                <a href="#" className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50">Resume</a>
            </div>
        </div>
    </section>
    )
}

export default Banner;