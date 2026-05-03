import Image from "next/image";
import appointmentArt from "@/assests/derived/appointment.png";

export function AppointmentForm() {
  return (
    <section className="section appointment-section" id="appointment">
      <div className="container appointment-card">
        <aside>
          <h2>Book an Appointment</h2>
          <p>
            Fill in your details and we&apos;ll get back to you to confirm your
            appointment.
          </p>
          <Image src={appointmentArt} alt="" />
        </aside>
        <form className="appointment-form">
          <label>
            Full Name
            <input placeholder="Enter your name" />
          </label>
          <label>
            Phone Number
            <input placeholder="Enter your phone number" />
          </label>
          <label>
            Department
            <select defaultValue="">
              <option value="" disabled>
                Select Department
              </option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
            </select>
          </label>
          <label>
            Doctor (Optional)
            <select defaultValue="">
              <option value="" disabled>
                Select Doctor
              </option>
              <option>Dr. Rajesh Kumar</option>
              <option>Dr. Priya Sharma</option>
            </select>
          </label>
          <label>
            Preferred Date
            <input type="text" placeholder="Select Date" />
          </label>
          <label>
            Preferred Time
            <input type="text" placeholder="Select Time" />
          </label>
          <label className="message-field">
            Message (Optional)
            <textarea placeholder="Write your message..." rows={3} />
          </label>
          <button className="btn btn-primary form-button" type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
