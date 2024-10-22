import { Injectable } from '@angular/core';
import { UserDTO } from '../Models/UserDTO';
import { User } from '../Types/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  private readonly USER_KEY = 'user'; // Key for storing user object in sessionStorage
  private readonly USER_ID_KEY = 'userId'; // Key for storing user ID in sessionStorage

  constructor() {}

  // Method to set the user object and store it in sessionStorage
  setUser(user: UserDTO): Observable<void> {
    let data: User = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.email,
    };
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(data)); // Store the user data as a JSON string
    return of(); // Return an observable that emits when done
  }

  // Method to get the user object from sessionStorage
  getUser(): Observable<User | null> {
    const userData = sessionStorage.getItem(this.USER_KEY); // Retrieve the JSON string from sessionStorage
    const user = userData ? JSON.parse(userData) : null; // Parse and return the user object, or null if not found
    return of(user); // Wrap the result in an observable
  }

  // Method to clear the user object from sessionStorage
  clearUser(): Observable<void> {
    sessionStorage.removeItem(this.USER_KEY); // Remove the user data from sessionStorage
    return of(); // Return an observable that emits when done
  }
}
