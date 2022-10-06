import {StartDestinaion} from './start-destinaion';
import {EndDestination} from './end-destination';

export interface CarHome {
  id: number;
  plate?: number;
  name?: string;
  carType?: string;
  startDestination?: StartDestinaion;
  endDestination?: EndDestination;
  phone?: string;
  email?: string;
  timeGo?: string;
  timeEnd?: string;
}
