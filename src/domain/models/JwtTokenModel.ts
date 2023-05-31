import { IEntity } from 'domain/shared/IEntity';

export class JwtTokenModel implements IEntity {
  id?: number;
  constructor(id: number) {
    this.id = id;
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof JwtTokenModel)) return false;
    return this.id === entity.id;
  }
}
