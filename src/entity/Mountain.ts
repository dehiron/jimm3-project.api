import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Mountain {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    prefecture: string;

    @Column()
    height: number;
    

}
