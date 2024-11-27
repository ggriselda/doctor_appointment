import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* About image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img className="rounded-xl" src={aboutImg} alt="About" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="About Card" />
            </div>
          </div>

          {/* About content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Tự hào rằng chúng tôi có những bác sĩ hàng đầu</h2>
            <p className="text__para">
              Trong 10 năm liên tiếp, chúng tôi luôn được công nhận là một trong những bệnh viện tốt nhất
            </p>
            <p className="text__para mt-[30px]">
            Điều tốt nhất mà chúng tôi luôn nỗ lực đạt được mỗi ngày là chăm sóc bệnh nhân, không phải nhìn lại những gì đã làm được mà hướng tới những gì chúng tôi có thể làm trong ngày mai. Mang đến điều tốt nhất.
            </p>
            <Link to="/">
              <button className="btn">Đọc Thêm</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
