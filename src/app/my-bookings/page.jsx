'use client'
import MyAllBookingsTable from '@/components/tables/MyBookinsTable';
import React, { useEffect, useState } from 'react';

const MyBookingsPage = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchMyBookings=async()=>{
const res=await fetch('http://localhost:3000/api/service')
const d=await res.json()
setData(d)
        }
        fetchMyBookings()
    },[])
    return (
        <div>
            <MyAllBookingsTable data={data}/>
        </div>
    );
};

export default MyBookingsPage;