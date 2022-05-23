type optionalNumber = number | undefined;
type iterable = Iterable<unknown>;
type enumerator = Generator<[number, unknown]>;

export function range(start: number, stop: optionalNumber = undefined) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  return [...Array(stop - start).keys()].map((k) => k + start);
}

export function zip(a: number[], b: string[]) {
  return a.map((k, i) => [k, b[i]]);
}

export function* enumerate(iter: iterable, start = 0): enumerator {
  let counter = start;
  for (const ell of iter) {
    yield [counter, ell];
    counter++;
  }
}
