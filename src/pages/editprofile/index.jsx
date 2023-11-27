import * as React from "react";
import EditForm from "@/components/EditForm/EditForm";
import Sidebar from "@/components/SideBar/SideBar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const EditProfilePage = () => {
    const { t } = useTranslation("myListings");
    return (
        <div className='flex'>
            <Sidebar t={t} />
            <div className='flex-1 flex justify-center items-center p-4'>
                <EditForm />
            </div>
        </div>
    );
};

export default EditProfilePage;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "myListings"])),
            // Will be passed to the page component as props
        },
    };
}
