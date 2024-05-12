import { Question } from '../../enterprise/entities/question'
import { PaginationParams } from './pagination-params'

export interface QuestionsRepository {
  create(answer: Question): Promise<void>
  save(question: Question): Promise<void>
  findBySlug(slug: string): Promise<Question | null>
  findManyRecent(params: PaginationParams): Promise<Question[]>
  findById(id: string): Promise<Question | null>
  delete(question: Question): Promise<void>
}
