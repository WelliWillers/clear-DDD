import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "./value-objects/unique-entity-id";

interface InstructorProps {
  id: UniqueEntityID;
  name: string;
}

export class Instructor extends Entity<InstructorProps> {
  get name() {
    return this.props.name;
  }

  static create(props: InstructorProps, id: UniqueEntityID) {
    const instructor = new Instructor(props, id);

    return instructor;
  }
}
