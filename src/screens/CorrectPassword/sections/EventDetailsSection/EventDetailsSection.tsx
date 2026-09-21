import { getGuestByPassword } from "../../../../db";

const eventDetails = {
  invitation: "Thân mời",
  host: "Hoàng Hiệp",
  description: "Tham dự buổi lễ tốt nghiệp của Hồng Huế",
  date: "Chủ nhật, ngày 27/9/2026",
  timeLabel: "Thời gian",
  time: "10:30 - 11:00 AM",
  contact: "0865697783",
};

export const EventDetailsSection = (): JSX.Element => {
  return (
    <section
      className="absolute top-[3175px] left-0 w-[1448px] h-[1366px]"
      aria-labelledby="event-details-title"
    >
      <img
        className="absolute top-0 left-0 w-[1440px] h-[810px] aspect-[1.78]"
        alt="Graduation"
        src="https://c.animaapp.com/ksaCiZyU/img/graduation-invitation-1.png"
      />
      <header>
        <p className="absolute top-[70px] left-[516px] w-[431px] [font-family:'Beau_Rivage',Helvetica] font-normal text-white text-[45px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          {eventDetails.invitation}
        </p>
        <h2
          id="event-details-title"
          className="absolute top-[120px] left-[479px] w-[508px] [font-family:'Anton',Helvetica] font-normal text-white text-6xl text-center tracking-[0] leading-[normal]"
        >
          {(() => {
            const pwd = typeof window !== "undefined" ? localStorage.getItem("guestPassword") : null;
            const guestName = pwd ? (getGuestByPassword(pwd)?.name) : null;
            return guestName || eventDetails.host;
          })()}
        </h2>
        <p className="absolute top-[198px] left-[163px] w-[1136px] [font-family:'Beau_Rivage',Helvetica] font-normal text-white text-[45px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          {eventDetails.description}
        </p>
      </header>
      <dl className="absolute top-[553px] left-[497px] w-[473px] h-[143px]">
        <div className="absolute top-0 left-0 w-[467px] [font-family:'Anton',Helvetica] font-normal text-[#d7d0c5] text-[40px] text-center tracking-[0] leading-[normal]">
          <dd>{eventDetails.date}</dd>
        </div>
        <div className="absolute top-[58px] left-[81px] w-[362px] [font-family:'Anton',Helvetica] font-normal text-white text-[55px] text-right tracking-[0] leading-[normal]">
          <dd>{eventDetails.time}</dd>
        </div>
        <div className="absolute top-[63px] left-7 w-[68px] [font-family:'Anton',Helvetica] font-normal text-[#d7d0c5] text-3xl tracking-[0] leading-[35px]">
          <dt>{eventDetails.timeLabel}</dt>
        </div>
      </dl>
      <p className="absolute top-[1318px] left-[961px] [font-family:'Noto_Sans',Helvetica] font-normal text-[#435841] text-[35px] text-center tracking-[0] leading-[normal]">
        <span className="font-bold">Liên hệ</span>
        <span className="[font-family:'Noto_Sans',Helvetica] font-normal text-[#435841] text-[35px] tracking-[0]">
          :{" "}
          <a
            href={`tel:${eventDetails.contact}`}
            aria-label={`Liên hệ ${eventDetails.contact}`}
          >
            {eventDetails.contact}
          </a>
        </span>
      </p>
    </section>
  );
};