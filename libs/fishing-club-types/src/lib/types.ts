/**
 * @type Birthdate
 */
export type Birthdate = Date;

/**
 * @type WorkingHours
 */
export type WorkingHours = Date;

/**
 * @type Fish
 */
export type Fish = string;

/**
 * @type Phone
 */
export type Phone = string;

/**
 * @type Name
 */
export type Name = {
  first: string;
  second: string;
};

/**
 * @type Notes
 */
export type Notes = string;

/**
 * @type Country
 */
export type Country = 'de';

/**
 * @type Residence
 * contains information about the residence of a member.
 */
export type Residence = {
  city: string;
  zip: string;
  street: string;
  Country: Country;
};

/**
 * @type Contact
 * contains contact information of a member.
 */
export type Contact = {
  phone: Phone;
  mail: string;
}

/**
 * @type Member
 */
export type Member = {
  name: Name;
  birthdate: Birthdate;
  residence: Residence;
  workingHours: WorkingHours[];
  contact: Contact;
  notes: Notes;
};

/**
 * @type Lake
 */
export type Lake = {
  img: string;
  name: string;
  fishSpecies: Fish[];
}