export interface IPerson {
  name: string
  job: string
  email: string
  phone: string
  address: string
  date: string
}

export interface IProject {
  id: string
  title: string
  description: string
  url: string
}

export interface IEducation {
  id: string
  school: string
  degree?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
  description?: string
}

export interface IExperience {
  id: string
  employer: string
  job?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
  description?: string
}
