import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController {
  async create(req: Request, res: Response) {
    const { CAMPOS_ADD } = req.body; //campos a adicionar no create. Ex.: nome, email

    const user = await UserModel.create({
      CAMPOS_ADD
    });

    return res.status(201).json(user); //retorna OK 201 - correspondente ao create
  }

  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();

    if (users.length > 0) {
      return res.status(200).json(users); //retorna OK
    } else {
      return res.status(204).send(); //retorna sucesso 204 - No Content
    }
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params; //id pego por parâmetro na URL. Ex.: www.lorem.com/1 (id)

    const user = await UserModel.findOne({
      where: {
        id: id
      }
    });

    if (user) {
      return res.status(200).json();
    } else {
      return res.status(204).send();
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params; //id pego por parâmetro na URL. Ex.: www.lorem.com/1 (id)

    await UserModel.update(req.body, {
      where: {
        id: id
      }
    });

    return res.status(200).json();
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await UserModel.destroy({
      where: {
        id: id
      }
    });

    return res.status(200).json();
  }
}

export default new UserController();