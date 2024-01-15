import { useEffect, useState } from 'react'
import AccountNavigation from './AccountNavigation'
import axios from 'axios'
import PlaceImg from '../PlaceImg'
import { Link } from 'react-router-dom'
import BookingDates from '../components/BookingDates'

const BookingsPage = () => {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    axios.get('bookings', { withCredentials: true}).then(response => {
      setBookings(response.data)
    })
  }, [])

  return (
    <div>
      <AccountNavigation />
      <div>
        {bookings.length > 0 && bookings.map((booking, index) => (
          <Link to={`/account/bookings/${booking._id}`} className='flex gap-4 bg-gray-200 rounded-2xl overflow-hidden' key={index}>
            <div className='w-48'>
             <PlaceImg place={booking.place} />
            </div>
            <div className='py-3 grow '>
              <h2 className='font-semibold text-xl'>{booking.place.title}</h2>

              <div className='text-xl'>
                <BookingDates booking={booking} className="my-2 text-gray-500"/>
                <div className="flex gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                  <span className="text-2xl">
                    Total price: ${booking.price}
                  </span>
                  
                </div>

              </div>
            </div> 
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BookingsPage