import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersServiceController, CreateUserDto, UpdateUserDto, UsersServiceControllerMethods, FindOneUserDto, PaginationDto } from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController {
  constructor(private readonly usersService: UsersService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  findAllUsers() {
    return this.usersService.findAll();
  }

  findOneUser(FindOneUserDto: FindOneUserDto) {
    return this.usersService.findOne(FindOneUserDto.id);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  removeUser(FindOneUserDto: FindOneUserDto) {
    return this.usersService.remove(FindOneUserDto.id);
  }

  queryUsers(PaginationDtoStream: Observable<PaginationDto>) {
      return this.usersService.queryUsers(PaginationDtoStream)
  }
}
