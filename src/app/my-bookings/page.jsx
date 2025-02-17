import MyAllBookingsTable from '@/components/tables/MyBookinsTable';
import { headers } from 'next/headers';

const fetchMyBookings = async () => {
    const res = await fetch('https://nextjs-car-doctor-zeta.vercel.app/api/service', {
        headers: new Headers(await headers()),
    })
    const d = await res.json()
    return d
}
const MyBookingsPage = async () => {
    const data = await fetchMyBookings()
    return (
        <div>
            <MyAllBookingsTable data={data} />
        </div>
    );
};

export default MyBookingsPage;