//ランダム抽出
export function randomPick<T>(data:T[],count:number):T[] {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0,count);
}