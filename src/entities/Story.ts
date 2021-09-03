import {
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    ManyToOne,
} from "typeorm";
import { User } from ".";
import { COMPLEXITY, TYPE, STATUS } from "../util/Enums";

@Entity("Story")
export class Story extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    summary: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    type: TYPE;

    @Column({ nullable: false, default: COMPLEXITY.LOW })
    complexity: COMPLEXITY;

    @Column({ nullable: false, default: STATUS.NEW })
    status: STATUS;

    @Column({ nullable: false, default: 1})
    workingHrsRequired: number;

    @ManyToOne(() => User, user => user.stories)
    user: User;

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
