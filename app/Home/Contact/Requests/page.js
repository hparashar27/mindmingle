import React from "react";
import AllRequests from "../../../../components/component/AllRequests"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default async function page() {
        const response = await fetch("http://localhost:3000/api/contact",{ cache: 'force-cache' });
        const data = await response.json();
        const requests = data.contacts;
        // console.log(requests)
  return (
    <>
    <AllRequests requests={requests}/>
    </>
  )
}

