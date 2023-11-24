import * as React from "react";
import EditForm from "@/components/EditForm/EditForm";
import Sidebar from "@/components/SideBar/SideBar";

const EditProfilePage = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 flex justify-center items-center p-4'>
                <EditForm />
            </div>
        </div>
    );
};

export default EditProfilePage;
