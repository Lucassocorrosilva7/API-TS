import { Role } from '@roles/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'

export class ListRolesUseCase {
  constructor(private rolesReposity: RolesRepository) {}
  execute(): Role[] {
    return this.rolesReposity.findAll()
  }
}
