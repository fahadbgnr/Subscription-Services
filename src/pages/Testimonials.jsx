import React from 'react';

const Testimonials = () => {
    return (
        <div>
             <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="italic mb-4">"The service is amazing and support is top-notch!"</p>
            <div className="text-sm font-semibold">Sarah Khan</div>
            <div className="text-xs text-gray-500">CEO, TechZone</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="italic mb-4">"Highly recommend for anyone serious about growth."</p>
            <div className="text-sm font-semibold">Rafiul Islam</div>
            <div className="text-xs text-gray-500">Freelancer</div>
          </div>
        </div>
        
      </div>
    </section>
        </div>
    );
};

export default Testimonials;