export interface EmployeeAddress {
  address: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface EmployeeCompany {
  department: string;
  title: string;
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  address: EmployeeAddress;
  company: EmployeeCompany;
}

export interface EmployeeListResponse {
  users: Employee[];
  total: number;
  skip: number;
  limit: number;
}

export type EmployeeStatus = 'active' | 'inactive';

export interface EmployeeFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  title: string;
  city: string;
  state: string;
  hireDate: string;
  salary: number;
  status: EmployeeStatus;
  image: string;
}
