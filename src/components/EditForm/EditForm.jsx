import React from "react";

function EditForm() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <form className='w-full max-w-lg'>
                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Name'
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Surname'
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Email'
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Phone number'
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Password'
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Confirm Password'
                    />
                </div>

                <div className='flex flex-wrap w-full mb-4'>
                    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                        <label
                            className='block uppercase tracking-wide text-[#21567E] placeholder-[#21567E] text-xs font-bold mb-2'
                            htmlFor='grid-city'
                        >
                            Address
                        </label>
                        <input
                            className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                            type='text'
                            placeholder='City'
                        />
                    </div>

                    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                        <label
                            className='block uppercase tracking-wide text-transparent placeholder-[#21567E] text-xs font-bold mb-2'
                            htmlFor='grid-country'
                        >
                            Country
                        </label>
                        <input
                            className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                            type='text'
                            placeholder='Country'
                        />
                    </div>

                    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                        <label
                            className='block uppercase tracking-wide text-transparent placeholder-[#21567E] text-xs font-bold mb-2'
                            htmlFor='grid-zip'
                        >
                            ZIP
                        </label>
                        <input
                            className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                            type='text'
                            placeholder='ZIP'
                        />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='bg-[#FF8A57] hovelor:bg-transparent hover:text-[#FF8A57] hover:border-[#FF8A57] border hover:border-2 text-white font-bold py-2 px-7 rounded'>
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;
