import DoctorCard from "./../../components/Doctors/DoctorCard";
import { doctors } from "./../../assets/data/doctors";
import Testimonial from "./../../components/Testimonial/Testimonial";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFecthData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import {useEffect, useState } from "react";
//import DoctorList from "../../components/Doctors/DoctorList";

const Doctors = () => {

  const [query, setQuery] = useState('');
  const[debounceQuery, setDebounceQuery] = useState(" ");
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  const handleSearch =()=>{
    setQuery(query.trim())
    console.log("handle search");
  }
  
  useEffect(() =>{
    
    const timeout = setTimeout(()=>{
      setDebounceQuery(query)
    },700);
    return ()=> clearTimeout(timeout);
  },[query]);
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Tìm Kiếm Bác Sĩ</h2>
          <div
            className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md
          flex items-center justify-between"
          >
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none
          cursor-pointer placeholder:text-textColor"
              placeholder="Tìm kiếm tên hoặc chuyên khoa"
              value={query}
              onChange={e=> setQuery(e.target.value)}
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Phản hồi của bệnh nhân</h2>
            <p className="text__para text-center">
              Sức khỏe của bạn, sứ mệnh của chúng tôi.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;