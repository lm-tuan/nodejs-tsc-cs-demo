import { isEmpty } from "lodash";
import { isNullOrUndefined } from "util";
import { MissingRequiredInputsProblem, Problem, UnauthorizedProblem } from "../../../domain/entities/Problem";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IJwtProvider } from "../../security/IJwtProvider";

export default class Authenticate {
  private readonly userRepository: IUserRepository // get data to 
  private readonly jwtProvider: IJwtProvider // error provider token

  constructor(
    userRepository: IUserRepository,
    jwtProvider: IJwtProvider
  ) {
    this.userRepository = userRepository
    this.jwtProvider = jwtProvider
  }

  public async execute(email: string, password: string): Promise<string | Problem> {
    // tslint:disable-next-line: possible-timing-attack
    if (isEmpty(email) || isEmpty(password)) {
      return new MissingRequiredInputsProblem
    }

    const user = await this.userRepository.loadByEmailAndPassword(email, password)
    if (isNullOrUndefined(user)) {
      return new UnauthorizedProblem({
        detail: 'Invalid credential'
      })
    }

    return this.jwtProvider.generateToken({
      id: JSON.stringify(user.id)
    })
  }
}