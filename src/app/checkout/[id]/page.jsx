import CheckoutForm from '@/components/forms/CheckoutForm';
import React from 'react';

const CheckoutPage =async ({params}) => {
    const p = await params;
    const res= await fetch(`https://nextjs-car-doctor-zeta.vercel.app/api/service/${p.id}`)
    const data=await res.json()
    return (
        <div>
         <CheckoutForm data={data}/>
        </div>
    );
};

export default CheckoutPage;