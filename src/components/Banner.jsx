const Banner = () => {
    return (
    <section class="py-24 flex items-center min-h-screen justify-center bg-gray-50">
        <div class="mx-auto max-w-[43rem]">
            <div class="text-center">
                <p class="text-lg font-medium leading-8 text-indigo-600/95">Front-End Developer with 12+ years of experience</p>
                <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black text-shadow-sm">Sandip Chakraborty</h1>
                <p class="mt-3 text-lg leading-relaxed text-slate-600 ">Front-End Developer with 12+ years of experience building scalable, responsive applications using <strong>React, Next.js,  Angular, JavaScript, TypeScript, Node.js, HTML, CSS, Tailwind CSS</strong> etc. Skilled at clean code, reusable components, REST APIs, and UI/UX improvements. </p>
            </div>

            <div class="mt-6 flex items-center justify-center gap-4">
                <a href="#" class="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Career</a>
                <a href="#" class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50">Resume</a>
            </div>
        </div>
    </section>
    )
}

export default Banner;