import httpClient from '../api/httpClient';
import type { Employee, EmployeeListResponse } from '../types/employee';

const employeeService = {
  getEmployees: async (params?: { limit?: number; skip?: number }) => {
    const response = await httpClient.get<EmployeeListResponse>('/users', {
      params,
    });
    return response.data;
  },
  getEmployeeById: async (id: number) => {
    const response = await httpClient.get<Employee>(`/users/${id}`);
    return response.data;
  },
  createEmployee: async (employeeData: Partial<Employee>) => {
    const response = await httpClient.post<Employee>(
      '/users/add',
      employeeData
    );
    return response.data;
  },
  updateEmployee: async (id: number, employeeData: Partial<Employee>) => {
    const response = await httpClient.put<Employee>(
      `/users/${id}`,
      employeeData
    );
    return response.data;
  },
  deleteEmployee: async (id: number) => {
    const response = await httpClient.delete<Employee>(`/users/${id}`);
    return response.data;
  },
};

export default employeeService;
