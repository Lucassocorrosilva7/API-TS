import { RolesRepository } from '@roles/repositories/RolesRepository'
import { CreateRoleController } from './CreateRoleController'
import { CreateRoleUseCase } from './CreateRoleUserCase'

const rolesRepository = new RolesRepository()
const createRoleUseCase = new CreateRoleUseCase(rolesRepository)
export const createRolesController = new CreateRoleController(createRoleUseCase)
