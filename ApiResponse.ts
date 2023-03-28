export class ApiResponse<T>
{
    success:boolean;
    data:T;
    pager?:T;
    meta?:T;
    message:string;
    statusCode:number;

    public static success(data:any):ApiResponse<any>
    {
     let  response:ApiResponse<any> = new ApiResponse();
      response.data = data;
      response.success = true;
      return response;
    }

    public static message(message:any):ApiResponse<any>
  {
    let  response:ApiResponse<any> = new ApiResponse();
    response.message = message;
    response.success = true;
    return response;
  }

  public static error(message:string):ApiResponse<any>
  {
    let response:ApiResponse<any> = new ApiResponse();
    response.message = message;
    response.success = false;
    return response;
  }
}