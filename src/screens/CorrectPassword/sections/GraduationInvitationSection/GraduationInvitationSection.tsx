import { useEffect, useId, useRef, useState } from "react";
import musicUrl from "../../../../assets/music.mp3";

const backgroundImageUrl = "https://c.animaapp.com/ksaCiZyU/img/image-1.png";
const thumbnailImageUrl =
  "https://c.animaapp.com/ksaCiZyU/img/thumbnail-img@2x.png";
const graduationImageUrl =
  "https://c.animaapp.com/ksaCiZyU/img/graduation-invitation--2--1-1@2x.png";

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

export const GraduationInvitationSection = (): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressId = useId();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => {
      setCurrentTime(Math.floor(audio.currentTime));
    };
    const onEnded = () => {
      if (!isRepeating) setIsPlaying(false);
      setCurrentTime(0);
    };
    const onLoaded = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        setDuration(Math.floor(audio.duration));
      }
    };
    const onError = (e: Event) => {
      console.error("Audio error:", (e.target as HTMLAudioElement).error);
    };
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("error", onError);
    if (audio.readyState >= 1) {
      onLoaded();
    }
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("error", onError);
    };
  }, [isRepeating]);

  const safeDuration = (() => {
    const audio = audioRef.current;
    const d = audio ? (audio.duration ? audio.duration : duration) : duration;
    return d > 0 && isFinite(d) ? d : 1;
  })();
  const progress = safeDuration > 0 ? (currentTime / safeDuration) * 100 : 0;

  return (
    <section
      className="absolute top-[1024px] left-[-22px] w-[1462px] h-[2152px]"
      aria-label="Graduation invitation music"
    >
      <img
        className="absolute top-0 left-[22px] w-[1440px] h-[2152px] aspect-[0.68]"
        alt=""
        aria-hidden="true"
        src={backgroundImageUrl}
      />
      <div className="inline-flex items-start absolute top-[372px] left-[210px]">
        <article className="flex w-[1063px] items-center justify-between relative bg-[#fffef7cc] rounded-[14.7px] border-[3px] border-solid border-[#0000006e]">
          <img
            className="relative w-[378px] h-[426px]"
            alt="Graduate standing outdoors beneath a tree"
            src={thumbnailImageUrl}
          />
          <div className="flex flex-col w-[685px] items-center gap-[60px] px-8 py-[42px] relative mr-[-3.00px]">
            <div className="relative self-stretch w-full h-[93px]">
              <div className="w-[603px] h-[93px] flex gap-[17.5px]">
                <img
                  className="w-[103.48px] h-[93.24px] aspect-[1.25]"
                  alt=""
                  aria-hidden="true"
                  src={graduationImageUrl}
                />
                <p className="mt-[16.0px] w-[480px] h-12 [font-family:'Dancing_Script',Helvetica] font-bold text-[#435841] text-[45px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Click here to feel the music
                  <br />
                  And scroll down for the vibe
                </p>
              </div>
            </div>
            <div className="relative w-[588px] h-[123px]">
              <div className="relative w-[590px] h-[123px]">
                <label htmlFor={progressId} className="sr-only">
                  Music progress
                </label>
                <input
                  id={progressId}
                  className="absolute top-[7px] left-[23px] z-10 w-[500px] h-2.5 cursor-pointer appearance-none rounded-none bg-transparent"
                  type="range"
                  min="0"
                  max={safeDuration}
                  value={currentTime}
                  onChange={(event) => {
                    const val = Number(event.currentTarget.value);
                    setCurrentTime(val);
                    const audio = audioRef.current;
                    if (audio) audio.currentTime = val;
                  }}
                  aria-valuemin={0}
                  aria-valuemax={safeDuration}
                  aria-valuenow={currentTime}
                  aria-valuetext={formatTime(currentTime)}
                />
                <div
                  className="absolute top-[7px] left-[23px] w-[500px] h-2.5 bg-[#dadada]"
                  aria-hidden="true"
                >
                  <div
                    className="h-2.5 bg-[#b35353]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <button
                  className="all-unset absolute top-[23px] left-[calc(50.00%_-_59px)] flex w-[100px] h-[100px] cursor-pointer items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#435841]"
                  type="button"
                  onClick={() => {
                    const audio = audioRef.current;
                    if (!audio) return;
                    if (audio.paused) {
                      audio.play().catch((err: unknown) => {
                        console.error("Playback failed:", err);
                        setIsPlaying(false);
                      });
                      setIsPlaying(true);
                    } else {
                      audio.pause();
                      setIsPlaying(false);
                    }
                  }}
                  aria-label={isPlaying ? "Pause music" : "Play music"}
                >
                  <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full border-[3px] border-solid border-[#435841] bg-[#fffef7] shadow-sm">
                    {isPlaying ? (
                      <span className="flex gap-[8px]" aria-hidden="true">
                        <span className="h-7 w-2 bg-[#435841]" />
                        <span className="h-7 w-2 bg-[#435841]" />
                      </span>
                    ) : (
                      <svg
                        width="28"
                        height="32"
                        viewBox="0 0 28 32"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M27 16L1 31V1L27 16Z" fill="#435841" />
                      </svg>
                    )}
                  </span>
                </button>
                <button
                  className={`all-unset absolute top-[47px] right-0 flex w-[50px] h-[50px] cursor-pointer items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#435841] ${
                    isFavorite ? "text-[#b35353]" : "text-[#435841]"
                  }`}
                  type="button"
                  onClick={() => setIsFavorite((favorite) => !favorite)}
                  aria-pressed={isFavorite}
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill={isFavorite ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                  </svg>
                </button>
                <button
                  className={`all-unset absolute top-12 left-0 flex w-[50px] h-[50px] cursor-pointer items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#435841] ${
                    isRepeating ? "text-[#b35353]" : "text-[#435841]"
                  }`}
                  type="button"
                  onClick={() => {
                    const audio = audioRef.current;
                    if (!audio) return;
                    audio.currentTime = 0;
                    setCurrentTime(0);
                    audio.play().catch((err: unknown) =>
                      console.error("Replay failed:", err)
                    );
                    setIsPlaying(true);
                  }}
                  aria-pressed={isRepeating}
                  aria-label={isRepeating ? "Restart song" : "Restart song"}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M17 1l4 4-4 4" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <path d="M7 23l-4-4 4-4" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                </button>
                <time
                  className="absolute top-0 right-0.5 [font-family:'Inter',Helvetica] font-normal text-black-light text-xl tracking-[0] leading-[normal] whitespace-nowrap"
                  dateTime={`PT${currentTime}S`}
                >
                  {formatTime(currentTime)}
                </time>
              </div>
            </div>
          </div>
        </article>
      </div>
      <audio
        ref={audioRef}
        src={musicUrl}
        preload="metadata"
        playsInline
      />
      <img
        className="absolute top-[463px] left-[1215px] w-60 h-[465px]"
        alt=""
        src="https://c.animaapp.com/VuAHDq9x/img/vector-235-1.svg"
      />
    </section>
  );
};