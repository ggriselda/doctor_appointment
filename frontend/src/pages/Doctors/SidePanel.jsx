import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import CSS của react-calendar
import { BASE_URL, token } from "./../../config"; // Đảm bảo rằng các biến này được nhập đúng cách

const SidePanel = ({ doctorId, ticketPrice }) => {
  const [selectedDate, setSelectedDate] = useState(null); // State để lưu ngày đã chọn
  const [selectedTime, setSelectedTime] = useState({ start: null, end: null }); // State để lưu thời gian bắt đầu và kết thúc
  const [appointments, setAppointments] = useState([]); // State để lưu dữ liệu lịch đã đặt

  // Giả sử đây là danh sách các khung giờ bác sĩ có thể có
  const availableTimes = [
    { start: "08:00 AM", end: "09:00 AM" },
    { start: "09:00 AM", end: "10:00 AM" },
    { start: "10:00 AM", end: "11:00 AM" },
    { start: "11:00 AM", end: "12:00 PM" },
    { start: "01:00 PM", end: "02:00 PM" },
    { start: "02:00 PM", end: "03:00 PM" },
    { start: "03:00 PM", end: "04:00 PM" },
    { start: "04:00 PM", end: "05:00 PM" },
  ];

  useEffect(() => {
    // Hàm để lấy dữ liệu lịch đã đặt của bác sĩ
    const fetchAppointments = async () => {
      try {
        const res = await fetch(`${BASE_URL}/bookings/appointments/${doctorId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          console.log(data.data);
          setAppointments(data.data);
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        //toast.error(err.message);
      }
    };

    fetchAppointments();
  }, [doctorId]);

  const bookingHandler = async () => {
    if (!selectedDate || !selectedTime.start || !selectedTime.end) {
      toast.error("Please select a date and time.");
      return;
    }

    try {
      const bookingStartTime = new Date(`${selectedDate.toISOString().split('T')[0]}T${selectedTime.start.split(' ')[0]}:00`);
      const bookingEndTime = new Date(`${selectedDate.toISOString().split('T')[0]}T${selectedTime.end.split(' ')[0]}:00`);

      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ bookingStartTime, bookingEndTime }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + " Please try again");
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Lọc các khoảng thời gian đã được đặt
  const filterAvailableTimes = () => {
    if (!selectedDate) return availableTimes;

    const selectedDateString = selectedDate.toISOString().split('T')[0];

    return availableTimes.filter((time) => {
      const startTime = new Date(`${selectedDateString}T${time.start.split(' ')[0]}:00`);
      const endTime = new Date(`${selectedDateString}T${time.end.split(' ')[0]}:00`);

      return !appointments.some((appointment) => {
        const appointmentStart = new Date(appointment.bookingStartTime);
        const appointmentEnd = new Date(appointment.bookingEndTime);

        return (
          (startTime >= appointmentStart && startTime < appointmentEnd) ||
          (endTime > appointmentStart && endTime <= appointmentEnd)
        );
      });
    });
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Giá</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} VND
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Thời Gian Làm Việc:
        </p>
        <ul className="mt-3">
          {/* Hiển thị giờ làm việc ở đây */}
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Thứ hai - Thứ sáu
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              08:00 AM - 05:00 PM
            </p>
          </li>
        </ul>
      </div>

      {/* Thêm phần chọn ngày với Calendar */}
      <div className="mt-8">
        <p className="text-sm font-semibold text-headingColor">Chọn Ngày:</p>
        <Calendar
          onChange={setSelectedDate} // Cập nhật ngày đã chọn
          value={selectedDate} // Hiển thị ngày đã chọn
          className="mt-3 w-full border p-3 rounded-lg" // Style cho Calendar
        />
      </div>

      {/* Hiển thị các khung giờ khi chọn ngày */}
      {selectedDate && (
        <div className="mt-8">
          <p className="text-sm font-semibold text-headingColor">Chọn Giờ:</p>
          <ul className="mt-3">
            {filterAvailableTimes().map((time, index) => (
              <li
                key={index}
                onClick={() => setSelectedTime(time)} // Lưu thời gian bắt đầu và kết thúc khi chọn
                className={`cursor-pointer py-2 px-4 rounded-md mb-2 text-sm font-semibold 
                ${selectedTime.start === time.start ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {time.start} - {time.end}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={bookingHandler}
        className="btn px-2 w-full rounded-md mt-5 bg-blue-600 text-white hover:bg-blue-700"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;