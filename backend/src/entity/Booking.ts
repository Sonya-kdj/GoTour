import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
} from 'typeorm'
import { Tour } from './Tour'

@Entity()
export class Booking {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	phone: string

	@Column()
	email: string

	@Column()
	telegramLink: string

	@ManyToOne(() => Tour)
	@JoinColumn({ name: 'tour_id' })
	tour: Tour

	@Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
	bookingDate: Date
}
