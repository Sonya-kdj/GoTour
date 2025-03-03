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
	people!: string

	@Column()
	startData!: Date

	@Column()
	endData!: Date

	@Column()
	location: String

	@Column('simple-array', { nullable: true })
	images: string[] // Массив строк, где каждая строка — это путь к изображению
}
