import { AnswerRepository } from '../repositories/answers-repository'

interface AnswerUseCaseRequest {
  authorId: string
  answerId: string
}

interface AnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private answerRepository: AnswerRepository) {}

  async execute({
    authorId,
    answerId,
  }: AnswerUseCaseRequest): Promise<AnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (authorId !== answer?.authorId.toString()) {
      throw new Error('Not allowed')
    }

    if (!answer) {
      throw new Error('Answer not found')
    }

    await this.answerRepository.delete(answer)

    return {}
  }
}
