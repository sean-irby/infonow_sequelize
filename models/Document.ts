import { DataTypes } from 'sequelize';
import { AllowNull, AutoIncrement, BelongsTo, Column, Default, ForeignKey, Index, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { SequelizeModel } from '../types/SequelizeModel';
import { User } from './User';

@Table
export class Document extends SequelizeModel<Document>{

    @Index
    @PrimaryKey
    @AutoIncrement
    @Column(DataTypes.TINYINT.UNSIGNED)
    _documentId!: number

    @Index
    @AllowNull(false)
    @Unique(true)
    @Default(DataTypes.UUIDV4)
    @Column(DataTypes.STRING(36))
    documentId!: string

    @ForeignKey(() => User)
    userId!: number

    @BelongsTo(() => User)
    user!: User

    @AllowNull(false)
    @Column(DataTypes.STRING(20))
    fileType!: string

    @AllowNull(false)
    @Column(DataTypes.STRING(70))
    name!: string

    @AllowNull(false)
    @Default(DataTypes.NOW)
    @Column(DataTypes.DATE)
    createdAt!: Date

    @AllowNull(true)
    @Default(DataTypes.NOW)
    @Column(DataTypes.DATE)
    updatedAt!: Date

}