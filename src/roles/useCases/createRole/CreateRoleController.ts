import { Request, Response } from 'express'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { CreateRoleUseCase } from './CreateRoleUserCase'

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name } = request.body
    const role = this.createRoleUseCase.execute({ name })

    return response.status(201).json(role)
  }
}
