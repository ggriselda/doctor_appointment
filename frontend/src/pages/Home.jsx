import React from "react";
import About from "../components/About/About";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
const Home = () => {
  return (
    <>
      {/*========hero section=====*/}

      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ==================hero content================= */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Sức khỏe của bạn, sứ mệnh của chúng tôi.
                </h1>
                <p className="text_para mb-4">
                  Hãy đến với chúng tôi để trải nghiệm dịch vụ chăm sóc sức khỏe
                  toàn diện, với đội ngũ bác sĩ chuyên nghiệp và trang thiết bị
                  hiện đại. Chúng tôi cam kết mang lại sự an tâm, điều trị hiệu
                  quả và phục hồi nhanh chóng, giúp bạn duy trì sức khỏe tối ưu
                  và tận hưởng cuộc sống trọn vẹn.
                </p>
                <Link to="/doctors" className="btn mt-4">
                  Đặt lịch ngay
                </Link>
              </div>
              {/* ================hero counter======================= */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Kinh nghiệm</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Cơ sở</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Bệnh nhân hài lòng</p>
                </div>
              </div>
            </div>
            {/* ==================hero content================= */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full rounded-xl" src={heroImg01} alt=""  />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full rounded-xl mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*========hero section end=====*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Cung cấp dịch vụ y tế hiện đại nhất
            </h2>
            <p className="text_para text-center">
              Hãy đến với chúng tôi, bạn có thể hoàn toàn yên tâm về sức khỏe
              của mình. Chúng tôi cung cấp dịch vụ tân tiến và hiện đại nhất,
              giúp quý khách phục hồi nhanh chóng và duy trì sức khỏe tốt nhất
              với đội ngũ bác sĩ chuyên nghiệp và tận tâm
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Tìm kiếm bác sĩ
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center min-h-[120px]">
                  Hãy đến với chúng tôi để tìm kiếm bác sĩ chuyên khoa hàng đầu,
                  luôn sẵn sàng chăm sóc và đồng hành cùng bạn trên hành trình
                  bảo vệ sức khỏe."
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto 
                            flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className=" group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Địa điểm
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center min-h-[120px]">
                  Chúng tôi có mặt ở rất nhiều nơi với nhiều cơ sở khác nhau,
                  mang đến dịch vụ chất lượng cao và sự tiện lợi gần bạn, giúp
                  bạn dễ dàng tiếp cận chăm sóc sức khỏe mọi lúc, mọi nơi.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto 
                            flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className=" group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Đặt lịch hẹn
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center min-h-[120px]">
                  Hãy đặt lịch ngay để trải nghiệm dịch vụ tuyệt vời của chúng
                  tôi.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto 
                            flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className=" group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      {/*========Services section =====*/}
      <section>
        <div class="container">
          <div class="xl:w-[470px] mx-auto">
            <h2 class="heading text-center">Dịch vụ khám chữa bệnh</h2>
            <p class="text_para text-center"></p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/*========Services section end=====*/}

      {/*========Feature section =====*/}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Tư vấn trực tuyến
                <br /> mọi lúc.
              </h2>
              <ul className="pl-4">
                <li className="text_para">1. Đặt lịch hẹn trực tiếp.</li>
                <li className="text_para">
                  2. Tìm bác sĩ của bạn tại đây và liên hệ với văn phòng của họ.
                </li>
                <li className="text_para">
                  3. Sử dụng công cụ đặt lịch trực tuyến để chọn thời gian hẹn.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Tìm hiểu thêm</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4 rounded-xl" alt="" />

              <div
                className="w-[150px] lg:w-[248px] bg-white absolute bottom-[-50px] left-0 md:bottom-[-100px] md:left-5 z-20 p-2 pb-3 
                        lg:pt-4 lg:pb-[26px] rounded-[10px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Wed, 20
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>

                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] 
                            leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full"
                >
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Nhat Tan
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*========Feature section end =====*/}

      {/*======== Great Doctor  =====*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Đội ngũ bác sĩ</h2>
            <p className="text_para text-center">
              Với kinh nghiệm lâu năm và chuyên môn vững vàng, đội ngũ bác sĩ
              của chúng tôi cam kết mang đến cho bạn những dịch vụ y tế chất
              lượng nhất.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/*========Great Doctor end =====*/}

      {/*========faq section =====*/}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img className="rounded-xl" src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Các câu hỏi thường gặp</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/*========faq sectionr end =====*/}

      {/*========textimonial =====*/}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Phản hồi của bệnh nhân</h2>
            <p className="text_para text-center"></p>
          </div>
          <Testimonial />
        </div>
      </section>

      {/*========textimonial =====*/}
    </>
  );
};

export default Home;
