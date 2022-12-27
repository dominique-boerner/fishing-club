import { Lake } from '@fishing-club/fishing-club-types';
import { HydratedDocument } from 'mongoose';

export const lakeMock: Partial<HydratedDocument<Lake>> = {
  id: '007f37a4-a2db-4b52-9ef6-cfbe457ba9e4',
  name: 'Mandau',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gentau_Pic_du_Midi_Ossau.jpg/1920px-Gentau_Pic_du_Midi_Ossau.jpg',
  fishSpecies: ['Aal'],
};

export const lakeUpdateMock: Lake = {
  name: 'Lache',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gentau_Pic_du_Midi_Ossau.jpg/1920px-Gentau_Pic_du_Midi_Ossau.jpg',
  fishSpecies: ['Aal'],
};
