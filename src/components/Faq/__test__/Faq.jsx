import { useRouter } from "next/router";

export default function Faq({ t }) {
    const route = useRouter();
    return (
        <div
            className='max-w-screen-xl mx-auto px-5 mb-20 text-[#32314D]'
            dir={route.locale === "ar" ? "rtl" : "ltr"}
        >
            <div className='flex flex-col items-center'>
                <h2 className='font-bold text-4xl mt-5 text-center tracking-tight'>
                    {t("Frequently asked questions")}
                </h2>
            </div>
            <div className='grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8'>
                <div className='py-5'>
                    <details className='group'>
                        <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                            <span>{t("question1")}</span>
                            <span className='transition group-open:rotate-180'>
                                <svg
                                    fill='none'
                                    height='24'
                                    shape-rendering='geometricPrecision'
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='1.5'
                                    viewBox='0 0 24 24'
                                    width='24'
                                >
                                    <path d='M6 9l6 6 6-6'></path>
                                </svg>
                            </span>
                        </summary>
                        <p className='text-neutral-700 mt-3 group-open:animate-fadeIn'>
                            {t("answer1")}
                        </p>
                    </details>
                </div>
                <div className='py-5'>
                    <details className='group'>
                        <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                            <span>{t("question2")}</span>
                            <span className='transition group-open:rotate-180'>
                                <svg
                                    fill='none'
                                    height='24'
                                    shape-rendering='geometricPrecision'
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='1.5'
                                    viewBox='0 0 24 24'
                                    width='24'
                                >
                                    <path d='M6 9l6 6 6-6'></path>
                                </svg>
                            </span>
                        </summary>
                        <p className='text-neutral-700 mt-3 group-open:animate-fadeIn'>
                            {t("answer2")}
                        </p>
                    </details>
                </div>
                <div className='py-5'>
                    <details className='group'>
                        <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                            <span>{t("question3")}</span>
                            <span className='transition group-open:rotate-180'>
                                <svg
                                    fill='none'
                                    height='24'
                                    shape-rendering='geometricPrecision'
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='1.5'
                                    viewBox='0 0 24 24'
                                    width='24'
                                >
                                    <path d='M6 9l6 6 6-6'></path>
                                </svg>
                            </span>
                        </summary>
                        <p className='text-neutral-700 mt-3 group-open:animate-fadeIn'>
                            {t("answer3")}
                        </p>
                    </details>
                </div>
                <div className='py-5'>
                    <details className='group'>
                        <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                            <span>{t("question4")}</span>
                            <span className='transition group-open:rotate-180'>
                                <svg
                                    fill='none'
                                    height='24'
                                    shape-rendering='geometricPrecision'
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='1.5'
                                    viewBox='0 0 24 24'
                                    width='24'
                                >
                                    <path d='M6 9l6 6 6-6'></path>
                                </svg>
                            </span>
                        </summary>
                        <p className='text-neutral-700 mt-3 group-open:animate-fadeIn'>
                            {t("answer4")}
                        </p>
                    </details>
                </div>
                <div className='py-5'>
                    <details className='group'>
                        <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                            <span>{t("question5")}</span>
                            <span className='transition group-open:rotate-180'>
                                <svg
                                    fill='none'
                                    height='24'
                                    shape-rendering='geometricPrecision'
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='1.5'
                                    viewBox='0 0 24 24'
                                    width='24'
                                >
                                    <path d='M6 9l6 6 6-6'></path>
                                </svg>
                            </span>
                        </summary>
                        <p className='text-neutral-700 mt-3 group-open:animate-fadeIn'>
                            {t("answer5")}
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
}
