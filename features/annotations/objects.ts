const profile = {
  name: 'Josh',
  age: 37,
  coords: {
    let: 0,
    long: 15
  },
  setAge(age: number): void {
    this.age = age
  }
}
const { age, name }: {age: number; name: string} = profile;

const { coords:{ lat, long }}: { coords:{ lat: number; long: number }} = profile;
