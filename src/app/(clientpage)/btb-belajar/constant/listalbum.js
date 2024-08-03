/* import {
  RxCorp,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";
 */
import {BTBBelajarPayload} from '../../../../../data';

/* export const ServiceData = [
  {
    backgroundImage:
      "https://w6i8.c1.e2-7.dev/assets/btbschool/images/paud1.jpg",
  },
  {
    backgroundImage:
      "https://w6i8.c1.e2-7.dev/assets/btbschool/images/paud1.jpg",
  },
  {
    backgroundImage:
      "https://w6i8.c1.e2-7.dev/assets/btbschool/images/paud1.jpg",
  },
  {
    backgroundImage:
      "https://w6i8.c1.e2-7.dev/assets/btbschool/images/paud1.jpg",
  },
  {
    backgroundImage:
      "https://w6i8.c1.e2-7.dev/assets/btbschool/images/paud1.jpg",
  },
  {
    backgroundImage:
      "https://w6i8.c1.e2-7.dev/assets/btbschool/images/paud1.jpg",
  },
  {
    backgroundImage:
      "https://w6i8.c1.e2-7.dev/assets/btbschool/images/paud1.jpg",
  },
  {
    backgroundImage:
      "https://w6i8.c1.e2-7.dev/assets/btbschool/images/paud1.jpg",
  },
  {
    backgroundImage:
      "https://w6i8.c1.e2-7.dev/assets/btbschool/images/paud1.jpg",
  },
]; */

export const ServiceData = BTBBelajarPayload.albumimage.map((val) => {
  return {"backgroundImage": val}
})