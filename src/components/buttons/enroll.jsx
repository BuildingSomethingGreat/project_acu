import { useStore } from '@nanostores/react';
import { isEnrolled } from '../../store';

export default function Enroll() {
  // read the store value with the `useStore` hook
  const $isEnrolledSelected = useStore(isEnrolled);
  // write to the imported store using `.set`
  return (
    <div  onClick={() => isEnrolled.set(!$isEnrolledSelected)} class="w-[90%] h-[50px] rounded-full bg-black hover:bg-blue-600 transition-colors  ease-in-out flex items-center justify-center cursor-pointer">
        <p class="font-bold m-auto h-fit text-white text-center">Enroll Now</p>
    </div>
  ) 
}