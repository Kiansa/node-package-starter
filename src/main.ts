import { greet } from './utils/hello'
import type { Person } from './types/person'

function main() {
  const user: Person = {
    name: 'Alice',
    age: 30,
  }

  greet(user.name)
}

main()
