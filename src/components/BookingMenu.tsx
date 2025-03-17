import styles from "./bookingmenu.module.css";
import Link from "next/link";

export default function BookingMenu() {
  return (
    <div
      className={`${styles.submenu} bg-white text-black shadow-lg rounded-lg p-6`}
    >
      <h3 className="text-xl font-semibold mb-6 text-gray-800">
        Booking Options
      </h3>
      <ul className="space-y-4">
        <li>
          <Link href="/booking">
            <a className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
              Make a Booking
            </a>
          </Link>
        </li>
        <li>
          <Link href="/booking/manage">
            <a className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
              Manage Bookings
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
