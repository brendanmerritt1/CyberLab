import { FaChevronRight } from 'react-icons/fa6';

export default function Card(props) {
  return (
    <div class="flex w-full flex-col items-center gap-14 rounded-2xl bg-[#081f31] px-4 py-5">
      <h2 class="text-center text-3xl font-semibold tracking-wide">
        {props.title}
      </h2>
      <img src={props.image} alt={props.alt} class={`${props.width}`} />
      <button
        class={`flex w-64 flex-row items-center justify-end ${props.gap} rounded-full bg-[#163f44] p-4 text-xl`}
      >
        <span>{props.button}</span>
        <FaChevronRight />
      </button>
    </div>
  );
}
