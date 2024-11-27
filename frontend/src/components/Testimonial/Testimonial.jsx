import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-lg">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Phuoc Phan
                </h4>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            "Dịch vụ chăm sóc sức khỏe tại bệnh viện này rất tốt, bác sĩ luôn cập nhật tình trạng bệnh của tôi và cho tôi lời khuyên đúng đắn."

            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-lg">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Hà Anh Tuấn
                </h4>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Tôi rất ấn tượng với dịch vụ chăm sóc sức khỏe tại bệnh viện, các bác sĩ không chỉ giỏi chuyên môn mà còn rất nhiệt tình và chu đáo."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-lg">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Minh Danh
                </h4>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Bệnh viện có đội ngũ bác sĩ giàu kinh nghiệm, họ không chỉ điều trị tốt mà còn rất chu đáo trong việc theo dõi và hỗ trợ bệnh nhân."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-lg">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                 Tuấn Ngọc
                </h4>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Tôi rất hài lòng khi sử dụng dịch vụ ở đây. Bác sĩ Nhật Tân chăm sóc rất tận tình và chu đáo."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
