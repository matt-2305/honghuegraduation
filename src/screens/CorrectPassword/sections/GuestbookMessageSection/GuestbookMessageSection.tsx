import { FormEvent, useEffect, useState } from "react";
import { addMessage, getGuestByPassword } from "../../../../db";

export const GuestbookMessageSection = (): JSX.Element => {
  const [message, setMessage] = useState("");
  const [lineTop, setLineTop] = useState(98);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const pwd = localStorage.getItem("guestPassword");
    if (pwd) {
      const guest = getGuestByPassword(pwd);
      if (guest && guest.message) {
        setSubmitted(true);
      }
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pwd = localStorage.getItem("guestPassword");
    if (message.trim() && pwd) {
      addMessage(pwd, message.trim());
      setSubmitted(true);
      setMessage("");
    }
  };

  return (
    <section
      className="absolute top-[5032px] left-[-21px] h-[820px] w-[1461px]"
      aria-labelledby="guestbook-heading"
    >
      <img
        className="absolute top-0 left-[21px] h-[810px] w-[1440px] aspect-[1.78] object-cover"
        alt="Khung cảnh buổi lễ tốt nghiệp"
        src="https://c.animaapp.com/ksaCiZyU/img/image-4.png"
      />
      <img
        className="absolute top-[311px] left-[21px] h-[509px] w-[482px] aspect-[0.99] object-cover"
        alt="Hình ảnh kỷ niệm lễ tốt nghiệp"
        src="https://c.animaapp.com/ksaCiZyU/img/image-5.png"
      />
      <img
        className="absolute top-14 left-[850px] h-[369px] w-[234px] aspect-[0.63] object-cover"
        alt="Hình ảnh Tân cử nhân Nguyễn Thị Hồng Huế"
        src="https://c.animaapp.com/ksaCiZyU/img/image-6@2x.png"
      />
      <form
        className={"absolute top-[311px] left-[559px] flex " + (submitted ? "h-[200px] " : "h-[444px] ") + "w-[816px] rounded-[15px] border-2 border-solid border-[#a09a9ac7] bg-[#f7fff2]"}
        onSubmit={handleSubmit}
      >
        <div className={"ml-[23px] mt-6 flex " + (submitted ? "h-[160px] " : "h-[399px] ") + "w-[769px] flex-col gap-7"}>
          <div className="relative h-[152px] w-[773px]">
            <div className="absolute top-0 left-0 h-[152px] w-[769px] rounded-[14px] border-2 border-solid border-[#dadada] bg-white" />
            <div className="absolute top-0 left-0 h-[13px] w-[769px] rounded-t-[15px] bg-[#435841]" />
            <h2
              id="guestbook-heading"
              className="absolute top-[43px] left-[31px] w-[652px] [font-family:'Roboto',Helvetica] text-[28px] font-bold leading-[normal] tracking-[0] text-black"
            >
              Lời nhắn cho Tân cử nhân Nguyễn Thị Hồng Huế
            </h2>
            <p className="absolute top-[90px] left-[31px] whitespace-nowrap [font-family:'Roboto',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-black">
              {(() => {
                const pwd = typeof window !== "undefined" ? localStorage.getItem("guestPassword") : null;
                const isSpecial = pwd && ["daddyhandsome", "aphucyendethuong", "tammy.asst", "mipper.asst", "chi4nhi"].includes(pwd);
                const pronoun = isSpecial ? "em" : "mình";
                const name = pwd ? (getGuestByPassword(pwd)?.name || "bạn") : "bạn";
                return submitted
                  ? "Cảm ơn vì những lời nhắn đầy ý nghĩa và ngọt ngào từ " + name + " 🫶"
                  : name + " có muốn nói gì với " + pronoun + " trước ngày tốt nghiệp hemmm";
              })()}
            </p>
          </div>
          {!submitted && (
            <>
              <div className="relative h-[152px] w-[773px]">
                <div className="absolute top-0 left-0 h-[152px] w-[769px] rounded-[14px] border-2 border-solid border-[#dadada] bg-white" />
                <label
                  htmlFor="guestbook-message"
                  className="absolute top-[26px] left-[31px] whitespace-nowrap [font-family:'Roboto',Helvetica] text-lg font-normal leading-[normal] tracking-[0] text-black"
                >
                  {(() => {
                    const pwd = typeof window !== "undefined" ? localStorage.getItem("guestPassword") : null;
                    const isSpecial = pwd && ["daddyhandsome", "aphucyendethuong", "tammy.asst", "mipper.asst", "chi4nhi"].includes(pwd);
                    return "🧚‍♀️🧚‍♀️🧚‍♀️🧚‍♀️🧚‍♀️🧚‍♀️🧚‍♀️🧚‍♀️";
                  })()}
                </label>
                <textarea
                  id="guestbook-message"
                  name="guestbook-message"
                  value={message}
                  onChange={(event) => {
                    const el = event.target;
                    setMessage(el.value);
                    setSubmitted(false);
                    // Auto-grow like Google Forms: expand to content, max ~3 lines (72px)
                    el.style.height = "auto";
                    const lineHeight = 20; // approx px per line
                    const maxHeight = 72;
                    const scrollH = el.scrollHeight;
                    const newHeight = Math.min(scrollH, maxHeight);
                    el.style.height = newHeight + "px";
                    // Move gray line to bottom of expanded text
                    setLineTop(71 + newHeight + 2);
                    if (scrollH > maxHeight) {
                      el.style.overflowY = "auto";
                    } else {
                      el.style.overflowY = "hidden";
                    }
                  }}
                  style={{ height: "29px" }}
                  placeholder={"Câu trả lời của " + (typeof window !== "undefined" && localStorage.getItem("guestPassword") ? (getGuestByPassword(localStorage.getItem("guestPassword") || "")?.name || "bạn") : "bạn")}
                  rows={1}
                  className="absolute top-[71px] left-[26px] w-[711px] resize-none overflow-hidden px-[5px] py-0 [font-family:'Roboto',Helvetica] text-base font-normal leading-[20px] tracking-[0] text-black placeholder:text-[#757575]"
                  aria-describedby="guestbook-message-status"
                />
                <img
                  className="pointer-events-none absolute left-[31px] h-px w-[701px] object-cover"
                  alt=""
                  style={{ top: lineTop + "px" }}
                  src="https://c.animaapp.com/ksaCiZyU/img/line-1.svg"
                />
              </div>
              <button
                type="submit"
                className="relative h-[39px] w-[104px] bg-[#435841] [font-family:'Roboto',Helvetica] text-lg font-bold leading-[normal] tracking-[0] text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#435841]"
              >
                Gửi
              </button>
            </>
          )}
        </div>
        <p id="guestbook-message-status" className="sr-only" aria-live="polite">
          {submitted ? "Lời nhắn của " + (typeof window !== "undefined" && localStorage.getItem("guestPassword") ? (getGuestByPassword(localStorage.getItem("guestPassword") || "")?.name || "bạn") : "bạn") + " đã được gửi." : ""}
        </p>
      </form>
    </section>
  );
};
