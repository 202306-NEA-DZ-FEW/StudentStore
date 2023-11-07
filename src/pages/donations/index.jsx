import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import DonationSlider from "@/components/DonationSlider/DonationSlider";
import PricingCard from "@/components/PricingCard/PricingCard";

import Layout from "@/layout/Layout";

function DonationsPage() {
    const { t, i18n } = useTranslation("donations");
    //for arabic text
    const isRTL = i18n.language.startsWith("ar");

    return (
        <Layout>
            <div className='p-4 mt-24 flex justify-center flex-col'>
                <DonationSlider />
                <div className='text-[#7874F2] flex flex-col '>
                    <h1 className=' text-3xl  md:text-4xl mt-[-60px] sm:mt-[-90px] md:mt-[-100px] lg:mt-[-150px] font-bold mx-auto mb-3'>
                        {t("why donate?")}
                    </h1>
                    {isRTL ? (
                        <p
                            dir='rtl'
                            className='mx-auto text-justify  px-2 text-[20px] sm:px-12 font-semibold w-[85%] md:w-[60%]  leading-10 sm:text-2xl  pb-2 '
                        >
                            {t("why donating paragraph")}
                        </p>
                    ) : (
                        <p
                            dir='ltr'
                            className='mx-auto text-justify  px-2 text-[20px] sm:px-12 font-semibold w-[85%] md:w-[60%]  sm:text-2xl leading-10 pb-2 '
                        >
                            {t("why donating paragraph")}
                        </p>
                    )}
                </div>
                <h1 className='text-[#7874F2] text-3xl  md:text-4xl text-center mx-auto font-bold mt-6 '>
                    {t("make a difference by donating")}
                </h1>
                <div className='flex  flex-col md:flex-row justify-between   gap-6 my-8 mx-auto lg:gap-12'>
                    <PricingCard
                        title={t("small help")}
                        amount='10'
                        t={t}
                        isRTL={isRTL}
                    />
                    <PricingCard
                        title={t("some help")}
                        amount='25'
                        t={t}
                        isRTL={isRTL}
                    />
                    <PricingCard
                        title={t("big help")}
                        amount='50'
                        t={t}
                        isRTL={isRTL}
                    />
                </div>
                <ToastContainer />
            </div>
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "donations"])),
            // Will be passed to the page component as props
        },
    };
}

export default DonationsPage;
