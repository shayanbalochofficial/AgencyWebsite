import { Users, Bike, CalendarCheck, CreditCard } from "lucide-react";

export default function Section2() {
  return (
    <section className="py-16 md:py-24 bg-purple-50 border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Helping a local
            <br />
            <span className="text-green-600">business reinvent itself</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          <div className="text-center">
            <Users className="w-12 h-12 md:w-16 md:h-16 mx-auto text-green-600" />
            <p className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              2,245,341
            </p>
            <p className="mt-3 text-lg md:text-xl text-gray-700">Members</p>
          </div>

          <div className="text-center">
            <Bike className="w-12 h-12 md:w-16 md:h-16 mx-auto text-green-600" />
            <p className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              46,328
            </p>
            <p className="mt-3 text-lg md:text-xl text-gray-700">Clubs</p>
          </div>

          <div className="text-center">
            <CalendarCheck className="w-12 h-12 md:w-16 md:h-16 mx-auto text-green-600" />
            <p className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              828,867
            </p>
            <p className="mt-3 text-lg md:text-xl text-gray-700">
              Event Bookings
            </p>
          </div>

          <div className="text-center">
            <CreditCard className="w-12 h-12 md:w-16 md:h-16 mx-auto text-green-600" />
            <p className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              1,926,436
            </p>
            <p className="mt-3 text-lg md:text-xl text-gray-700">Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
