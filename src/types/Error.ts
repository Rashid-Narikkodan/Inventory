export interface ErrorType {
  message: string;
  statusCode: number;
}

export interface ErrorResponse {
  success: false;
  message: string;
  statusCode?: number;
}

export interface SuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

