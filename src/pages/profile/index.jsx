import * as React from "react";
import EditForm from "@/components/EditForm/EditForm";
import Sidebar from "@/components/SideBar/SideBar";
import ProfileComponent from "@/components/Profile/Profile";

const EditProfilePage = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <ProfileComponent />
        </div>
    );
};

export default EditProfilePage;
