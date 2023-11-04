const Logo = () => {
    return (
        <div className='logo w-20 h-20 flex '>
            <img src='Logo.svg' alt='Logo' />
            <div className={{ width: "100%", height: "100%" }}>
                <span className="text-indigo-500 , text-2xl , font-bold ,  fontFamily: 'Clash Display Variable', wordWrap: 'break-word'">
                    Student
                    <br />
                </span>
                <span className=" text-black , text-2xl , font-bold ,  fontFamily: 'Clash Display Variable', wordWrap: 'break-word'">
                    Store
                </span>
            </div>
        </div>
    );
};
export default Logo;
