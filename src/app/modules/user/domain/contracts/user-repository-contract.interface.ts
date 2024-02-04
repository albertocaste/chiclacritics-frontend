import { Observable } from "rxjs";
import { User, UserResponse, UserModelResponse } from "../user.model";

export interface UserRepositoryContract {
    search(): Observable<UserResponse[]>;
}