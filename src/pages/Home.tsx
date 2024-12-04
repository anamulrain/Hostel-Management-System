import { Link } from 'react-router-dom';
import { Building2, Users, CreditCard, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Find Your Perfect Student Accommodation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comfortable, affordable, and secure hostel rooms for students. Book your stay with ease
              and enjoy a seamless experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/rooms"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Browse Rooms
              </Link>
              <Link
                to="/register"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Register Now <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for comfortable stay
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Quality Accommodation
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600 text-center">
                  Modern facilities and well-maintained rooms
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Community Living
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600 text-center">
                  Connect with fellow students
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Easy Payments
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600 text-center">
                  Secure online payment system
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Instant Booking
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600 text-center">
                  Quick and hassle-free process
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}