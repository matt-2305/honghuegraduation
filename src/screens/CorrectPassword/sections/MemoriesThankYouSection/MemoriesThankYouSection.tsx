import { getGuestByPassword } from "../../../../db";

const memoryPhotos = [
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/1@2x.png",
    alt: "Graduation memory 1",
    top: "top-48",
    left: "left-[69px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/3@2x.png",
    alt: "Graduation memory 3",
    top: "top-48",
    left: "left-[519px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/2@2x.png",
    alt: "Graduation memory 2",
    top: "top-48",
    left: "left-[294px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/4@2x.png",
    alt: "Graduation memory 4",
    top: "top-48",
    left: "left-[744px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/5@2x.png",
    alt: "Graduation memory 5",
    top: "top-48",
    left: "left-[969px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/8@2x.png",
    alt: "Graduation memory 8",
    top: "top-[415px]",
    left: "left-[294px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/7@2x.png",
    alt: "Graduation memory 7",
    top: "top-[415px]",
    left: "left-[69px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/9@2x.png",
    alt: "Graduation memory 9",
    top: "top-[415px]",
    left: "left-[519px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/10@2x.png",
    alt: "Graduation memory 10",
    top: "top-[415px]",
    left: "left-[744px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/11@2x.png",
    alt: "Graduation memory 11",
    top: "top-[415px]",
    left: "left-[969px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/12@2x.png",
    alt: "Graduation memory 12",
    top: "top-[415px]",
    left: "left-[1194px]",
  },
  {
    src: "https://c.animaapp.com/VJ2XT9Yg/img/6@2x.png",
    alt: "Graduation memory 6",
    top: "top-48",
    left: "left-[1194px]",
  },
];

export const MemoriesThankYouSection = (): JSX.Element => {
  return (
    <section
      className="absolute top-[5842px] left-[-21px] w-[1490px] h-[2564px]"
      aria-labelledby="graduation-memories-heading"
    >
      <img
        className="absolute top-0 left-[21px] w-[1440px] h-[1434px] aspect-[1.78]"
        alt="Graduation memories collage"
        src="https://c.animaapp.com/VJ2XT9Yg/img/image-3.png"
      />
      <h2
        id="graduation-memories-heading"
        className="absolute top-[93px] left-[calc(50.00%_-_237px)] w-[467px] [font-family:'Noto_Sans',Helvetica] font-bold text-[#435841] text-[50px] text-center tracking-[0] leading-[normal]"
      >
        Hall Of Memories
      </h2>
      <div aria-label="Graduation memory photo gallery">
        {memoryPhotos.map((photo) => (
          <img
            key={photo.src}
            className={`absolute ${photo.top} ${photo.left} w-[212px] h-[212px] aspect-[1]`}
            alt={photo.alt}
            src={photo.src}
          />
        ))}
      </div>
      <h3 className="absolute top-[750px] left-[217px] w-[1048px] [font-family:'Noto_Sans',Helvetica] font-bold text-[#435841] text-[100px] text-center tracking-[0] leading-[normal]">
        THANK YOUUUU
      </h3>
      <p className="absolute top-[908px] left-[124px] w-[1213px] [font-family:'Noto_Sans',Helvetica] font-bold text-[#435841] text-3xl text-center tracking-[0] leading-[normal]">
        {(() => {
          const pwd = typeof window !== "undefined" ? localStorage.getItem("guestPassword") : null;
          const name = pwd ? (getGuestByPassword(pwd)?.name) : null;
          const displayName = name || "bạn";
          return (
            <>
              Cảm ơn {displayName} đã dành thời gian đến chung vui cùng {(() => {
                const pwd = typeof window !== "undefined" ? localStorage.getItem("guestPassword") : null;
                const isSpecial = pwd && ["daddyhandsome", "aphucyendethuong", "tammy.asst", "mipper.asst", "chi4nhi"].includes(pwd);
                return isSpecial ? "em" : "tớ";
              })()} trong ngày đặc biệt
              này. Sự hiện diện của {displayName} là một phần đáng nhớ trong hành trình tốt
              nghiệp của {(() => {
                const pwd = typeof window !== "undefined" ? localStorage.getItem("guestPassword") : null;
                const isSpecial = pwd && ["daddyhandsome", "aphucyendethuong", "tammy.asst", "mipper.asst", "chi4nhi"].includes(pwd);
                return isSpecial ? "em" : "tớ";
              })()}
            </>
          );
        })()}
      </p>
      <img
        className="absolute top-[990px] left-[21px] w-[1440px] h-[444px] aspect-[2.82] object-cover"
        alt="Graduation invitation"
        src="https://c.animaapp.com/VJ2XT9Yg/img/graduation-invitation--7--1.png"
      />
    </section>
  );
};