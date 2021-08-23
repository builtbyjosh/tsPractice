const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

interface Reportable {
  summary(): string
}

const printSummary = (item: Reportable) => {
  console.log(item.summary())
}

printSummary(oldCivic)