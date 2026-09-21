const mapUrl = "https://maps.app.goo.gl/hPkvPnrVJwUJD7z97";
import { getGuestByPassword } from "../../../../db";

const detailIconPositions = [
  { top: "top-[226px]", label: "Địa điểm gặp" },
  { top: "top-[399px]", label: "Thông tin gửi xe" },
  { top: "top-[515px]", label: "Thông tin liên hệ" },
];

export const VenueLocationSection = (): JSX.Element => {
  return (
    <section
      className="absolute top-[3952px] left-[-324px] w-[1934px] h-[1080px]"
      aria-labelledby="venue-location-heading"
    >
      <img
        className="absolute top-0 left-[324px] w-[1440px] h-[1080px] aspect-[1.78] object-cover"
        alt=""
        aria-hidden="true"
        src="https://c.animaapp.com/ksaCiZyU/img/image-3-1.png"
      />
      <h2
        id="venue-location-heading"
        className="absolute top-[259px] left-[1087px] w-[467px] [font-family:'Noto_Sans',Helvetica] font-bold text-[#435841] text-3xl text-center tracking-[0] leading-[normal]"
      >
        Địa điểm gặp
      </h2>
      <p className="absolute top-[750px] left-[370px] w-[467px] [font-family:'Noto_Sans',Helvetica] font-bold text-[#435841] text-3xl text-center tracking-[0] leading-[normal]">
        Hẹn gặp {(typeof window !== "undefined" && localStorage.getItem("guestPassword")) ? (getGuestByPassword(localStorage.getItem("guestPassword") || "")?.name || "bạn") : "bạn"} ở đây nhaaaaa!
      </p>
      <a
        href={mapUrl}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Mở vị trí Công viên Lê Văn Tám trên Google Maps"
      >
        <p className="absolute top-80 left-[1225px] w-[467px] [font-family:'Noto_Sans',Helvetica] font-bold text-[#435841] text-[40px] text-center tracking-[0] leading-[normal]">
          Công viên Lê Văn Tám
        </p>
      </a>
      <p className="absolute top-[477px] left-[1218px] w-[467px] [font-family:'Noto_Sans',Helvetica] font-normal italic text-[#435841] text-[15px] text-center tracking-[0] leading-[normal]">
        *Sau khi gửi xe {(() => {
          const pwd = typeof window !== "undefined" ? localStorage.getItem("guestPassword") : null;
          const isSpecial = pwd && ["daddyhandsome", "aphucyendethuong", "tammy.asst", "mipper.asst", "chi4nhi"].includes(pwd);
          const pronoun = isSpecial ? "em" : "mình";
          const name = pwd ? (getGuestByPassword(pwd)?.name || "bạn") : "bạn";
          return pronoun + " sẽ đón " + name + " tại cổng nhaaa";
        })()}
      </p>
      <p className="absolute top-[430px] left-[1138px] w-[659px] [font-family:'Noto_Sans',Helvetica] font-normal text-[#435841] text-3xl text-center tracking-[0] leading-[normal]">
        <span className="font-bold">Gửi xe</span>
        <span className="[font-family:'Noto_Sans',Helvetica] font-normal text-[#435841] text-3xl tracking-[0]">
          : Công viên có chỗ gửi xe nạ
        </span>
      </p>
      <p className="absolute top-[543px] left-[1129px] w-[509px] [font-family:'Noto_Sans',Helvetica] font-normal text-[#435841] text-3xl text-center tracking-[0] leading-[normal]">
        <span className="font-bold">Liên hệ</span>
        <span className="[font-family:'Noto_Sans',Helvetica] font-normal text-[#435841] text-3xl tracking-[0]">
          : 0865697783
        </span>
      </p>
      <a
        className="absolute top-[377px] left-[1185px] w-[517px] [font-family:'Noto_Sans',Helvetica] font-normal italic text-[#435841] text-[15px] text-center tracking-[0] leading-[normal] underline"
        href={mapUrl}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Mở liên kết Google Maps trong cửa sổ mới"
      >
        https://maps.app.goo.gl/hPkvPnrVJwUJD7z97
      </a>
      <img
        className="absolute top-[226px] left-[375px] w-[784px] h-[529px] aspect-[1.48] object-cover"
        alt="Bản đồ địa điểm gặp tại Công viên Lê Văn Tám"
        src="https://c.animaapp.com/ksaCiZyU/img/graduation-invitation--5--1.png"
      />
      <img
        className="absolute top-[649px] left-[1205px] w-[333px] h-[381px] aspect-[0.75] object-cover"
        alt="Trang trí thiệp tốt nghiệp"
        src="https://c.animaapp.com/ksaCiZyU/img/graduation-invitation--2--1@2x.png"
      />
      <img
        className="absolute top-[644px] left-[1464px] w-[300px] h-[436px] aspect-[0.71]"
        alt="Trang trí thiệp tốt nghiệp"
        src="https://c.animaapp.com/ksaCiZyU/img/graduation-invitation--3--1@2x.png"
      />
      {detailIconPositions.map((icon) => (
        <img
          key={icon.top}
          className={`${icon.top} absolute left-[1130px] w-[75px] h-[75px] aspect-[1] object-cover`}
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/ksaCiZyU/img/graduation-invitation--4--3@2x.png"
        />
      ))}

      <img
        className="absolute top-[527px] left-[666px] w-[30px] h-[35px]"
        alt=""
        aria-hidden="true"
        src="https://c.animaapp.com/ksaCiZyU/img/map-pin@2x.png"
      />
      <img
        className="absolute top-[556px] left-[499px] w-[150px] h-[151px]"
        alt=""
        aria-hidden="true"
        src="https://c.animaapp.com/ksaCiZyU/img/vector-235.svg"
      />
    </section>
  );
};
