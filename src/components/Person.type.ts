/* -----------------Example of Export Custom Types ------------------ */

/* Normal Example  */
/* export type PersonProps = {
    name: {
      firstName: string;
      lastName: string;
    };
  }; */

/* -------------Making name another type */

export type Name = {
  firstName: string;
  lastName: string;
};

export type PersonProps = {
  name: Name;
};
