import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ modelName: 'tracks' })
export class Track extends Model<Track> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  artist: string;

  @Column({ type: DataType.STRING })
  picture: string;

  @Column({ type: DataType.STRING })
  audio: string;
}
