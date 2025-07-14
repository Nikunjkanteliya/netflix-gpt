export const CDN_IMG = "https://image.tmdb.org/t/p/w500/";
export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  cssEase: "ease-in-out",
  swipeToSlide: true,
  touchThreshold: 10,
  arrows: false,
  lazyLoad: true,
};
export const spinner = (
  <svg
    className="animate-spin h-12 w-12 ml-3 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-20"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-60"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8H4z"
    />
  </svg>
);
