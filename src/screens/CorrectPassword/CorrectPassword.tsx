import { EventDetailsSection } from "./sections/EventDetailsSection/EventDetailsSection";
import { GraduationInvitationSection } from "./sections/GraduationInvitationSection/GraduationInvitationSection";
import { GuestbookMessageSection } from "./sections/GuestbookMessageSection/GuestbookMessageSection";
import { MemoriesThankYouSection } from "./sections/MemoriesThankYouSection/MemoriesThankYouSection";
import { VenueLocationSection } from "./sections/VenueLocationSection/VenueLocationSection";

export const CorrectPassword = (): JSX.Element => {
  return (
    <main
      className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[7276px] relative"
      data-model-id="17:9"
    >
      <MemoriesThankYouSection />
      <GuestbookMessageSection />
      <EventDetailsSection />
      <VenueLocationSection />
      <GraduationInvitationSection />
      <header
        className="absolute top-[-13px] left-[-250px] w-[1943px] h-[1037px]"
        aria-label="Graduation invitation"
      >
        <img
          className="absolute top-[13px] left-[250px] w-[1440px] h-[1024px] aspect-[1.77] object-cover"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/ksaCiZyU/img/image-7.png"
        />
        <img
          className="absolute top-[171px] left-[354px] w-[1233px] h-[231px]"
          alt="Graduation"
          src="https://c.animaapp.com/ksaCiZyU/img/graduation.svg"
        />
        <h1 className="absolute top-[303px] left-[755px] w-[431px] [font-family:'Luxurious_Script',Helvetica] font-normal text-white text-[80px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Invitation
        </h1>
      </header>
    </main>
  );
};