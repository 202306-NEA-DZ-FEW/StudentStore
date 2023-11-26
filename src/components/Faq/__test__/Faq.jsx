export default function Faq() {
    return (
        <div class='max-w-screen-xl mx-auto px-5 mb-10'>
            <div class='flex flex-col items-center'>
                <h2 class='font-bold text-5xl mt-5 tracking-tight'>FAQ</h2>
                <p class='text-neutral-500 text-xl mt-3'>
                    Frequenty asked questions
                </p>
            </div>
            <div class='grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8'>
                <div class='py-5'>
                    <details class='group'>
                        <summary class='flex justify-between items-center font-medium cursor-pointer list-none'>
                            <span>What is the Student Store website?</span>
                            <span class='transition group-open:rotate-180'>
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
                        <p class='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                            The Student Store is an online marketplace
                            exclusively designed for students. It provides a
                            platform for buying, selling, and borrowing
                            affordable new or used items such as electronics,
                            games, and study materials.
                        </p>
                    </details>
                </div>
                <div class='py-5'>
                    <details class='group'>
                        <summary class='flex justify-between items-center font-medium cursor-pointer list-none'>
                            <span>
                                How does the Student Store promote a sense of
                                community?
                            </span>
                            <span class='transition group-open:rotate-180'>
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
                        <p class='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                            The website encourages users to list real
                            information about their products, fostering a sense
                            of community and trust among students. This promotes
                            transparency and helps users make informed
                            decisions.
                        </p>
                    </details>
                </div>
                <div class='py-5'>
                    <details class='group'>
                        <summary class='flex justify-between items-center font-medium cursor-pointer list-none'>
                            <span>
                                Can I buy and sell both new and used items on
                                the Student Store?
                            </span>
                            <span class='transition group-open:rotate-180'>
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
                        <p class='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                            Yes, the platform allows users to buy and sell both
                            new and used items. This flexibility provides
                            students with affordable options and encourages
                            sustainability through the reuse of products.
                        </p>
                    </details>
                </div>
                <div class='py-5'>
                    <details class='group'>
                        <summary class='flex justify-between items-center font-medium cursor-pointer list-none'>
                            <span>
                                How does the borrowing duration work on the
                                Student Store?
                            </span>
                            <span class='transition group-open:rotate-180'>
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
                        <p class='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                            The borrowing duration is the period for which a
                            student can use the item. It ranges from one day to
                            15 days, providing flexibility based on individual
                            needs.
                        </p>
                    </details>
                </div>
                <div class='py-5'>
                    <details class='group'>
                        <summary class='flex justify-between items-center font-medium cursor-pointer list-none'>
                            <span>
                                Is there a limit on the number of items a
                                student can borrow simultaneously?
                            </span>
                            <span class='transition group-open:rotate-180'>
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
                        <p class='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                            The platform doesn&apos;t impose a strict limit on
                            the number of items a student can borrow
                            simultaneously. However, it&apos;s advisable to be
                            mindful of your capacity to manage multiple borrowed
                            items responsibly.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
}
