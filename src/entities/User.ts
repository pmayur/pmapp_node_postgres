import {
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
} from "typeorm";

@Entity("User")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    firstName: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false, default: false })
    isAdmin: string;

    @CreateDateColumn({
        nullable: false,
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
    })
    public createdAt: Date;

    @UpdateDateColumn({
        nullable: false,
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)",
    })
    public updatedAt: Date;
}
