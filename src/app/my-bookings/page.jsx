import MyAllBookingsTable from '@/components/tables/MyBookinsTable';
import { headers } from 'next/headers';

const fetchMyBookings = async () => {
    const res = await fetch('http://localhost:3000/api/service', {
        headers: headers()
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