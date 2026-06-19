import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

interface ContactPageProps {
  setActivePage?: (page: string) => void;
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkin: string;
  checkout: string;
  guests: string;
  room: string;
  requests: string;
};

export default function ContactPage({ setActivePage: _setActivePage }: ContactPageProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '2',
    room: '',
    requests: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(res => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="relative h-[260px] sm:h-[320px] lg:h-[400px] overflow-hidden mt-14 sm:mt-16 lg:mt-[104px]">
        <img
          src="https://images.pexels.com/photos/37836764/pexels-photo-37836764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1400"
          alt="Phewa Lake boats at dusk Pokhara Nepal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(28,28,26,0.6)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <div className="label-tag text-stone mb-3">We're Here For You</div>
            <div className="divider-gold mb-5" />
            <h1 className="hero-headline text-ivory text-4xl lg:text-6xl">
              Contact & Reservations
            </h1>
            <p className="text-ivory-soft font-light mt-4 max-w-lg leading-relaxed">
              Our team responds within hours. Tell us about your ideal stay
              and we will craft the perfect experience for you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">

            {/* Contact info sidebar */}
            <FadeIn className="order-last lg:order-none">
              <div className="space-y-8">
                <div>
                  <div className="label-tag text-forest mb-4">Find Us</div>
                  <div className="divider-gold mb-6" />

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <div className="text-xs font-semibold text-forest tracking-widest uppercase mb-1">Address</div>
                        <div className="text-sm text-body leading-relaxed">
                          16th Street, Samikopatan<br />
                          Lakeside, Pokhara 33700<br />
                          Gandaki Province, Nepal
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone size={18} className="text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <div className="text-xs font-semibold text-forest tracking-widest uppercase mb-1">Phone</div>
                        <a href="tel:+97761540000" className="text-sm text-body hover:text-forest transition-colors block">
                          +977-61-540000
                        </a>
                        <a href="tel:+9779800000000" className="text-sm text-body hover:text-forest transition-colors block">
                          +977-98-00000000 (WhatsApp)
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Mail size={18} className="text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <div className="text-xs font-semibold text-forest tracking-widest uppercase mb-1">Email</div>
                        <a href="mailto:info@hotelecotreepokhara.com" className="text-sm text-body hover:text-forest transition-colors block">
                          info@hotelecotreepokhara.com
                        </a>
                        <a href="mailto:reservations@hotelecotreepokhara.com" className="text-sm text-body hover:text-forest transition-colors block">
                          reservations@hotelecotreepokhara.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <div className="text-xs font-semibold text-forest tracking-widest uppercase mb-1">Hours</div>
                        <div className="text-sm text-body">
                          Front Desk: 24 hours, 7 days<br />
                          Check-in: 2:00 PM onwards<br />
                          Check-out: by 12:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="pt-6 border-t border-ivory-dark">
                  <div className="text-xs font-semibold text-forest tracking-widest uppercase mb-4">Follow Our Story</div>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-ivory border border-ivory-dark flex items-center justify-center hover:bg-forest hover:border-forest group transition-colors"
                      aria-label="Instagram"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-forest group-hover:text-white transition-colors">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-ivory border border-ivory-dark flex items-center justify-center hover:bg-forest hover:border-forest group transition-colors"
                      aria-label="Facebook"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-forest group-hover:text-white transition-colors">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Location advantages */}
                <div className="pt-6 border-t border-ivory-dark">
                  <div className="text-xs font-semibold text-forest tracking-widest uppercase mb-4">Nearby</div>
                  <div className="space-y-3">
                    {[
                      { loc: 'Phewa Lake', dist: '5 min walk' },
                      { loc: 'Lakeside Restaurants', dist: '3 min walk' },
                      { loc: 'Barahi Temple', dist: '10 min walk' },
                      { loc: 'Pokhara Airport', dist: '15 min drive' },
                      { loc: 'Sarangkot Viewpoint', dist: '20 min drive' },
                    ].map((l, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-body">
                          <div className="w-1 h-1 rounded-full bg-gold" />
                          {l.loc}
                        </div>
                        <span className="text-xs text-forest font-medium">{l.dist}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Booking Form */}
            <div id="booking-form" className="lg:col-span-2 order-first lg:order-none">
              <FadeIn delay={0.15}>
                <div className="bg-white border border-ivory-dark p-5 sm:p-8 lg:p-10">
                  {!submitted ? (
                    <>
                      <div className="mb-8">
                        <div className="label-tag text-forest mb-3">Reservation Enquiry</div>
                        <div className="divider-gold mb-5" />
                        <h2 className="font-serif-display text-3xl text-charcoal font-light">
                          Reserve Your Stay
                        </h2>
                        <p className="text-body font-light mt-2 text-sm leading-relaxed">
                          Fill in your details and our team will confirm availability and
                          best rates within 2–4 hours.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name row */}
                        <div className="form-grid-2">
                          <div>
                            <label className="label-tag text-body text-[0.6rem] block mb-2">First Name *</label>
                            <input
                              type="text"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Your first name"
                              className="input-luxury"
                            />
                          </div>
                          <div>
                            <label className="label-tag text-body text-[0.6rem] block mb-2">Last Name *</label>
                            <input
                              type="text"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Your last name"
                              className="input-luxury"
                            />
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="form-grid-2">
                          <div>
                            <label className="label-tag text-body text-[0.6rem] block mb-2">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              className="input-luxury"
                            />
                          </div>
                          <div>
                            <label className="label-tag text-body text-[0.6rem] block mb-2">Phone / WhatsApp</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 234 567 8900"
                              className="input-luxury"
                            />
                          </div>
                        </div>

                        {/* Dates */}
                        <div className="form-grid-2">
                          <div>
                            <label className="label-tag text-body text-[0.6rem] block mb-2">Check-in Date *</label>
                            <input
                              type="date"
                              name="checkin"
                              required
                              value={formData.checkin}
                              onChange={handleChange}
                              className="input-luxury"
                            />
                          </div>
                          <div>
                            <label className="label-tag text-body text-[0.6rem] block mb-2">Check-out Date *</label>
                            <input
                              type="date"
                              name="checkout"
                              required
                              value={formData.checkout}
                              onChange={handleChange}
                              className="input-luxury"
                            />
                          </div>
                        </div>

                        {/* Room & guests */}
                        <div className="form-grid-2">
                          <div>
                            <label className="label-tag text-body text-[0.6rem] block mb-2">Number of Guests *</label>
                            <select
                              name="guests"
                              value={formData.guests}
                              onChange={handleChange}
                              className="input-luxury"
                            >
                              {[1,2,3,4,5,6].map(n => (
                                <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="label-tag text-body text-[0.6rem] block mb-2">Room Preference</label>
                            <select
                              name="room"
                              value={formData.room}
                              onChange={handleChange}
                              className="input-luxury"
                            >
                              <option value="">No preference</option>
                              <option value="deluxe-double">Deluxe Double Room</option>
                              <option value="deluxe-twin">Deluxe Twin Room</option>
                              <option value="family-suite">Family Suite</option>
                            </select>
                          </div>
                        </div>

                        {/* Special requests */}
                        <div>
                          <label className="label-tag text-body text-[0.6rem] block mb-2">Special Requests</label>
                          <textarea
                            name="requests"
                            value={formData.requests}
                            onChange={handleChange}
                            placeholder="Dietary needs, anniversary celebration, early check-in, airport transfer, trekking arrangements..."
                            rows={4}
                            className="input-luxury resize-none"
                          />
                        </div>

                        {/* Disclaimer */}
                        <p className="text-[0.7rem] text-stone leading-relaxed">
                          By submitting, you consent to Hotel Eco Tree Pokhara contacting you regarding your reservation.
                          We will never share your information with third parties.
                        </p>

                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-gold w-full justify-center py-4 text-sm"
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Send Reservation Request <Send size={14} />
                            </span>
                          )}
                        </button>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={28} className="text-white" />
                      </div>
                      <h3 className="font-serif-display text-3xl text-charcoal font-light mb-3">
                        Reservation Received
                      </h3>
                      <p className="text-body font-light leading-relaxed mb-2">
                        Thank you, {formData.firstName}. Your enquiry has been received.
                      </p>
                      <p className="text-body font-light leading-relaxed mb-8">
                        Our team will contact you at <strong>{formData.email}</strong> within 2–4 hours
                        to confirm your reservation and discuss any special arrangements.
                      </p>
                      <div className="bg-ivory p-6 text-left mb-8">
                        <div className="text-xs font-semibold text-forest tracking-widest uppercase mb-4">Your Enquiry Summary</div>
                        <div className="space-y-2 text-sm text-body">
                          <div className="flex justify-between">
                            <span className="text-stone">Dates</span>
                            <span>{formData.checkin} → {formData.checkout}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone">Guests</span>
                            <span>{formData.guests}</span>
                          </div>
                          {formData.room && (
                            <div className="flex justify-between">
                              <span className="text-stone">Room</span>
                              <span className="capitalize">{formData.room.replace('-', ' ')}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-3 justify-center flex-wrap">
                        <button onClick={() => setSubmitted(false)} className="btn-luxury text-xs">
                          New Enquiry
                        </button>
                        <a href="tel:+97761540000" className="btn-luxury-outline text-xs" style={{ color: '#2D5016', borderColor: '#2D5016' }}>
                          Call Directly
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[280px] sm:h-[350px] lg:h-[500px] bg-ivory-dark">
        <iframe
          title="Hotel Eco Tree Pokhara - Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.8!2d83.9570!3d28.2110!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995952ec3bafcf9%3A0x4e3bb36d0dbdc79c!2sLakeside%2C%20Pokhara!5e0!3m2!1sen!2snp!4v1690000000000!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Why direct */}
      <section className="section-pad-sm bg-forest">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <FadeIn>
              <div>
                <div className="label-tag text-stone mb-3">Book Direct Benefits</div>
                <h2 className="font-serif-display text-3xl text-ivory font-light">
                  Best Rate. Always.
                </h2>
              </div>
            </FadeIn>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Best Rate', desc: 'Guaranteed lowest price' },
                { title: 'Free Breakfast', desc: 'Included with every booking' },
                { title: 'Flexible Terms', desc: 'Free cancellation' },
                { title: 'Personal Touch', desc: 'Dedicated pre-arrival service' },
              ].map((b, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-[rgba(184,151,58,0.2)] flex items-center justify-center mx-auto mb-3">
                      <ArrowRight size={14} className="text-gold" />
                    </div>
                    <div className="font-serif-display text-lg text-ivory font-medium mb-1">{b.title}</div>
                    <div className="text-[0.7rem] text-stone">{b.desc}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
