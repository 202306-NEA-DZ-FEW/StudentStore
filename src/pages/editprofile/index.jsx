import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import EditForm from "@/components/EditForm/EditForm";

import Sidebar from "@/components/SideBar/SideBar";

export default function HomePage() {
    const { t } = useTranslation("common");
    return (
        <div className='flex'>
            <Sidebar />
            <EditForm />
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
