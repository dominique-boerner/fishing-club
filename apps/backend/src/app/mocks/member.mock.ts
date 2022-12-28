import { Member } from '@fishing-club/fishing-club-types';
import { HydratedDocument } from 'mongoose';

export const memberMock: Partial<HydratedDocument<Member>> = {
  id: '007f37a4-a2db-4b52-9ef6-cfbe457ba9e4',
  name: {
    first: "Max",
    second: "Mustermann"
  },
  birthdate: new Date("1990-01-01"),
  residence: {
    city: "Dresden",
    zip: "01239",
    street: "Musterstraße",
    country: "de"
  },
  workingHours: [],
  contact: {
    phone: "123 456 789 0",
    mail: "max@mustermann.de"
  },
  notes: ""
};

export const memberUpdateMock: Member = {
  name: {
    first: "Max",
    second: "Musterfrau"
  },
  birthdate: new Date("1990-01-01"),
  residence: {
    city: "Dresden",
    zip: "01239",
    street: "Musterstraße",
    country: "de"
  },
  workingHours: [],
  contact: {
    phone: "123 456 789 0",
    mail: "max@musterfrau.de"
  },
  notes: ""
};
