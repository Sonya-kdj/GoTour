import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Tour {
	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	name!: string

	@Column()
	description!: string

	@Column()
	price!: number

	@Column()
	startData!: Date

	@Column()
	endData!: Date

	@Column()
	location: String

	@Column('json', { nullable: true })
	images: string[]
}
