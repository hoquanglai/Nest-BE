import { Entity } from 'typeorm';

@Entity()
export class Base {
  private createdAt: Date;
  private updatedAt: Date;
}
