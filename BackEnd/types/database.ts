export type DatabaseTypes = {
  id: number,
  start: string,
  end: string,
  name: string,
  identifier: string,
  locate: string,
  age: string,
  potentialAction: string,
  action: string,
  about: string,
  linkAbout: string,
  approved: string,
  keyWord: string
};

export type JsonTypes = {[x:string]: string};

export type Users = {
  id: number, 
  name: string,
  email: string,
  password:string,
  role: string,
}