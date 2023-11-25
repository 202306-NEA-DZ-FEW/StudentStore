export default function Faq() {
    return (
        <div className='w-1/2 mx-auto p-5'>
            <div className='collapse collapse-plus bg-base-200'>
                <input type='radio' name='my-accordion-3' checked='checked' />
                <div className='collapse-title text-xl font-medium'>
                    Click to open this one and close others
                </div>
                <div className='collapse-content'>
                    <p>hello</p>
                </div>
            </div>
            <div className='collapse collapse-plus bg-base-200'>
                <input type='radio' name='my-accordion-3' />
                <div className='collapse-title text-xl font-medium'>
                    Click to open this one and close others
                </div>
                <div className='collapse-content'>
                    <p>hello</p>
                </div>
            </div>
            <div className='collapse collapse-plus bg-base-200'>
                <input type='radio' name='my-accordion-3' />
                <div className='collapse-title text-xl font-medium'>
                    Click to open this one and close others
                </div>
                <div className='collapse-content'>
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
}
