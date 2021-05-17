import { DataTypes } from 'sequelize';
import { AllowNull, AutoIncrement, BelongsTo, BelongsToMany, Column, Default, ForeignKey, HasOne, Index, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { StudentStatus, StudentStatusEnum } from '../types';
import { SequelizeModel } from '../types/SequelizeModel';
import { Teacher } from './Teacher';
import { TeacherStudent } from './TeacherStudent';
import { User } from './User';

@Table
export class Student extends SequelizeModel<Student>{

    @PrimaryKey
    @ForeignKey(() => User)
    @Column(DataTypes.INTEGER.UNSIGNED)
    studentId!: number

    @AllowNull(true)
    @ForeignKey(() => Teacher)
    @Column(DataTypes.INTEGER.UNSIGNED)
    teacherId?: number

    @Column(DataTypes.ENUM(...StudentStatusEnum))
    status!: StudentStatus

    @AllowNull(false)
    @Default(DataTypes.NOW)
    @Column(DataTypes.DATE)
    createdAt!: Date

    @AllowNull(true)
    @Default(DataTypes.NOW)
    @Column(DataTypes.DATE)
    updatedAt!: Date

    @BelongsTo(() => User)
    user!: User

    @BelongsTo(() => Teacher)
    teacher?: Teacher

    // @BelongsToMany(() => Teacher, () => TeacherStudent)
    // teachers?: Teacher[]
}
