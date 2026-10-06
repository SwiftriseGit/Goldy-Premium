import React from "react";


export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#1a0a09]">
      <main className="max-w-4xl mx-auto py-32 px-6">
        <h1 className="text-4xl font-serif text-[#bfa76a] mb-8">Terms & Conditions</h1>
        <div className="text-gray-300 space-y-6 leading-relaxed">
          <p>
            Welcome to Hotel Goldy Premium. By accessing our website and booking a stay with us, you agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>
          
          <h2 className="text-2xl text-white font-serif mt-8 mb-4">1. Booking and Reservations</h2>
          <p>
            All bookings are subject to availability. A valid ID is required upon check-in. The primary guest must be at least 18 years of age.
          </p>
          
          <h2 className="text-2xl text-white font-serif mt-8 mb-4">2. Payment Policy</h2>
          <p>
            Payment terms depend on the rate selected at the time of booking. Any outstanding balance must be settled upon check-in.
          </p>

          <h2 className="text-2xl text-white font-serif mt-8 mb-4">3. Check-In & Check-Out</h2>
          <p>
            Our standard check-in time and check-out times apply. Early check-in or late check-out is subject to availability and may incur additional charges.
          </p>

          <h2 className="text-2xl text-white font-serif mt-8 mb-4">4. Liability</h2>
          <p>
            Hotel Goldy Premium is not responsible for the loss or damage of personal belongings. Guests are encouraged to use the provided safety deposit boxes.
          </p>

          <h2 className="text-2xl text-white font-serif mt-8 mb-4">5. Contact</h2>
          <p>
            For any queries regarding these terms, please contact us at hotelgoldypremium@gmail.com.
          </p>
        </div>
      </main>
    </div>
  );
}
