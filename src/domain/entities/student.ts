import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from './value-objects/unique-entity-id'

interface StudentProps {
  id: UniqueEntityID
  name: string
}

export class Student extends Entity<StudentProps> {
  get name() {
    return this.props.name
  }

  static create(props: StudentProps, id: UniqueEntityID) {
    const student = new Student(props, id)

    return student
  }
}
