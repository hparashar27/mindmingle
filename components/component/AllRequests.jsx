"use client"
import React, { useState, useEffect } from "react";
import { Suspense } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const AllRequests = ({requests}) => {
    return (
        <> 
            {Array.isArray(requests) &&
                requests.map((request) => (
                <div
                    key={request._id}
                    className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg p-6 w-full w-3/5 mx-auto my-4"
                >
                    <div className="text-xl font-semibold mb-4 flex flex-row justify-center">{"Message Details"}</div>
                    <div className="mb-4">
                        <span className="font-semibold"><AccessTimeIcon/> </span> {request.updatedAt}
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold"><AccountCircleIcon/></span> {request.username}
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold"><MailIcon/></span> {request.email}
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold"><PhoneInTalkIcon/></span> {request.phone}
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold"><SubjectIcon/></span> {request.subject}
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold"><MessageIcon/></span> {request.message}
                    </div>
                </div>
            ))}
        </>
    );
}

export default AllRequests