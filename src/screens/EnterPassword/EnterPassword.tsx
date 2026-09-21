import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyGuest } from "../../db";

export const EnterPassword = (): JSX.Element => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const guest = verifyGuest(name);
    if (guest) {
      localStorage.setItem("guestName", guest.name);
      localStorage.setItem("guestPassword", guest.password);
      navigate("/invitation");
    } else {
      setError("Mật khẩu hem đúng gòi, thử lại đi nà 😋");
    }
  };

  return (
    <main
      className="relative flex h-[1024px] min-h-screen min-w-[1024px] flex-col items-start gap-2.5 overflow-hidden bg-white"
      data-model-id="45:147"
    >
      <img
        className="relative h-[1024px] w-[1440px] shrink-0 object-cover"
        alt=""
        aria-hidden="true"
        src="https://c.animaapp.com/8UGTXhe5/img/image-3.png"
      />
      <form
        className="absolute left-[380px] top-[354px] h-[158px] w-[679px]"
        onSubmit={handleSubmit}
      >
        <label
          className="flex h-[79px] w-[679px] items-center justify-center [font-family:'Noto_Sans',Helvetica] text-center text-[35px] font-normal italic leading-[normal] tracking-[0] text-[#535353]"
          htmlFor="name"
        >
        </label>
        <div className="flex h-[79px] w-[679px] items-center justify-center rounded-[15px] border-[3px] border-solid border-[#808080e3] bg-[#ffffff70]">
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter the password"
            aria-label="Your name"
            autoComplete="name"
            className="h-full w-full px-6 text-center [font-family:'Noto_Sans',Helvetica] text-[35px] font-bold leading-[normal] tracking-[0] text-[#535353] placeholder:text-[#535353] focus:ring-2 focus:ring-[#535353] focus:ring-inset"
          />
        </div>
        {error && (
          <p className="mt-2 text-center text-red-600 font-bold">{error}</p>
        )}
      </form>
      <img
        className="absolute left-[683px] top-[546px] h-[478px] w-[338px]"
        alt="Graduation invitation"
        src="https://c.animaapp.com/8UGTXhe5/img/graduation-invitation--3--1@2x.png"
      />
      <img
        className="absolute left-[979px] top-[570px] h-[113px] w-[116px]"
        alt=""
        aria-hidden="true"
        src="https://c.animaapp.com/8UGTXhe5/img/graduation-invitation--2--3@2x.png"
      />
      <img
        className="absolute left-[979px] top-[639px] h-[113px] w-[116px]"
        alt=""
        aria-hidden="true"
        src="https://c.animaapp.com/8UGTXhe5/img/graduation-invitation--2--3@2x.png"
      />
      <img
        className="absolute left-[963px] top-[696px] h-[113px] w-[116px]"
        alt=""
        aria-hidden="true"
        src="https://c.animaapp.com/8UGTXhe5/img/graduation-invitation--2--3@2x.png"
      />
    </main>
  );
};
