import secrets from "bigint-secrets";

function powMod(n, p, m) {
  n = n % m;
  let r = 1n;
  while (p >= 1n) {
    if (p % 2n) {
      r = (r * n) % m;
    }
    n = (n * n) % m;
    p = p / 2n;
  }
  return r;
}

// длинна
const t = 512;

// закрытый ключ Алисы
const a = await secrets.prime(t);
// закрытый ключ Боба
const b = await secrets.prime(t);
// общее основание
const g = await secrets.prime(t);
// общий делитель
const p = await secrets.prime(t);

// открытый ключ Алисы
const A = powMod(g, a, p); //g ** a % p;
// открытый ключ Боба
const B = powMod(g, b, p); //g ** b % p;

// общий секретный ключ Алисы
const AB = powMod(B, a, p); //B ** a % p;
console.log(AB);

// общий секретный ключ Боба
const BA = powMod(A, b, p); //A ** b % p;
console.log(BA);
